import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating orbs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.12) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle, hsl(187 72% 55% / 0.1) 0%, transparent 70%)',
          animation: 'float-delayed 10s ease-in-out infinite',
        }}
      />
      <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(260 70% 60% / 0.08) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />

      <div className="section-container text-center relative z-10">
        {/* Status badge */}
        <div className="animate-fade-up">
          <div className="status-badge mx-auto mb-8">
            Open to opportunities
          </div>
        </div>

        {/* Name */}
        <div className="animate-fade-up animate-fade-up-delay-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-5 tracking-tight leading-[1.05]">
            <span className="text-foreground">Susmitha</span>
            <br />
            <span className="gradient-text glow-text">Mannem</span>
          </h1>
        </div>

        {/* Role */}
        <div className="animate-fade-up animate-fade-up-delay-2">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 font-light">
            <span className="text-foreground font-medium">Java Full Stack Developer</span>
            <span className="mx-3 text-primary/50">·</span>
            <span>Computer Science Engineer</span>
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Building scalable backend systems and modern full-stack web applications.
          </p>
        </div>

        {/* Social Icons */}
        <div className="animate-fade-up animate-fade-up-delay-3 flex justify-center gap-3 mb-10">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:susmithamannem004@gmail.com" className="social-icon" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up animate-fade-up-delay-4 flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-1" /> View Projects
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="/SusmithaMannem_Resume.pdf" download>
              <Download className="mr-1" /> Download Resume
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-1" /> Contact Me
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up animate-fade-up-delay-5 mt-16">
          <div className="mx-auto w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-primary/60" style={{ animation: 'float 2s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
