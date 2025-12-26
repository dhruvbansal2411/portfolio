import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleScrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-hero">
      {/* Background Grid Pattern with parallax */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(195 85% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(195 85% 50% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse transition-transform duration-1000"
        style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse transition-transform duration-1000" 
        style={{ 
          animationDelay: '1s',
          transform: `translate(${-scrollY * 0.15}px, ${-scrollY * 0.1}px)`
        }} 
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground animate-fade-in">Hi, I'm </span>
                <span className="text-gradient animate-fade-in" style={{ animationDelay: '0.2s' }}>Dhruv Bansal</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Final-Year CS Student | Frontend & Full-Stack Developer
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {[
                { number: '250+', text: 'DSA Problems', delay: '0.6s' },
                { number: 'Real-time', text: 'Web Apps', delay: '0.8s' },
                { number: 'Scalable', text: 'System Design', delay: '1s' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: item.delay }}
                >
                  <span className="text-primary font-bold">{item.number}</span>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleScrollToProjects}
                className="animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '1.2s' }}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                asChild
                className="animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '1.4s' }}
              >
                <a 
                  href="https://drive.google.com/file/d/17zihfFx10uCyfieMudgCK4qbADS3jyF-/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative hidden lg:block transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 bg-gradient-card shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                <img
                  src="/WhatsApp Image 2025-12-12 at 7.22.11 PM.jpeg"
                  alt="Dhruv Bansal - Developer"
                  className="w-full h-auto object-cover aspect-square rounded-3xl transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl transition-opacity duration-300 group-hover:opacity-50" />
                
                {/* Inner glow border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/30 group-hover:ring-primary/50 transition-all duration-300" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-card border border-border shadow-lg animate-pulse-glow hover:scale-110 transition-transform duration-300">
                <span className="text-primary font-mono text-sm">{'<Developer />'}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-card border border-border shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-muted-foreground font-mono text-sm">console.log("Hello World")</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
          >
            <span className="text-xs uppercase tracking-widest group-hover:tracking-wider transition-all duration-300">Scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
