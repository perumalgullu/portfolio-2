import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [ 
  { title: "Full Stack Developer", 
    icon: web, }, 
    { title: "AI Developer", 
      icon: mobile, }, 
      { title: "Flutter Developer", 
        icon: backend, }, 
        { title: "Computer Vision Enthusiast", 
          icon: creator, },
         ];



const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [ { title: "M.Sc Computer Science Student", companyName: "Nazareth College of Arts & Science", icon: starbucks, iconBg: "#383E56", date: "2024 - Present", points: [ "Currently pursuing postgraduate studies in Computer Science with focus on software development and emerging technologies.", "Learning Full Stack Web Development, Artificial Intelligence, and Computer Vision technologies.", "Building real-world academic and personal projects using React, Flutter, Python, Firebase, and MySQL.", "Actively exploring modern UI/UX design and scalable application development.", ], }, 
{ title: "AI Smart Attendance System", companyName: "Personal Project", icon: tesla, iconBg: "#E6DEDD", date: "2025", points: [ "Developed an AI-powered smart attendance system using face recognition technology.", "Implemented real-time student face detection and automatic attendance marking using OpenCV.", "Integrated automated absent notifications and CSV-based attendance management.", "Focused on improving automation and reducing manual attendance processes.", ], }, 
{ title: "E-Waste Management System", companyName: "Academic Project", icon: shopify, iconBg: "#383E56", date: "2025", points: [ "Built a web-based e-waste management platform for tracking electronic waste products.", "Implemented product categorization, cashback calculation, and database integration.", "Developed responsive frontend pages using PHP, MySQL, HTML, CSS, and JavaScript.", "Focused on sustainability and digital waste management solutions.", ], }, 
{ title: "Full Stack & Mobile App Learning", companyName: "Self Learning", icon: meta, iconBg: "#E6DEDD", date: "2025 - Present", points: [ "Learning React.js, Flutter, Firebase, Tailwind CSS, and backend development technologies.", "Building portfolio projects and experimenting with modern UI designs and animations.", "Practicing API integration, authentication systems, and responsive application development.", "Continuously improving problem-solving and software engineering skills.", ], }, ];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "E-Waste Management System",
    description:
      "Web-based e-waste management platform developed for tracking electronic waste products, cashback calculation, recycling workflow management, and product categorization using HTML and FIREBASE",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AI Smart Attendance System",
    description:
      "AI-powered smart attendance system using face recognition technology to automatically detect students and mark attendance in real time. The system also sends absent notifications automatically and manages attendance records efficiently.",
    tags: [
      {
        name: "pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "deepface",
        color: "green-text-gradient",
      },
      {
        name: "openCV",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
