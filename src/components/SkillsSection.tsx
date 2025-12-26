const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Python', 'Flask', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
  {
    title: 'Technologies & Concepts',
    skills: ['REST APIs', 'Socket.IO', 'Docker', 'Kubernetes', 'AWS', 'System Design', 'Data Structures', 'Algorithms', 'OOP', 'Agile'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '250+', label: 'DSA Problems' },
            { value: '10+', label: 'Projects Built' },
            { value: '2+', label: 'Internships' },
            { value: '3+', label: 'Certifications' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
