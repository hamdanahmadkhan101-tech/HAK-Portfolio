import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{profile?.name || 'Portfolio'}</h3>
            <p className="text-muted-foreground">
              {profile?.title || 'Full Stack Developer'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {profile?.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              )}
              {profile?.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  onClick={(e) => {
                    // Fallback: copy to clipboard if mailto fails
                    setTimeout(() => {
                      navigator.clipboard.writeText(profile.email).then(() => {
                        console.log('Email copied to clipboard:', profile.email);
                      }).catch(() => {
                        console.log('Email address:', profile.email);
                      });
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Email"
                  title={`Click to email ${profile.email} (or copy to clipboard)`}
                >
                  <Mail size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {currentYear} {profile?.name || 'Portfolio'}. Made with{' '}
            <Heart size={16} className="inline text-accent" /> using React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;