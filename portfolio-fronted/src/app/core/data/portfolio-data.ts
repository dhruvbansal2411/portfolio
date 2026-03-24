// Personal Portfolio Data - Dhruv Bansal
import { Project, Experience, Skill, SkillCategory } from '../models';

export const PERSONAL_INFO = {
  name: 'Dhruv Bansal',
  role: 'Frontend Developer | Full Stack Developer',
  location: 'Delhi NCR',
  email: 'dhruvbansal2411@gmail.com',
  phone: '+91-9389762249',
  github: 'https://github.com/dhruvbansal2411',
  linkedin: 'https://www.linkedin.com/in/dhruv-bansal-9045b7262/',
  about: `I am a Computer Science student with strong skills in React, Node.js, and modern web technologies. I specialize in building scalable web applications, real-time systems, and AI-powered platforms. I enjoy solving real-world problems using full-stack development and machine learning.`,
  tagline: 'Building scalable web applications with modern technologies',
  resumeUrl: '/assets/dhruv_new_res.pdf'
};

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Information Technology',
  institution: 'KIET Group of Institutions',
  location: 'Delhi NCR',
  duration: '2022 – 2026',
  cgpa: '82.20%'
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Codec Technologies India',
    position: 'Full Stack Developer Intern',
    location: 'Hybrid',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
    description: 'Worked on developing responsive and user-centric web applications using modern web technologies.',
    responsibilities: [
      'Worked on developing responsive and user-centric web applications',
      'Built and optimized dynamic web pages using HTML, CSS, JavaScript, and React.js',
      'Improved UI/UX with responsive design and reusable components',
      'Integrated frontend with backend APIs',
      'Debugged and fixed UI issues for better performance'
    ],
    companyLogoUrl: '/assets/codec-logo.png',
    isCurrent: false,
    duration: 'July 2025 – September 2025',
    certificateUrl: 'https://drive.google.com/file/d/1or98_MtqNIi6NJE-AILKjoLoznWnWXxM/view',
    techStack: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 2,
    company: 'Proxenix',
    position: 'Frontend Web Developer Intern',
    location: 'Remote',
    startDate: '2025-06-01',
    endDate: '2025-07-31',
    description: 'Built real-time chat applications and improved UI responsiveness using modern web technologies.',
    responsibilities: [
      'Built a real-time chat application supporting 100+ concurrent users using React and Socket.IO',
      'Implemented typing indicators and live presence features',
      'Improved UI responsiveness by 30% using Tailwind CSS and optimized component rendering'
    ],
    companyLogoUrl: '/assets/proxenix-logo.png',
    isCurrent: false,
    duration: 'June 2025 – July 2025',
    certificateUrl: 'https://drive.google.com/file/d/1DNYhvZTGPJgROgWg1J3c16OxlTxnhXod/view',
    techStack: ['React', 'Socket.IO', 'Tailwind CSS']
  },
  {
    id: 3,
    company: 'Bharat Intern',
    position: 'Web Developer Intern',
    location: 'Remote',
    startDate: '2023-08-01',
    endDate: '2023-09-30',
    description: 'Built frontend projects and improved understanding of real-world development workflows.',
    responsibilities: [
      'Built a Sign-Up Page and a Netflix Clone, applying core frontend development principles',
      'Worked on integrating different frontend modules',
      'Improved understanding of real-world development workflows'
    ],
    companyLogoUrl: '/assets/bharat-intern-logo.png',
    isCurrent: false,
    duration: 'Aug 2023 – Sept 2023',
    certificateUrl: 'https://drive.google.com/file/d/1ArHt_cvI51aOt7MBbfK4epUZsbjZVdgP/view',
    techStack: ['HTML', 'CSS', 'JavaScript']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Recruitment Platform',
    description: 'An AI-powered recruitment platform using NLP and Machine Learning to automate resume parsing and candidate-job matching. Achieved 87% matching accuracy and improved resume screening efficiency by 60%. Built scalable APIs using Flask and deployed using Docker and Kubernetes for cloud scalability.',
    techStack: ['React.js', 'Node.js', 'Flask', 'MongoDB', 'Python', 'NLP', 'Machine Learning', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/GetAnshulAgarwal/Hire-On.git',
    liveUrl: '',
    category: 'Full Stack',
    imageUrl: 'assets/AI-Powered Recruitment Platform.jpg',
    createdAt: '2025-04-01'
  },
  {
    id: 2,
    title: 'Agro Connect – Farmer Marketplace',
    description: 'A Smart India Hackathon project connecting farmers directly with consumers to increase farmer income, reduce food prices, and promote local sourcing. Built a responsive web platform featuring farmer profiles, inventory management, secure payments, consumer reviews, and real-time order tracking.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack'],
    githubUrl: '',
    liveUrl: 'https://agro-connect-h2hb.vercel.app/',
    category: 'Full Stack',
    imageUrl: 'assets/Agro Connect – Farmer Marketplace.png',
    createdAt: '2024-12-01'
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    description: 'Built a responsive real-time chat application supporting live presence and typing indicators using React.js, Node.js, and Socket.IO. Designed a mobile-first UI with authentication, message timestamps, and emoji support for cross-device compatibility.',
    techStack: ['React.js', 'Node.js', 'Socket.IO', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: '',
    liveUrl: 'https://realtime-chat-app-eight-lilac.vercel.app/',
    category: 'Full Stack',
    imageUrl: 'assets/Real-Time Chat Application.png',
    createdAt: '2023-07-01'
  },
  {
    id: 4,
    title: 'ERP Hub - Enterprise Resource Planning System',
    description: 'A full-stack MERN ERP system with authentication, inventory, sales, HR, and analytics modules. Comprehensive enterprise solution for managing business operations with secure JWT authentication and modern UI. Demo Credentials - Email: admin@erphub.com | Password: admin123',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dhruvbansal2411/project_erp',
    liveUrl: 'https://project-erp-iota.vercel.app/',
    category: 'Full Stack',
    imageUrl: 'assets/ERP Hub - Enterprise Resource Planning System.png',
    createdAt: '2024-11-01'
  },
  {
    id: 5,
    title: 'LearnHub India - Online Learning Platform',
    description: 'A modern online learning platform with course management, dashboard, and responsive UI for Indian learners. Features include course browsing, enrollment system, and user-friendly interface designed for seamless learning experience.',
    techStack: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: '',
    liveUrl: 'https://learnhub-green-eight.vercel.app/',
    category: 'Frontend',
    imageUrl: 'assets/LearnHub India - Online Learning Platform.png',
    createdAt: '2024-09-01'
  },
  {
    id: 6,
    title: 'Online Food Ordering System',
    description: 'A full-stack food ordering website with admin panel, order management, and database integration. Complete solution for restaurant management with customer ordering interface and administrative controls.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: '',
    liveUrl: 'https://food-order-website-pi-seven.vercel.app/',
    category: 'Full Stack',
    imageUrl: 'assets/Online Food Ordering System.png',
    createdAt: '2024-06-01'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 1,
    name: 'Languages',
    icon: 'code',
    skills: [
      { id: 1, name: 'Java', category: 'Languages', proficiency: 85, iconUrl: '', displayOrder: 1 },
      { id: 2, name: 'Python', category: 'Languages', proficiency: 88, iconUrl: '', displayOrder: 2 },
      { id: 3, name: 'C++', category: 'Languages', proficiency: 80, iconUrl: '', displayOrder: 3 },
      { id: 4, name: 'JavaScript', category: 'Languages', proficiency: 90, iconUrl: '', displayOrder: 4 }
    ]
  },
  {
    id: 2,
    name: 'Web Technologies',
    icon: 'globe',
    skills: [
      { id: 5, name: 'React.js', category: 'Web Technologies', proficiency: 92, iconUrl: '', displayOrder: 1 },
      { id: 6, name: 'Node.js', category: 'Web Technologies', proficiency: 88, iconUrl: '', displayOrder: 2 },
      { id: 7, name: 'Express.js', category: 'Web Technologies', proficiency: 85, iconUrl: '', displayOrder: 3 },
      { id: 8, name: 'Flask', category: 'Web Technologies', proficiency: 82, iconUrl: '', displayOrder: 4 },
      { id: 9, name: 'Tailwind CSS', category: 'Web Technologies', proficiency: 90, iconUrl: '', displayOrder: 5 },
      { id: 10, name: 'Socket.IO', category: 'Web Technologies', proficiency: 87, iconUrl: '', displayOrder: 6 }
    ]
  },
  {
    id: 3,
    name: 'Databases & Tools',
    icon: 'database',
    skills: [
      { id: 11, name: 'MongoDB', category: 'Databases & Tools', proficiency: 88, iconUrl: '', displayOrder: 1 },
      { id: 12, name: 'MySQL', category: 'Databases & Tools', proficiency: 85, iconUrl: '', displayOrder: 2 },
      { id: 13, name: 'Git', category: 'Databases & Tools', proficiency: 90, iconUrl: '', displayOrder: 3 },
      { id: 14, name: 'GitHub', category: 'Databases & Tools', proficiency: 90, iconUrl: '', displayOrder: 4 },
      { id: 15, name: 'Docker', category: 'Databases & Tools', proficiency: 83, iconUrl: '', displayOrder: 5 },
      { id: 16, name: 'Kubernetes', category: 'Databases & Tools', proficiency: 80, iconUrl: '', displayOrder: 6 }
    ]
  },
  {
    id: 4,
    name: 'Core Concepts',
    icon: 'brain',
    skills: [
      { id: 17, name: 'DSA', category: 'Core Concepts', proficiency: 85, iconUrl: '', displayOrder: 1 },
      { id: 18, name: 'OOP', category: 'Core Concepts', proficiency: 88, iconUrl: '', displayOrder: 2 },
      { id: 19, name: 'REST APIs', category: 'Core Concepts', proficiency: 90, iconUrl: '', displayOrder: 3 },
      { id: 20, name: 'Machine Learning', category: 'Core Concepts', proficiency: 82, iconUrl: '', displayOrder: 4 },
      { id: 21, name: 'NLP', category: 'Core Concepts', proficiency: 80, iconUrl: '', displayOrder: 5 }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026–2029',
    credentialUrl: 'https://aws.amazon.com/verification',
    description: 'Validates expertise in developing and maintaining AWS-based applications'
  },
  {
    id: 2,
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026–2029',
    credentialUrl: 'https://aws.amazon.com/verification',
    description: 'Demonstrates foundational knowledge of AI/ML concepts and AWS AI services'
  },
  {
    id: 3,
    title: 'Cybersecurity Foundation',
    issuer: 'Palo Alto Networks',
    date: '2024',
    credentialUrl: 'https://drive.google.com/file/d/1LPW3X2H_QPF4Jb6VjEaiEOjuyf63XLCF/view',
    description: 'Foundational cybersecurity principles and best practices'
  },
  {
    id: 4,
    title: 'Full Stack Developer Internship',
    issuer: 'Codec Technologies India',
    date: 'July 2025 – September 2025',
    credentialUrl: 'https://drive.google.com/file/d/1or98_MtqNIi6NJE-AILKjoLoznWnWXxM/view',
    description: 'Completed internship developing responsive web applications with React and Node.js'
  },
  {
    id: 5,
    title: 'Frontend Web Developer Internship',
    issuer: 'Proxenix',
    date: 'July 2025',
    credentialUrl: 'https://drive.google.com/file/d/1DNYhvZTGPJgROgWg1J3c16OxlTxnhXod/view',
    description: 'Completed internship building real-time applications with React and Socket.IO'
  },
  {
    id: 6,
    title: 'Web Developer Internship',
    issuer: 'Bharat Intern',
    date: 'September 2023',
    credentialUrl: 'https://drive.google.com/file/d/1ArHt_cvI51aOt7MBbfK4epUZsbjZVdgP/view',
    description: 'Completed internship building frontend projects with HTML, CSS, and JavaScript'
  }
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: 'AI-Enhanced Campus Recruitment Portal for Direct Student-Recruiter Interaction and Smart Resume Enhancement',
    conference: 'IMPACT-2026 Conference',
    publisher: 'DMPedia',
    date: '2026',
    description: 'Research paper on AI-powered recruitment system with NLP-based resume parsing',
    highlights: [
      'Improved resume screening efficiency by 60%',
      'Achieved 87% matching accuracy',
      'Built a scalable cloud system supporting 2500+ concurrent users',
      'Evaluated system performance on 500+ students and 50 recruiters'
    ],
    url: ''
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Smart India Hackathon Participant',
    description: 'Led a team of 4 to develop Agro Connect, a farmer-consumer marketplace platform',
    date: '2024',
    icon: 'trophy'
  },
  {
    id: 2,
    title: 'Published Research Paper',
    description: 'Published research on AI-Enhanced Campus Recruitment Portal at IMPACT-2026 Conference',
    date: '2026',
    icon: 'book'
  },
  {
    id: 3,
    title: 'AWS Dual Certification',
    description: 'Achieved both AWS Developer Associate and AI Practitioner certifications',
    date: '2026',
    icon: 'award'
  }
];
