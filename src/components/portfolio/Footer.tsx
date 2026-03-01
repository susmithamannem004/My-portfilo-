import { Download, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/20 py-12">
    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="max-w-6xl mx-auto px-5 text-center space-y-6">
      <div className="flex justify-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:susmithamannem004@gmail.com" className="social-icon">
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <a
        href="/SusmithaMannem_Resume.pdf"
        download
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors duration-300"
      >
        <Download className="w-4 h-4" /> Download Resume
      </a>
      <p className="text-muted-foreground/60 text-sm">
        © 2026 Susmitha Mannem · Built with Passion 💙
      </p>
    </div>
  </footer>
);

export default Footer;
