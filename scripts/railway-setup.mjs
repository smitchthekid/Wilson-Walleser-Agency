// One-command setup for the password-protected Railway QA preview.
//
//   npm run railway:setup
//
// Installs the Railway CLI if needed, logs in, creates the project and a
// service that deploys from GitHub `main`, sets PREVIEW_USER / PREVIEW_PASSWORD,
// and generates the public URL. Safe to re-run: existing pieces are reused.
//
// Optional env vars: PREVIEW_USER (default "qa"), PREVIEW_PASSWORD (prompted
// if unset), RAILWAY_PROJECT, RAILWAY_SERVICE.
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';

const REPO = 'smitchthekid/wilson-walleser-agency';
const BRANCH = 'main';
const PROJECT = process.env.RAILWAY_PROJECT || 'wilson-walleser-agency';
const SERVICE = process.env.RAILWAY_SERVICE || 'qa-preview';
const USER = process.env.PREVIEW_USER || 'qa';

const isWindows = process.platform === 'win32';

// Run a command. `quiet` captures output instead of showing it.
function run(cmd, args, { quiet = false, input } = {}) {
  const result = spawnSync(cmd, args, {
    shell: isWindows, // npm-installed CLIs are .cmd files on Windows
    stdio: quiet || input !== undefined ? ['pipe', 'pipe', 'pipe'] : 'inherit',
    input,
    encoding: 'utf8',
  });
  return { ok: result.status === 0, out: `${result.stdout ?? ''}${result.stderr ?? ''}` };
}

function railway(args, opts) {
  return run('railway', args, opts);
}

function step(message) {
  console.log(`\n→ ${message}`);
}

function fail(message) {
  console.error(`\n✗ ${message}`);
  process.exit(1);
}

async function askPassword() {
  if (process.env.PREVIEW_PASSWORD) return process.env.PREVIEW_PASSWORD;
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const answer = (await rl.question(`Password for the QA preview (user "${USER}"): `)).trim();
  rl.close();
  if (!answer) fail('A password is required.');
  return answer;
}

step('Checking for the Railway CLI');
if (!railway(['--version'], { quiet: true }).ok) {
  console.log('Not found. Installing @railway/cli globally…');
  if (!run('npm', ['install', '-g', '@railway/cli']).ok) {
    fail('Could not install the Railway CLI. Install it manually: npm install -g @railway/cli');
  }
}

step('Checking Railway login');
if (!railway(['whoami'], { quiet: true }).ok) {
  if (!railway(['login']).ok) fail('Railway login failed.');
}

const password = await askPassword();

step(`Linking project "${PROJECT}"`);
if (railway(['status'], { quiet: true }).ok) {
  console.log('This folder is already linked to a Railway project; using it.');
} else if (!railway(['init', '--name', PROJECT]).ok) {
  fail('Could not create the Railway project.');
}

step(`Creating service "${SERVICE}" from GitHub ${REPO} (${BRANCH})`);
const exists = railway(['variable', 'list', '--service', SERVICE], { quiet: true }).ok;
let fromGitHub = true;
if (exists) {
  console.log('Service already exists; reusing it.');
} else if (!railway(['add', '--service', SERVICE, '--repo', REPO, '--branch', BRANCH]).ok) {
  // Usually means the Railway GitHub app can't see the repo yet.
  console.log('\nCould not connect the GitHub repo. Falling back to uploading this folder.');
  console.log('(To get automatic deploys on every push to main, install the Railway GitHub app');
  console.log(' for this repo at https://railway.com/account, then connect it under');
  console.log(` Service → Settings → Source.)`);
  if (!railway(['add', '--service', SERVICE]).ok) fail('Could not create the service.');
  fromGitHub = false;
}

step('Setting the preview login');
if (!railway(['variable', 'set', `PREVIEW_USER=${USER}`, '--service', SERVICE, '--skip-deploys']).ok) {
  fail('Could not set PREVIEW_USER.');
}
// Password goes through stdin so it isn't visible in the process list.
const setPassword = railway(
  ['variable', 'set', 'PREVIEW_PASSWORD', '--stdin', '--service', SERVICE],
  { input: password },
);
if (!setPassword.ok) fail(`Could not set PREVIEW_PASSWORD.\n${setPassword.out}`);

if (!fromGitHub) {
  step('Uploading and deploying this folder');
  if (!railway(['up', '--service', SERVICE, '--detach']).ok) fail('Deploy failed.');
}

step('Getting the public URL');
const domain = railway(['domain', '--service', SERVICE], { quiet: true });
const url = domain.out.match(/https:\/\/[^\s]+/)?.[0];
if (!url) {
  console.log(domain.out.trim());
  fail('Could not generate a domain. Generate one under Service → Settings → Networking.');
}

console.log(`
✓ Done. The first build takes a few minutes.

  URL:       ${url}
  Username:  ${USER}
  Password:  (the one you entered)

Watch the build:  railway logs --service ${SERVICE} --build
`);
