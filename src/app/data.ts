export interface Metric {
  value: string;
  label: string;
}

export interface Job {
  company: string;
  domain: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface DomainCard {
  icon: string;
  title: string;
  blurb: string;
}

export const METRICS: Metric[] = [
  { value: '100+', label: 'repos in one Nx monorepo' },
  { value: '40–60%', label: 'CI build time reduction' },
  { value: '100k+', label: 'LOC migrated AngularJS → Angular 18' },
  { value: '20–30%', label: 'Core Web Vitals improvement' },
];

export const JOBS: Job[] = [
  {
    company: 'Independent Consultant',
    domain: 'Enterprise · Consulting · EV Platform',
    role: 'Front-End Architecture Consultant',
    period: '2026 — present',
    current: true,
    highlights: [
      'Architectural consulting for front-end platforms: scalability, performance, modern Angular practices',
      'SSR, monorepo, and CI/CD optimization for large-scale enterprise applications',
      'AI-assisted engineering: Claude and Codex integrated into development and code-analysis workflows',
    ],
  },
  {
    company: 'Push-Based',
    domain: 'Enterprise · Consulting',
    role: 'Nx Architect',
    period: '2024 — 2025',
    highlights: [
      'Architected and scaled Nx monorepo infrastructure across 100+ repositories',
      'Cut CI build times by 40–60% with distributed caching and affected builds',
      'Built custom Nx plugins standardizing build, test, and deployment across teams',
      'Drove adoption of modern Angular (SSR, Signals, Nx) across multiple teams',
    ],
  },
  {
    company: 'Microsoft Germany',
    domain: 'Healthcare Platform',
    role: 'Senior Software Engineer',
    period: '2024 — 2025',
    highlights: [
      'Led migration of a ~100k+ LOC AngularJS codebase to Angular 18',
      'Improved LCP and TTI through architectural and SSR-based optimizations',
      'Designed CI/CD pipelines improving deployment stability and release cycle time',
      'Real-time, high-load applications with complex data flows',
    ],
  },
  {
    company: 'Clover / Ledgerset',
    domain: 'Supply Platform',
    role: 'Angular Tech Lead',
    period: '2023 — 2024',
    highlights: [
      'Architected a scalable Angular platform reused across multiple applications (~30% efficiency gain)',
      'Built a reusable UI library that raised development speed and cross-team consistency',
      'Led code-quality initiatives reducing production defects and technical debt',
    ],
  },
  {
    company: 'Intellias',
    domain: 'Geospatial · Map Platform',
    role: 'Principal Software Engineer · Team Lead',
    period: '2021 — 2022',
    highlights: [
      'Guided architectural decisions across large-scale infrastructure projects',
      'Led a team of 5 front-end developers; +30% delivery efficiency',
      'Mentored engineers on performance, accessibility, and maintainability',
    ],
  },
  {
    company: 'Ncube',
    domain: 'Crypto Trading Platform',
    role: 'Senior Angular Developer',
    period: '2020 — 2021',
    highlights: [
      'Front-end architecture for real-time trading interfaces',
      'Custom Angular components for Mapbox-powered map interactions',
      'Complex UI: infinite scroll, high-interaction elements, rich animations',
    ],
  },
  {
    company: 'Intellias',
    domain: 'Geospatial · Map Platform',
    role: 'Software Engineer',
    period: '2019',
    highlights: [
      'Greenfield development from concept to implementation',
      'Core architecture: technology selection, module definition, coding standards',
    ],
  },
  {
    company: 'Euristiq',
    domain: 'Internal Tools',
    role: 'Software Engineer',
    period: '2017 — 2019',
    highlights: [
      'Scalable applications for data identification, extraction, analysis, and indexing',
      'PWA targeting mobile and desktop; custom Angular Material UI controls',
    ],
  },
  {
    company: 'Google',
    domain: 'Warsaw, PL',
    role: 'Summer Intern, Software Engineering',
    period: '2016',
    highlights: [
      'Features for an internal Google product in a cross-functional team',
      'Code reviews and engineering practice under Google standards',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core',
    icon: '⚡',
    skills: ['Angular 17–18+', 'Signals', 'RxJS', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'State & Architecture',
    icon: '🏗️',
    skills: ['NgRx · Signal Store', 'NGXS', 'Nx · Nx Cloud', 'Micro-frontends (Module Federation)', 'Design Systems'],
  },
  {
    title: 'Rendering & Performance',
    icon: '🚀',
    skills: ['SSR (Angular Universal)', 'SSG · Hydration', 'Core Web Vitals (LCP · CLS · INP)', 'Lazy loading · code splitting'],
  },
  {
    title: 'Testing',
    icon: '🧪',
    skills: ['Jest', 'Cypress', 'Playwright', 'Karma'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: '🔧',
    skills: ['Azure DevOps', 'GitHub Actions', 'GitLab CI', 'Caching strategies'],
  },
  {
    title: 'AI & Agents',
    icon: '🤖',
    skills: ['Claude · Codex in engineering workflows', 'MCP (Model Context Protocol)', 'Multi-agent development workflows', 'Prompt engineering'],
  },
];

export const DOMAINS: DomainCard[] = [
  { icon: '💳', title: 'Fintech & Banking', blurb: 'Secure, high-reliability systems with real-time updates over WebSockets' },
  { icon: '🪙', title: 'Crypto / Web3', blurb: 'Trading UIs with high-frequency data, wallet flows, live charts' },
  { icon: '🗺️', title: 'Geospatial & Maps', blurb: 'Mapbox and WebGL with large datasets and custom layers' },
  { icon: '🏥', title: 'Healthcare', blurb: 'Data-driven applications focused on reliability and structured UX' },
  { icon: '🎬', title: 'Video & Streaming', blurb: 'Real-time playback and streaming performance optimization' },
  { icon: '🔋', title: 'Mobility & EV', blurb: 'Scalable front-ends for transport and electric-vehicle platforms' },
  { icon: '🛡️', title: 'Defense / High-Security', blurb: 'Strict performance, reliability, and secure data handling' },
  { icon: '📋', title: 'Insurance', blurb: 'Dynamic form builders and validation engines for policy systems' },
];

export const ACHIEVEMENTS: string[] = [
  'Led large-scale front-end architecture redesign: ~30% performance gain, SSR/SSG + hydration enabled',
  'Introduced signals-based architecture, cutting RxJS complexity and improving change detection',
  'Architected Nx monorepo across 100+ repos — CI build times down 40–60%',
  'Migrated 100k+ LOC from AngularJS to Angular 18',
  'Built a UI library increasing component reuse by ~50%',
  'Optimized Azure DevOps CI/CD pipelines — deployment time down ~40%',
];

export const EDUCATION = [
  { school: 'Ivan Franko National University of Lviv', degree: "Master's, Computer Science", years: '2018 — 2020' },
  { school: 'Lviv Polytechnic National University', degree: "Bachelor's, Applied Mathematics", years: '2014 — 2018' },
];

export const CONTACT = {
  email: 'andriisiuta@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrii-siuta/',
  github: 'https://github.com/AndriiSiuta',
  location: 'Lviv, Ukraine',
};
