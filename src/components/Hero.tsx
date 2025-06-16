
import React from 'react';
import { Shield, Lock, Terminal, Radar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center terminal-bg relative overflow-hidden">
      {/* Scanning line effect */}
      <div className="scanning-line opacity-30"></div>
      
      {/* Background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-20 left-20 w-16 h-16 text-white/5 animate-pulse" />
        <Lock className="absolute top-40 right-32 w-12 h-12 text-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <Terminal className="absolute bottom-32 left-32 w-20 h-20 text-white/5 animate-pulse" style={{ animationDelay: '2s' }} />
        <Radar className="absolute bottom-20 right-20 w-14 h-14 text-white/5 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-4 border-white/20 flex items-center justify-center shadow-2xl">
            <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-white/80" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Roy Gitonga
          </h1>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
              Aspiring Cybersecurity Analyst
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Bridging System Security with Real-World Impact
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <Shield className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="text-sm font-medium">SC-900 Certified</p>
            <p className="text-xs text-gray-400">Microsoft Security</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <Terminal className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="text-sm font-medium">Technical Architect</p>
            <p className="text-xs text-gray-400">NTT Data Experience</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
            <Lock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="text-sm font-medium">Security Auditor</p>
            <p className="text-xs text-gray-400">NYS Initiative</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Projects
              <Shield className="ml-2 -mr-1 w-5 h-5" />
            </a>
            
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Get In Touch
              <Terminal className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
