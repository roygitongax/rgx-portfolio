import React, { useState } from 'react';
import { Github, ExternalLink, Code, Shield, Terminal } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code className="h-16 w-16 text-gray-400" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600 text-white">
              <Shield className="h-3 w-3 mr-1" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-cyber-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="h-8 w-8 mr-3" />
              <h1 className="text-4xl font-bold">Technical Projects</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing cybersecurity solutions, automation tools, and enterprise applications 
              built with modern technologies and security best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Highlighted projects demonstrating advanced cybersecurity concepts and technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Supporting projects and technical experiments exploring various aspects of cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-cyber-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, innovative security solutions, 
            and opportunities to strengthen organizational security postures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/resume"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
