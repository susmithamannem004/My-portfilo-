import { useInView } from "@/hooks/useInView";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", issuer: "Oracle" },
  { name: "Agile Project Management", issuer: "HP LIFE" },
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild" },
];

const Certifications = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <div ref={ref}>
          <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider !mx-0 !w-8" />
              <p className="text-primary text-sm font-medium tracking-widest uppercase">Certifications</p>
            </div>
            <h2 className="section-title mb-14">
              Professional <span className="gradient-text">credentials</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            {certs.map((c, i) => (
              <div
                key={c.name}
                className={`glass-card-hover p-5 flex items-center gap-4 group transition-all duration-600 ease-out ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${(i + 2) * 120}ms` }}
              >
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/10 shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-medium truncate">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
