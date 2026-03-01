import { useInView } from "@/hooks/useInView";
import { User, MapPin, Sparkles } from "lucide-react";

const highlights = [
  { label: "Focus", value: "Full Stack" },
  { label: "Framework", value: "Spring Boot" },
  { label: "Approach", value: "Agile" },
];

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="section-divider !mx-0 !w-8" />
            <p className="text-primary text-sm font-medium tracking-widest uppercase">About Me</p>
          </div>
          <h2 className="section-title mb-14">
            Passionate about building{" "}
            <span className="gradient-text">great software</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 glass-card p-8 md:p-10">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Computer Science undergraduate with hands-on experience in Java Full Stack Development,
                specializing in <span className="text-foreground font-medium">Core Java</span>,{" "}
                <span className="text-foreground font-medium">Spring Boot</span>,{" "}
                <span className="text-foreground font-medium">REST APIs</span>, and{" "}
                <span className="text-foreground font-medium">MySQL</span>. Passionate about clean architecture,
                scalable backend systems, and Agile development.
              </p>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                India
                <span className="mx-2 text-border">·</span>
                <Sparkles className="w-4 h-4 text-accent" />
                Open to opportunities
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.label} className="glass-card p-5 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{h.label}</p>
                  <p className="text-lg font-bold text-foreground">{h.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
