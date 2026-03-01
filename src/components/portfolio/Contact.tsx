import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:susmithamannem004@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div ref={ref}>
          <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider !mx-0 !w-8" />
              <p className="text-primary text-sm font-medium tracking-widest uppercase">Contact</p>
            </div>
            <h2 className="section-title mb-4">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-14 max-w-lg">
              I'm always open to discussing new opportunities, collaborations, or just chatting about technology.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-4xl">
            {/* Info */}
            <div className={`md:col-span-2 space-y-4 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <a href="mailto:susmithamannem004@gmail.com" className="glass-card-hover p-4 flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground truncate">susmithamannem004@gmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass-card-hover p-4 flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/10">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground">Connect with me</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-card-hover p-4 flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/10">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground">View my code</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`md:col-span-3 glass-card p-6 md:p-8 space-y-4 relative transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="premium-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="premium-input"
                  required
                />
              </div>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="premium-input resize-none"
                required
              />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                <Send className="mr-2 w-4 h-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
