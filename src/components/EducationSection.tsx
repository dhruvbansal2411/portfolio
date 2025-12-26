import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Palo Alto Networks',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              B.Tech in Computer Science & IT
            </h3>
            <p className="text-primary font-medium mb-4">KIET Group of Institutions</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-secondary">Expected 2026</span>
              <span>Ghaziabad, UP</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
