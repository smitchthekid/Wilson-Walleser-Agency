// All site copy lives here. Edit this file to change names, services, and contact details.

export const brand = {
  name: 'Wilson + Walleser',
  shortName: 'W+W',
  tagline: 'Digital marketing, run by the people you actually talk to.',
  email: 'info@wilson-walleser.com',
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
  slug: string; // URL: /services/<slug>
  title: string;
  description: string;
  items: string[];
  intro: string;
  included: { title: string; description: string }[];
  idealFor: string[];
  relatedPosts: string[]; // blog post slugs from content/blog/
};

// TODO: review the detail copy for each service and adjust to what you actually offer.
export const services: Service[] = [
  {
    slug: 'brand-strategy',
    title: 'Brand & Strategy',
    description: 'Get clear on who you serve, what makes you different, and how to say it.',
    items: ['Positioning & messaging', 'Visual identity', 'Go-to-market planning'],
    intro:
      'Every campaign works better when the foundation is right. We help you define your audience, sharpen your message, and plan where to show up first.',
    included: [
      { title: 'Positioning & messaging', description: 'A clear statement of who you serve, the problem you solve, and why you, written so your whole team can use it.' },
      { title: 'Visual identity', description: 'Logo refresh, colors, type, and a simple brand guide that keeps everything consistent.' },
      { title: 'Go-to-market planning', description: 'A prioritized channel plan with budgets and goals for the first 90 days.' },
      { title: 'Competitor review', description: 'What others in your market say and spend, and where the openings are.' },
    ],
    idealFor: ['New businesses getting ready to launch', 'Established businesses that have outgrown their brand', 'Teams entering a new market or product line'],
    relatedPosts: [
      'theres-a-gap-between-digital-the-corner-store-asking-the-right-questions',
      'breaking-through-saturated-markets-and-modeling-data-that-matters',
    ],
  },
  {
    slug: 'websites',
    title: 'Websites & Landing Pages',
    description: 'Fast, good-looking sites built to turn visitors into leads and sales.',
    items: ['Design & development', 'Conversion optimization', 'Ongoing care'],
    intro:
      'Your website is where most of your marketing ends up. We design and build sites that load fast, read clearly, and make it easy for visitors to take the next step.',
    included: [
      { title: 'Design & development', description: 'Custom design and a site you can edit yourself, built mobile-first.' },
      { title: 'Landing pages', description: 'Focused pages for campaigns, offers, and launches.' },
      { title: 'Conversion optimization', description: 'Testing headlines, forms, and layouts to turn more visitors into leads.' },
      { title: 'Ongoing care', description: 'Hosting, updates, backups, and small changes handled for you each month.' },
    ],
    idealFor: ['Businesses with an outdated or slow site', 'Campaigns that need a dedicated landing page', 'Anyone who wants a site they can update themselves'],
    relatedPosts: [
      'how-much-does-a-website-cost',
      'how-much-influence-does-the-internet-have-on-customer-purchases',
    ],
  },
  {
    slug: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'Search and social campaigns managed against real business outcomes.',
    items: ['Google & Microsoft Ads', 'Meta & TikTok Ads', 'Shopping feeds'],
    intro:
      'We plan, launch, and manage ad campaigns that are measured on leads and revenue, not clicks. Every dollar is tracked back to results.',
    included: [
      { title: 'Search ads', description: 'Google and Microsoft Ads campaigns built around the searches your customers actually make.' },
      { title: 'Social ads', description: 'Meta and TikTok campaigns with creative made for each platform.' },
      { title: 'Shopping feeds', description: 'Product feed setup and optimization for e-commerce stores.' },
      { title: 'Monthly optimization', description: 'Bids, budgets, audiences, and ads adjusted every month based on performance.' },
    ],
    idealFor: ['Businesses ready to buy leads or sales at a known cost', 'Online stores selling products', 'Launches that need reach quickly'],
    relatedPosts: [
      'the-truth-about-google-advertising-differences-between-google-facebook-advertising-strategies',
      'strategies-for-product-advertising-campaigns',
    ],
  },
  {
    slug: 'seo-content',
    title: 'SEO & Content',
    description: 'Be the answer when your customers search, with content worth reading.',
    items: ['Technical & local SEO', 'Blog & web copy', 'Content strategy'],
    intro:
      'Search is where people go when they are ready to buy. We make your site easy to find and fill it with content that answers real questions.',
    included: [
      { title: 'Technical SEO', description: 'Site speed, structure, and indexing fixes so search engines can read your site.' },
      { title: 'Local SEO', description: 'Google Business Profile, listings, and reviews for businesses that serve an area.' },
      { title: 'Blog & web copy', description: 'Articles and page copy written for your customers first and search engines second.' },
      { title: 'Content strategy', description: 'A keyword-backed plan for what to publish and when.' },
    ],
    idealFor: ['Businesses that want leads without paying per click', 'Local service businesses', 'Companies with expertise worth sharing'],
    relatedPosts: [
      'what-is-content-marketing-how-does-it-outperform-paid-advertising',
      'how-humans-search-for-things-online-if-that-then-this',
      'find-the-right-seo-tool',
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    description: 'A consistent, on-brand presence that builds an audience over time.',
    items: ['Content calendars', 'Short-form video', 'Community management'],
    intro:
      'We keep your social channels active and on-brand, with content your audience wants to see and a team that answers when they reach out.',
    included: [
      { title: 'Content calendars', description: 'A monthly plan of posts you approve before anything goes live.' },
      { title: 'Short-form video', description: 'Reels, TikToks, and Shorts planned, filmed, and edited.' },
      { title: 'Community management', description: 'Replies to comments and messages so no customer is left waiting.' },
      { title: 'Monthly reporting', description: 'What grew, what worked, and what we will try next.' },
    ],
    idealFor: ['Businesses with no time to post consistently', 'Brands that sell to consumers', 'Creators and musicians building an audience'],
    relatedPosts: [
      'breaking-through-saturated-markets-and-modeling-data-that-matters',
      'what-is-content-marketing-how-does-it-outperform-paid-advertising',
    ],
  },
  {
    slug: 'email-analytics',
    title: 'Email & Analytics',
    description: 'Nurture the leads you earn and know exactly what is working.',
    items: ['Email & automation', 'Tracking setup', 'Plain-English reporting'],
    intro:
      'Most leads are not ready to buy on day one. We set up email that keeps you in touch, and tracking that shows which marketing actually pays off.',
    included: [
      { title: 'Email & automation', description: 'Welcome series, newsletters, and follow-ups that run on their own.' },
      { title: 'Tracking setup', description: 'Google Analytics, conversion tracking, and tag management done properly.' },
      { title: 'Dashboards', description: 'One place to see leads, sales, and spend across every channel.' },
      { title: 'Plain-English reporting', description: 'A monthly summary of results and next steps, without the jargon.' },
    ],
    idealFor: ['Businesses collecting leads they never follow up with', 'Teams unsure which channels are working', 'Anyone who wants clearer reporting'],
    relatedPosts: [
      'google-analytics-metrics-for-beginners',
      'google-analytics-navigation-guide',
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const blog = {
  heading: 'Notes on marketing that works.',
  intro: 'Guides and opinions on websites, search, advertising, and measuring what matters.',
};

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
  bio: string[];
  initials: string;
};

export const founders: Founder[] = [
  {
    name: 'Mitch Walleser',
    role: 'Senior Marketing Consultant',
    bio: [
      'Mitch Walleser is a senior marketing consultant with 9+ years helping businesses scale through SEO, paid search, and performance analytics. He specializes in diagnosing what is holding campaigns back, fixing broken tracking systems, and translating complex data into straightforward decisions for business owners.',
      'Client engagements span critical manufacturing, automotive, hospitality, and AI startups. Day-to-day work often involves managing major paid search spend, overhauling attribution pipelines, and building custom marketing tools—grounding technical execution directly in business reality.',
    ],
    initials: 'MW',
  },
  {
    name: 'Katelyn Wilson',
    role: 'Director of Sales & Partnerships',
    bio: [
      'Katelyn Wilson leads client partnerships and revenue growth as Director of Sales and Partnerships. She meets with prospects to understand their challenges and identifies whether the agency can help. She develops solutions and manages the full relationship from discovery through delivery and expansion.',
      "She spent six years driving business development and scaling sales operations in B2B markets, building high-performing teams and managing complex client relationships. She's handled CRM systems, executed integrated marketing campaigns, and worked across competitive markets. She has a degree in Communication Studies and Marketing and entrepreneurial experience as a small business owner.",
    ],
    initials: 'KW',
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
