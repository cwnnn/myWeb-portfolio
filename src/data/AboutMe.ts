import { projects } from "./projects";
export const personalInfo = {
  name: "Resul Can Şık",
  age: new Date().getFullYear() - 2003 + " years old",
  location: "",
  education: "Computer Programmer",
};

export const aboutDescription = `
  I have been interested in computers and maker projects since childhood. For the past two years, I've been actively exploring various areas of software development. 
  I have worked on automation systems, desktop and web applications, game development using Unity and web-based game engines, as well as embedded systems my projects. 
  I enjoy experimenting with new technologies and exploring different fields. I have strong problem-solving and algorithmic thinking skills. 
  I’m always eager to improve myself and learn more.
`;

export const stats = [
  { number: projects.length +'+', label: "Completed Projects" },
  { number: "1.5+", label: "Years Experience" },
];

export const hobbies = [
  {
    icon: "🎨",
    title: "Drawing",
    description: "When I'm bored or tired, I relax by drawing and expressing myself through art.",
  },
  {
    icon: "🌊", // Yüzme ikonu değiştirildi
    title: "Swimming",
    description: "Swimming helps me relax and brings me peace of mind.",
  },
  {
    icon: "🕹️",
    title: "Game Development",
    description: "I work on my idle game project and enjoy experimenting with new mechanics.",
  },
  {
    icon: "🤖",
    title: "Arduino Projects",
    description: "I enjoy building small electronics projects using Arduino and learning about hardware.",
  },
  {
    icon: "📚",
    title: "Reading Books",
    description: "In my free time, I enjoy reading world classics.",
  },
  {
    icon: "💪",
    title: "Fitness",
    description: "I try to stay fit through regular workouts and strength training.",
  },
];

export const skills = [
  {
    skill : 'C#',
    level : 85
  },
  {
    skill : 'Vue.js',
    level : 60
  },
  {
    skill : 'Python',
    level : 60
  },
  {
    skill : 'Git',
    level : 70
  },
  {
    skill : 'JavaScript',
    level : 70
  },
   {
    skill : 'Node.js',
    level : 40
  },
  {
    skill : 'TypeScript',
    level : 40
  },
  {
    skill : 'SQL',
    level : 80
  },
   {
    skill : 'PHP',
    level : 40
  },
   {
    skill : 'Unity',
    level : 50
  },
];

export const experience = [
  {
    date: "2025",
    title: "Software Development Intern",
    company: "SabancıDx",
    description: "I gained practical experience with Vue.js, Node.js, and Git during my internship. I also improved my teamwork and collaboration skills through real project involvement.",
    tags: ["Vue.js", "Node.js", "TailWindCSS", "Git"],
  },
  {
    date: "2023-2025",
    title: "Computer Programmer",
    company: "Karabuk University",
    description: "Where I started my web development career. Learned fundamental technologies and developed practical projects.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
];
