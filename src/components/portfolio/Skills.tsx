import { useInView } from "@/hooks/useInView";
import { Code2, Layout, Server, Database, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  { title: "Programming", icon: Code2, skills: [{ name: "Java", level: 90 }, { name: "JavaScript", level: 75 }] },
  { title: "Frontend", icon: Layout, skills: [{ name: "HTML5", level: 85 }, { name: "CSS3", level: 80 }, { name: "React", level: 70 }] },
  { title: "Backend", icon: Server, skills: [{ name: "Spring Boot", level: 85 }, { name: "REST APIs", level: 88 }, { name: "JDBC", level: 75 }] },
  { title: "Database", icon: Database, skills: [{ name: "MySQL", level: 82 }] },
  { title: "Tools", icon: Wrench, skills: [{ name: "Git", level: 80 }, { name: "GitHub", level: 85 }, { name: "Postman", level: 78 }] },
  { title: "Cloud", icon: Cloud, skills: [{ name: "AWS Fundamentals", level: 60 }] },
];

const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div ref={ref}>
          <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider !mx-0 !w-8" />
              <p className="text-primary text-sm font-medium tracking-widest uppercase">Skills</p>
            </div>
            <h2 className="section-title mb-14">
              Technologies I <span className="gradient-text">work with</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className={`glass-card-hover p-6 transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/10">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-xs font-mono text-primary/70">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className={`skill-bar-fill ${isInView ? "animate" : ""}`}
                          style={{ "--bar-width": `${skill.level}%`, transitionDelay: `${(i + 2) * 150}ms` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
