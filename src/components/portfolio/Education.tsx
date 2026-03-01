import { useInView } from "@/hooks/useInView";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="relative">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="section-divider !mx-0 !w-8" />
            <p className="text-primary text-sm font-medium tracking-widest uppercase">Education</p>
          </div>
          <h2 className="section-title mb-14">
            Academic <span className="gradient-text">background</span>
          </h2>

          <div className="glass-card p-8 md:p-10 max-w-3xl relative">
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/10 shrink-0">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">B.Tech Computer Science Engineering</h3>
                <p className="text-primary font-medium mt-1">R.V.R & J.C College of Engineering</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="text-sm text-muted-foreground">GPA</span>
                  <span className="text-lg font-bold text-foreground">8.01</span>
                  <span className="text-sm text-muted-foreground">/ 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
