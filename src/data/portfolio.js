import atsImg from "../assets/project-ats.jpg";
import eduruzImg from "../assets/project-eduruz.jpg";
import portraitImg from "../assets/portrait.jpg";

export const images = { atsImg, eduruzImg, portraitImg };

export const profile = {
  name: "Ishita Dey",
  role: "MERN Stack Developer",
  email: "ishitadey.222@gmail.com",
  phones: ["+91 70038 53544", "+91 90939 03076"],
  location: "New Garia, Kolkata — India",
  coordinates: "22.4708° N / 88.4012° E",
  availability: "Open to junior SDE & full-stack roles",
  about:
    "Aspiring full-stack developer focused on the MERN stack — known for a strong design sense, quick learning, and hands-on experience across both frontend and backend. I turn ideas into real, usable products and grow through collaborative, real-world builds.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deyishita" },
    { label: "GitHub", href: "https://github.com/Is-hitaDey" },
    { label: "LeetCode", href: "https://leetcode.com/u/Ishita-Dey/" },
  ],
};

export const marqueeItems = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Gemini API",
  "Redux Toolkit",
  "Tailwind CSS",
  "JWT",
  "Puppeteer",
  "Python",
  "REST APIs",
  "Mongoose",
];

export const skills = [
  {
    id: "01",
    label: "Languages",
    items: ["JavaScript", "Python", "HTML", "CSS"],
  },
  {
    id: "02",
    label: "Frontend",
    items: ["React.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "03",
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    id: "04",
    label: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    id: "05",
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Swagger", "Gemini API", "Puppeteer"],
  },
];

export const projects = [
  {
    id: "01",
    title: "AI Resume Builder",
    subtitle: "ATS scoring & career roadmaps",
    period: "Jun '25 — Aug '25",
    year: "2025",
    image: atsImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT", "Puppeteer"],
    description:
      "An AI-powered ATS resume builder driven by the Google Gemini API. It scores resumes against job descriptions, generates personalized skill-gap analysis and career roadmaps — then exports a pixel-perfect PDF.",
    points: [
      "Built an AI-driven ATS resume builder on Google's Gemini API",
      "Generated personalized skill-gap analysis & career roadmaps",
      "Implemented secure JWT auth + server-side PDF generation",
    ],
  },
  {
    id: "02",
    title: "Eduruz Platform",
    subtitle: "Role-based learning, end to end",
    period: "Production",
    year: "2025",
    image: eduruzImg,
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
    description:
      "A full-stack learning platform built at Eduruz with strict role-based access. Reusable, composable UI on the front; clean REST APIs and MongoDB models on the back.",
    points: [
      "Developed role-based authentication & authorization",
      "Built a library of reusable, responsive UI components",
      "Created REST APIs powering the full product surface",
    ],
  },
];

export const experience = [
  {
    id: "01",
    role: "Junior Full Stack Developer",
    type: "Internship",
    company: "Eduruz",
    period: "Jun '25 — Oct '25",
    location: "Kolkata · Remote",
    tags: ["MERN", "RBAC", "REST APIs", "Tailwind"],
    points: [
      "Contributed to a production MERN application — shipping role-based access control, authentication, and data-management modules.",
      "Built responsive, dynamic user interfaces with React.js & Tailwind CSS, wired to RESTful APIs designed with Node.js, Express.js & MongoDB.",
    ],
  },
];

export const education = [
  {
    id: "01",
    years: "2023 — Present",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Netaji Subhash Engineering College",
    location: "Kolkata, IN",
    score: "GPA 87.5%",
  },
  {
    id: "02",
    years: "2021 — 2023",
    degree: "Higher Secondary — Science (PCM)",
    institution: "DAV Public School",
    location: "Asansol, IN",
    score: "84.33%",
  },
  {
    id: "03",
    years: "2020 — 2021",
    degree: "Secondary Education",
    institution: "West Bengal Board",
    location: "Asansol, IN",
    score: "86.33%",
  },
];

export const achievements = [
  {
    id: "01",
    count: 120,
    suffix: "+",
    title: "DSA problems solved",
    description:
      "Arrays, Trees, Linked Lists, Graphs, Dynamic Programming and more — on LeetCode.",
  },
  {
    id: "02",
    count: 150,
    suffix: "+",
    title: "Hackathon participants supported",
    description:
      "On-site Coordinator at Smart India Hackathon — ran technical operations & logistics through a 36-hour national event.",
  },
  {
    id: "03",
    count: 0,
    suffix: "",
    display: "01",
    title: "MERN internship earned",
    description:
      "Selected as a Junior Full Stack Developer Intern at Eduruz, contributing to production-grade features.",
  },
];
