import resumeapp from "../assets/resumeapp.png";
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
  { testimonial: "Perumal demonstrated excellent dedication and creativity while developing the E-Waste Management System project under my guidance.", name: "S. Abirami", designation: "Project Guide", company: "Nazareth College of Arts & Science", }, { testimonial: "The AI Smart Attendance System showcased strong implementation of Artificial Intelligence and Computer Vision concepts using OpenCV.", name: "Academic Reviewer", designation: "Computer Science Department", company: "Nazareth College of Arts & Science", }, { testimonial: "Perumal is highly passionate about Full Stack Development and continuously explores modern technologies like React, Flutter, Firebase, and AI systems.", name: "Technical Mentor", designation: "Developer Mentor", company: "Student Projects", }, ];
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
    sourceCodeLink: "https://ewaste-bafdd.web.app/",
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
    name: "AI Resume Builder App",
    description:
      "A modern Flutter-based AI Resume Builder application that helps users create professional resumes instantly. The app includes multiple resume templates, Firebase integration, user authentication, PDF generation, and smart AI-based resume content suggestions for students and professionals",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
  {
  name: "Internship Portal Website",
  description:
    "A modern internship finder platform built for students to explore internships, view opportunities, and apply easily through a clean and responsive interface.",
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "green-text-gradient",
    },
    {
      name: "firebase",
      color: "pink-text-gradient",
    },
  ],
  image: resumeapp,
  sourceCodeLink: "https://perumalgullu.github.io/internship/",
},
];

export { services, technologies, experiences, testimonials, projects };
