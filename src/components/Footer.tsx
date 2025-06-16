
import React from 'react';
import { Shield, Mail, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-semibold text-lg">Roy Gitonga</span>
            </div>
            <p className="text-gray-400 text-sm">
              Aspiring Cybersecurity Analyst building secure digital solutions 
              and strengthening organizational security postures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume" className="text-gray-400 hover:text-white transition-colors">
                  Resume & Experience
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Technical Projects
                </a>
              </li>
              <li>
                <a href="/labs" className="text-gray-400 hover:text-white transition-colors">
                  Lab Challenges
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to both remote and in-office opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Roy Gitonga. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
