import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiExpress, 
  SiFirebase, 
  SiMongodb, 
  SiMysql, 
  SiCplusplus, 
  SiC, 
  SiBlender 
} from 'react-icons/si';
import { 
  DiMsqlServer, 
  DiPhotoshop 
} from 'react-icons/di';

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "React Native", icon: FaReact, color: "#61dafb" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MSSQL", icon: DiMsqlServer, color: "#cc292b" },
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
      { name: "C/C++", icon: SiCplusplus, color: "#00599c" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
      { name: "Photoshop", icon: DiPhotoshop, color: "#31a8ff" },
      { name: "Blender", icon: SiBlender, color: "#ea7600" },
    ]
  }
];
