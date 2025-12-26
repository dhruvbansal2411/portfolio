import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Web Developer Intern',
    company: 'Proxenix',
    period: 'June – July 2025',
    description: [
      'Developed a real-time chat application using React and Socket.IO with live presence indicators',
      'Built e-commerce-style responsive frontends with Tailwind CSS and modern UI components',
      'Collaborated with cross-functional teams to deliver pixel-perfect implementations',
    ],
    current: true,
  },
  {
    title: 'Web Developer Intern',
    company: 'Bharat Intern',
    period: 'Aug – Sept 2023',
    description: [
      'Created responsive sign-up pages with form validation and user authentication flows',
      'Developed a Netflix clone implementing core frontend workflows and component architecture',
      'Gained hands-on experience with HTML, CSS, JavaScript, and React fundamentals',
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="group p-6 rounded-xl bg-card border border-border hover-lift">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex-shrink-0 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
