import { ExternalLink, Github, Layers, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
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
      live: '#',
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
