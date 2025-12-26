import { Award, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Information Technology',
    institution: 'KIET Group of Institutions (Delhi NCR)',
    period: 'Expected: Jun. 2026',
    percentage: '80.20%',
    location: 'Ghaziabad, UP',
  },
  {
    degree: 'Intermediate — CBSE',
    institution: 'Ivey International School',
    period: 'July 2021',
    percentage: '70%',
    location: 'Delhi',
  },
  {
    degree: 'High School — CBSE',
    institution: 'Ivey International School',
    period: 'March 2019',
    percentage: '82.5%',
    location: 'Delhi',
  },
];

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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="p-8 rounded-2xl bg-card border border-border hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                      {edu.percentage}
                    </span>
                  </div>
                </div>
              ))}
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
