import { Building2, ExternalLink, Github, GraduationCap, Layers, MessageSquare, ShoppingCart, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'ERP Hub - Enterprise Resource Planning System',
    description:
      'A complete MERN Stack ERP system with JWT authentication, MongoDB database, and Indian Rupee currency support. Features comprehensive modules for inventory management, sales, financial management, HR, and business analytics with GST calculations and Indian business formatting.',
    tech: ['MongoDB', 'Express.js', 'React 18', 'Node.js', 'TypeScript', 'JWT Auth', 'Tailwind CSS', 'shadcn/ui'],
    icon: Building2,
    featured: true,
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: 'https://project-erp-iota.vercel.app/',
    },
  },
  {
    title: 'LearnHub India - Online Learning Platform',
    description:
      'A modern, responsive online learning platform built with React, featuring a beautiful UI with carefully chosen color palette and comprehensive course management system designed specifically for Indian learners. Includes student dashboard, progress tracking, course detail pages, and Indian pricing in Rupees.',
    tech: ['React.js', 'Responsive Design', 'UI/UX Design', 'Course Management', 'Progress Tracking', 'Indian Localization'],
    icon: GraduationCap,
    featured: true,
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: 'https://learnhub-green-eight.vercel.app/',
    },
  },
  {
    title: 'Agro Connect - Farmer Direct Marketplace',
    description:
      'Led a team of 4 to develop a Smart India Hackathon project connecting farmers directly with consumers to increase farmer income, reduce food prices, and promote local sourcing. Built a responsive web platform featuring farmer profiles, inventory management, secure payments, consumer reviews, and real-time order tracking using the MERN stack.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Payment Gateway', 'Real-time Tracking'],
    icon: ShoppingCart,
    featured: true,
    year: '2024',
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: 'https://agro-connect-h2hb.vercel.app/',
    },
  },
  {
    title: 'Online Food Ordering Web App',
    description:
      'A comprehensive food ordering system built with PHP and MySQL featuring customer food ordering module, admin dashboard for menu management, order tracking, and user management. Includes secure admin authentication, responsive design, and complete CRUD operations for restaurant management.',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
    icon: UtensilsCrossed,
    featured: true,
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: 'https://food-order-website-pi-seven.vercel.app/',
    },
  },
  {
    title: 'AI-Enhanced Campus Recruitment Portal',
    description:
      'A full-stack AI-powered platform that streamlines campus placements with intelligent resume parsing, NLP-based skill extraction, and ML-driven candidate matching algorithms.',
    tech: ['React', 'Node.js', 'Flask', 'MongoDB', 'Docker', 'Kubernetes', 'NLP', 'Machine Learning'],
    icon: Layers,
    featured: true,
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: '#',
    },
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A feature-rich chat application with live presence indicators, typing status, and instant message delivery. Built with modern real-time technologies for seamless communication.',
    tech: ['React', 'Socket.IO', 'Node.js', 'Express', 'MongoDB'],
    icon: MessageSquare,
    featured: true,
    links: {
      github: 'https://github.com/dhruvbansal2411',
      live: 'https://realtime-chat-app-eight-lilac.vercel.app/',
    },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium z-10">
                  Featured
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
