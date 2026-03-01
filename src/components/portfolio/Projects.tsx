import { useInView } from "@/hooks/useInView";
import { Folder, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Library Management System",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    description: "Full-stack web application for library operations with comprehensive CRUD functionality.",
    bullets: [
      "Developed REST APIs with Spring Boot backend",
      "Implemented secure CRUD operations with validation",
      "Optimized database queries (20% latency reduction)",
      "Applied layered MVC architecture for maintainability",
    ],
  },
  {
    title: "Movie Review & Rating Application",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    description: "Full-stack movie review platform enabling users to rate, review, and comment on movies.",
    bullets: [
      "Designed and developed REST APIs for managing movies and user reviews",
      "Implemented CRUD operations for movies, ratings, and comments",
      "Designed relational database schema and integrated with MySQL",
      "Connected frontend with backend APIs using HTTP requests",
      "Followed layered architecture (Controller–Service–Repository pattern)",
    ],
  },
  {
    title: "Smart Emergency Traffic System",
    tech: ["Arduino", "IoT", "GPS", "Sensors"],
    description: "IoT-based intelligent traffic management system for emergency vehicle prioritization.",
    bullets: [
      "Designed intelligent traffic signal switching logic",
      "Implemented real-time emergency vehicle detection",
      "Integrated GPS-based location tracking and routing",
    ],
  },
];

const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div ref={ref}>
          <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider !mx-0 !w-8" />
              <p className="text-primary text-sm font-medium tracking-widest uppercase">Projects</p>
            </div>
            <h2 className="section-title mb-14">
              Featured <span className="gradient-text">work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card-hover p-7 md:p-8 flex flex-col group transition-all duration-700 ease-out ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 2) * 150}ms` }}
              >
                {/* Top glow line */}
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/10">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
