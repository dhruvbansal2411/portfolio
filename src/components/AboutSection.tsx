import { Code2, Cpu, Globe, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Expert',
    description: 'React, TypeScript, Tailwind CSS, modern UI/UX',
  },
  {
    icon: Cpu,
    title: 'Full-Stack Capable',
    description: 'Node.js, Express, MongoDB, REST APIs',
  },
  {
    icon: Globe,
    title: 'Real-Time Apps',
    description: 'Socket.IO, WebSockets, live collaboration',
  },
  {
    icon: Zap,
    title: 'Problem Solver',
    description: '250+ DSA problems, algorithmic thinking',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">About Me</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Passionate Developer
                <br />
                <span className="text-gradient">Building for Impact</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year Computer Science student at KIET Group of Institutions, 
                passionate about crafting elegant solutions to complex problems. My journey 
                in tech has been driven by curiosity and a relentless pursuit of excellence.
              </p>
              <p>
                With hands-on experience in modern web development, I specialize in building 
                responsive, performant, and user-centric applications. From real-time chat 
                systems to AI-powered platforms, I love tackling challenges that push the 
                boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll find me exploring system design concepts, 
                solving algorithmic puzzles, or contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
