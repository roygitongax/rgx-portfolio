
import React from 'react';
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { experiences, education, certifications, skills, contactInfo } from '@/data/portfolio';

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would typically link to a PDF version of the resume
    console.log('Download CV functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print/Download Actions - Hidden in print */}
      <div className="no-print bg-cyber-dark text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Professional Resume</h1>
          <div className="flex space-x-4">
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Print CV
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="print-optimized max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Roy Gitonga</h1>
          <p className="text-lg text-gray-600 mb-4">Cybersecurity Analyst | Technical Architect | Security Specialist</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">{contactInfo.email}</a>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📱</span>
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1" />
              <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                GitHub Portfolio
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2" />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Results-driven BSc Information Technology graduate with specialized expertise in cybersecurity, 
            low-code development, and enterprise asset operations. Proven track record in developing custom 
            business applications using Microsoft Power Platform, conducting comprehensive security audits, 
            and leading nationwide operational initiatives. SC-900 certified with hands-on experience in 
            vulnerability assessments, network security, and incident response. Seeking to leverage technical 
            skills and security expertise in a challenging cybersecurity analyst or security engineer role.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Briefcase className="h-5 w-5 mr-2" />
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-blue-600 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 mt-1 sm:mt-0">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <GraduationCap className="h-5 w-5 mr-2" />
            Education
          </h2>
          
          {education.map((edu) => (
            <div key={edu.id} className="border-l-2 border-green-600 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-green-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">{edu.grade}</p>
                </div>
                <div className="text-sm text-gray-600 mt-1 sm:mt-0">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.duration}
                  </div>
                </div>
              </div>
              {edu.description && (
                <p className="text-gray-700 text-sm">{edu.description}</p>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                <p className="text-purple-600 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-1">{cert.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 print-page-break">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2" />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-1">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-1">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-1">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Available for both remote and in-office opportunities</li>
              <li>Flexible across workdays and shifts</li>
              <li>Strong commitment to continuous learning and professional development</li>
              <li>Excellent communication skills in English and Swahili</li>
              <li>Active contributor to cybersecurity communities and forums</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
