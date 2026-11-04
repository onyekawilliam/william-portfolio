/**
 * Single source of truth for all portfolio content.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │ REPLACE ME: the three `contact` entries below are PLACEHOLDERS.       │
 * │ Put your real value in `value`, then set `placeholder: false`.        │
 * │ Placeholders are shown as clearly-marked, non-clickable cards.        │
 * └───────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: 'William',
  role: 'Frontend Developer',
  github: 'https://github.com/onyekawilliam',
}

export const contact = {
  email: {
    label: 'Email',
    value: 'williamngene10@gmail.com',
    placeholder: false,
    href: (v) => `mailto:${v}`,
    hint: '',
  },
  whatsapp: {
    label: 'WhatsApp',
    value: '+234 703 154 8095',
    placeholder: false,
    href: (v) => `https://wa.me/${v.replace(/\D/g, '')}`,
    hint: '',
  },
  github: {
    label: 'GitHub',
    value: 'github.com/onyekawilliam',
    placeholder: false,
    href: () => site.github,
    hint: '',
  },
  linkedin: {
    label: 'LinkedIn',
    value: '', // Optional: Add your LinkedIn profile URL (e.g., https://linkedin.com/in/your-profile)
    placeholder: false,
    href: (v) => (v.startsWith('http') ? v : `https://${v}`),
    hint: 'Add your LinkedIn profile URL',
  },
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

/**
 * Project facts below were checked against the public repositories:
 *  - Scan2Dine:   React 19 + Vite + Tailwind CSS frontend; Express + Mongoose (MongoDB) backend.
 *  - Krisgen:     React 18 + Vite + Tailwind CSS frontend; Express + Mongoose (MongoDB) backend; Flutterwave
 *                 payments and Cloudinary image uploads (from the project's package.json and README).
 */
export const projects = [
  {
    id: 'scan2dine',
    name: 'Scan2Dine',
    kind: 'Full-stack project',
    description:
      'A QR-based restaurant ordering platform. The idea is simple: customers scan a restaurant’s QR code, browse the menu and place their order, without waiting for a menu or a waiter.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/onyekawilliam/Scan2Dine',
    live: 'https://scan2-dine.vercel.app',
    liveNote:
      'Demo restaurant login: demo@scan2dine.com / demo123. Demo data resets periodically, and the first load can take about a minute while the free server wakes up.',
    preview: 'scan2dine',
  },
  {
    id: 'krisgen',
    name: 'Krisgen Platform',
    kind: 'Full-stack e-commerce',
    description:
      'A phone retail platform for Krisgen Communications: an online store with checkout, an admin dashboard, in-store sales, and a free, one-level referral program where commissions are worked out from profit, not from the selling price.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Flutterwave', 'Cloudinary'],
    github: 'https://github.com/onyekawilliam/krisgen-platform',
    live: 'https://krisgen-platform.vercel.app',
    liveNote:
      'Browse the shop and the referral program pages without signing in. The admin dashboard is private. The first load can take a moment while the free server wakes up.',
    preview: 'krisgen',
  },
]

export const services = [
  {
    icon: 'Globe',
    title: 'Website Development',
    text: 'Complete, maintainable websites built from the ground up, giving your business a dependable home online.',
  },
  {
    icon: 'LayoutTemplate',
    title: 'Landing Page Development',
    text: 'Focused pages built around one clear goal, so visitors know exactly what to do next.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Responsive Website Design',
    text: 'Layouts that adapt cleanly to phones, tablets and desktops, so every visitor gets a polished experience.',
  },
  {
    icon: 'Code2',
    title: 'Frontend Development',
    text: 'Designs and ideas turned into fast, interactive, accessible interfaces using React and modern CSS.',
  },
  {
    icon: 'RefreshCw',
    title: 'Website Redesign',
    text: 'Give an outdated site a clearer structure, a modern look and a smoother experience.',
  },
  {
    icon: 'Wrench',
    title: 'Bug Fixes & Improvements',
    text: 'Layout glitches, broken interactions and rough edges fixed, plus practical upgrades to an existing site.',
  },
]

export const stack = [
  {
    group: 'Frontend',
    note: 'What I build interfaces with',
    items: [
      { icon: 'Atom', name: 'React', text: 'Component-based interfaces' },
      { icon: 'Braces', name: 'JavaScript', text: 'Interactivity and logic' },
      { icon: 'FileCode2', name: 'HTML', text: 'Semantic structure' },
      { icon: 'Palette', name: 'CSS', text: 'Layout and styling' },
      { icon: 'Wind', name: 'Tailwind CSS', text: 'Utility-first styling' },
    ],
  },
  {
    group: 'Backend fundamentals',
    note: 'What I use to build full-stack projects',
    items: [
      { icon: 'Server', name: 'Node.js', text: 'JavaScript on the server' },
      { icon: 'Route', name: 'Express', text: 'Servers and API routes' },
      { icon: 'Database', name: 'MongoDB', text: 'Document database' },
    ],
  },
]

// Form options are derived from the services list so the labels can never drift apart.
export const projectTypes = [...services.map((service) => service.title), 'Something else']
