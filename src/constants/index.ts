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
    title: "Projects",
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
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "ReactJS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Firebase", icon: mongodb },
  { name: "Python", icon: nodejs },
  { name: "Flutter", icon: mobile },
  { name: "OpenCV", icon: backend },
  { name: "Machine Learning", icon: creator },
];

const experiences: TExperience[] = [ {
  title: "Web Development Intern",
  companyName: "Scale Up Institute",
  icon: starbucks,
  iconBg: "#383E56",
  date: "Jun 2025 - Jul 2025",
  points: [
    "Developed a Bus Ticket Booking System using ReactJS and Spring Boot.",
    "Integrated frontend components with backend APIs.",
    "Worked with PostgreSQL and Firebase Authentication.",
    "Collaborated with mentors in an Agile development environment.",
  ],
},
{ title: "AI Smart Attendance System", companyName: "Personal Project", icon: tesla, iconBg: "#E6DEDD", date: "2025", points: [ "Developed an AI-powered smart attendance system using face recognition technology.", "Implemented real-time student face detection and automatic attendance marking using OpenCV.", "Integrated automated absent notifications and CSV-based attendance management.", "Focused on improving automation and reducing manual attendance processes.", ], }, 
{ title: "E-Waste Management System", companyName: "Academic Project", icon: shopify, iconBg: "#383E56", date: "2025", points: [ "Built a web-based e-waste management platform for tracking electronic waste products.", "Implemented product categorization, cashback calculation, and database integration.", "Developed responsive frontend pages using PHP, MySQL, HTML, CSS, and JavaScript.", "Focused on sustainability and digital waste management solutions.", ], }, 
{ title: "Full Stack & Mobile App Learning", companyName: "Self Learning", icon: meta, iconBg: "#E6DEDD", date: "2025 - Present", points: [ "Learning React.js, Flutter, Firebase, Tailwind CSS, and backend development technologies.", "Building portfolio projects and experimenting with modern UI designs and animations.", "Practicing API integration, authentication systems, and responsive application development.", "Continuously improving problem-solving and software engineering skills.", ], }, ];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Graduated as Class Topper in M.Sc Computer Science with consistent academic excellence across multiple semesters.",

    name: "🥇 Class Topper",

    designation: "M.Sc Computer Science",

    company: "Nazareth College of Arts & Science",
  },

  {
    testimonial:
      "Earned Subject Topper distinctions in Artificial Intelligence, Machine Learning, Data Science & Analytics, Cryptography, and Theory of Computation.",

    name: "📚 Academic Excellence",

    designation: "Subject Topper",

    company: "Computer Science Department",
  },

  {
    testimonial:
      "Recognized for presenting innovative technology ideas and participating in technical events including Ideathon and project exhibitions.",

    name: "💡 Innovation & Leadership",

    designation: "Technical Events",

    company: "2025 - 2026",
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

  sourceCodeLink: "https://github.com/perumalgullu/Nazareth-ewaste/tree/main/ewaste",
  liveDemoLink: "https://ewaste-bafdd.web.app/",
},
  {
  name: "AI Smart Attendance System",
  description:
    "AI-powered smart attendance system using face recognition technology to automatically detect students and mark attendance in real time. The system also sends absent notifications automatically and manages attendance records efficiently.",
  tags: [
    {
      name: "python",
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
  sourceCodeLink: "https://github.com/perumalgullu/ai-attendance-system",
  liveDemoLink: "https://ai-attendance-system-e254.onrender.com/",
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
  sourceCodeLink: "https://github.com/perumalgullu/ai-resume-builder",
  liveDemoLink: "https://drive.google.com/file/d/1m1bHIHo19awYOYkRaphubD97yi6czX-4/view?usp=sharing",
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
  sourceCodeLink: "https://github.com/perumalgullu/internship",
  liveDemoLink: "https://perumalgullu.github.io/internship/",
},
];

export { services, technologies, experiences, testimonials, projects };
