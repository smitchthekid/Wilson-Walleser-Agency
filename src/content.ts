// All site copy lives here. Edit this file to change names, services, and contact details.

export const brand = {
  name: 'Wilson + Walleser',
  shortName: 'W+W',
  tagline: 'Digital marketing, run by the people you actually talk to.',
  email: 'hello@example.com', // TODO: replace with the agency inbox
  location: 'Remote-first, working with clients everywhere',
};

export const hero = {
  eyebrow: 'A husband-and-wife digital marketing agency',
  headline: 'Marketing that grows your business, not your agency bill.',
  subhead:
    'We plan, build, and run the campaigns, websites, and content that bring in customers. You work directly with the two founders on every account.',
  primaryCta: 'Start a project',
  secondaryCta: 'See what we do',
};

export type Service = {
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: 'Brand & Strategy',
    description: 'Get clear on who you serve, what makes you different, and how to say it.',
    items: ['Positioning & messaging', 'Visual identity', 'Go-to-market planning'],
  },
  {
    title: 'Websites & Landing Pages',
    description: 'Fast, good-looking sites built to turn visitors into leads and sales.',
    items: ['Design & development', 'Conversion optimization', 'Ongoing care'],
  },
  {
    title: 'Paid Advertising',
    description: 'Search and social campaigns managed against real business outcomes.',
    items: ['Google & Microsoft Ads', 'Meta & TikTok Ads', 'Shopping feeds'],
  },
  {
    title: 'SEO & Content',
    description: 'Be the answer when your customers search, with content worth reading.',
    items: ['Technical & local SEO', 'Blog & web copy', 'Content strategy'],
  },
  {
    title: 'Social Media',
    description: 'A consistent, on-brand presence that builds an audience over time.',
    items: ['Content calendars', 'Short-form video', 'Community management'],
  },
  {
    title: 'Email & Analytics',
    description: 'Nurture the leads you earn and know exactly what is working.',
    items: ['Email & automation', 'Tracking setup', 'Plain-English reporting'],
  },
];

export const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We learn your business, your customers, and where you are today.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'You get a focused plan with clear priorities, budget, and goals.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'We build and launch the work, and keep you in the loop throughout.',
  },
  {
    step: '04',
    title: 'Improve',
    description: 'We measure, report, and adjust every month to get better results.',
  },
];

export const values = [
  {
    title: 'Founders on every account',
    description: 'No hand-offs to a junior team. The people who pitch you do the work.',
  },
  {
    title: 'Clear, honest reporting',
    description: 'Numbers that tie back to your goals, explained without the jargon.',
  },
  {
    title: 'Built around your goals',
    description: 'We recommend what will move your business, not what is easiest to sell.',
  },
];

export type Founder = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

// TODO: add real bios (and optionally a photo) for each founder.
export const founders: Founder[] = [
  {
    name: 'Mitchell',
    role: 'Co-founder',
    bio: 'Add a short bio for Mitchell: background, specialties, and what you love about this work.',
    initials: 'M',
  },
  {
    name: 'Katelyn',
    role: 'Co-founder',
    bio: 'Add a short bio for Katelyn: background, specialties, and what you love about this work.',
    initials: 'K',
  },
];

export const about = {
  heading: 'Two founders. One team. Your partner.',
  body: [
    'We started this agency together because we wanted to build something we would want to hire ourselves: a small, senior team that treats your budget like our own.',
    'When you work with us, you get both of us: strategy and creative, planning and execution, working side by side on your growth.',
  ],
};

export const contact = {
  heading: "Let's grow something together.",
  body: 'Tell us a little about your business and what you want to achieve. We reply to every message within one business day.',
  budgets: ['Not sure yet', 'Under $2,500 / month', '$2,500 to $5,000 / month', '$5,000 to $10,000 / month', '$10,000+ / month'],
};
