import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#060B18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-muted text-sm font-mono">
          © 2026 Indraneel Chatterjee · Built with Next.js & Tailwind CSS
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            GitHub
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a 
            href={SOCIAL_LINKS.resume} 
            download
            className="text-accent hover:underline transition-colors text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
