export const profile = {
  firstName: 'Ruslan',
  lastName: 'Normuminov',
  role: 'Front-end Developer',
  tagline: 'I build interfaces that feel alive — fast, accessible and a little bit magical.',
  email: 'anonym2004@mail.ru',
  resume: '/files/resume.pdf',
  photo: '/me.jpg',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export const marqueeWords = [
  'Interfaces',
  'Motion',
  'React',
  'TypeScript',
  'Pixel-perfect',
  'Accessibility',
  'Performance',
]

export const aboutStatement =
  'I turn blank screens into interfaces people actually enjoy using — clean code under the hood, smooth motion on the surface, and attention to the tiny details nobody notices until they’re missing.'

export const aboutStory = [
  'It started with a random video: a website spinning in 3D like a spaceship. A couple of days later I was digging through docs trying to figure out how that magic was even possible — and that’s how front-end found me.',
  'Since then I’ve fallen for the process itself. Sometimes you’re coding, sometimes you’re designing, and in the end there’s something people can click, scroll and get a little wow-ed by.',
  'I learn every single day. Sometimes it feels like my brain is about to melt — and those are the best moments, because right after comes the “ohhh, got it!”.',
]

export const principles = [
  {
    title: 'Clean under the hood',
    text: 'Typed, readable, component-driven code that’s easy to extend and hard to break.',
  },
  {
    title: 'Motion with purpose',
    text: 'Animations that guide attention and give feedback — not just eye candy.',
  },
  {
    title: 'Fast & accessible',
    text: 'Responsive layouts, semantic markup and respect for reduced-motion settings.',
  },
]

export type StackItem = { title: string; icon: string; note: string }

export const stack: { group: string; items: StackItem[] }[] = [
  {
    group: 'Core',
    items: [
      { title: 'HTML', icon: 'html', note: 'Semantic markup' },
      { title: 'CSS', icon: 'css', note: 'Grid, flex, animations' },
      { title: 'JavaScript', icon: 'js', note: 'ES2023+' },
      { title: 'TypeScript', icon: 'ts', note: 'Strict mode lover' },
    ],
  },
  {
    group: 'Ecosystem',
    items: [
      { title: 'React', icon: 'react', note: 'Hooks & components' },
      { title: 'SASS', icon: 'sass', note: 'BEM, modules' },
      { title: 'GSAP', icon: 'gsap', note: 'Timelines & scroll' },
      { title: 'Vite', icon: 'vite', note: 'Lightning builds' },
      { title: 'Webpack', icon: 'webpack', note: 'Custom configs' },
      { title: 'Git', icon: 'git', note: 'Branches, PRs' },
    ],
  },
]

export type Project = {
  title: string
  year: string
  description: string
  image: string
  tags: string[]
  link: string
  repo: string
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    year: '2025',
    description:
      'The site you’re looking at right now. A single-page portfolio with a custom cursor, preloader, scroll-driven reveals and split-text animations built on GSAP.',
    image: '/mysite.png',
    tags: ['React', 'TypeScript', 'SASS', 'GSAP', 'Vite'],
    link: 'https://normuminovruslan.uz/',
    repo: 'https://github.com/RilPax/my-web-site',
  },
]

export const services = [
  {
    title: 'Landing pages',
    text: 'Bold, conversion-focused one-pagers with memorable motion that make your product stand out.',
  },
  {
    title: 'Web applications',
    text: 'Scalable React + TypeScript front-ends: dashboards, forms, state management and API integration.',
  },
  {
    title: 'Motion & interaction',
    text: 'Scroll-driven storytelling, micro-interactions and page transitions that make an interface feel alive.',
  },
]

export const socials = [
  { title: 'GitHub', href: 'https://github.com/RilPax', icon: 'github' },
  { title: 'Telegram', href: 'https://t.me/Fi_fate', icon: 'telegram' },
  { title: 'Instagram', href: 'https://www.instagram.com/fi.fate', icon: 'instagram' },
]
