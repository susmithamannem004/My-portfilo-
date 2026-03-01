import { useInView } from "@/hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const { ref, isInView } = useInView();

  const bullets = [
    "Developed mini full-stack web applications using Java and Spring Boot",
    "Implemented backend business logic using object-oriented programming principles",
    "Designed normalized relational database schemas with MySQL",
    "Worked in Agile development cycles with cross-functional teams",
  ];

  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="section-divider !mx-0 !w-8" />
            <p className="text-primary text-sm font-medium tracking-widest uppercase">Experience</p>
          </div>
          <h2 className="section-title mb-14">
            Where I've <span className="gradient-text">contributed</span>
          </h2>

          <div className="glass-card p-8 md:p-10 max-w-3xl relative overflow-visible">
            {/* Glow accent */}
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/10 shrink-0">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-bold text-foreground">Java Full Stack Intern</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5" />
                    May 2025 – July 2025
                  </div>
                </div>
                <p className="text-primary font-medium mb-5">Miracle Software Systems</p>
                <ul className="space-y-3">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-muted-foreground transition-all duration-500 ${
                        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0 ring-4 ring-primary/10" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
