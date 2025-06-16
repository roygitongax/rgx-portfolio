
import React, { useState } from 'react';
import { Calendar, Target, Award, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import { labChallenges } from '@/data/portfolio';
import { LabChallenge } from '@/types';

const LabCard: React.FC<{ lab: LabChallenge }> = ({ lab }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    'CTF': 'bg-purple-100 text-purple-800',
    'Vulnerability Assessment': 'bg-blue-100 text-blue-800',
    'Network Security': 'bg-indigo-100 text-indigo-800',
    'Incident Response': 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{lab.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[lab.category]}`}>
              {lab.category}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[lab.difficulty]}`}>
              {lab.difficulty}
            </span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {lab.completionDate}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{lab.description}</p>

      {/* Tools Used */}
      <div className="flex flex-wrap gap-2 mb-4">
        {lab.toolsUsed.map((tool, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
            {tool}
          </span>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="h-4 w-4 ml-1" />
          </>
        ) : (
          <>
            View Details <ChevronDown className="h-4 w-4 ml-1" />
          </>
        )}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
          {/* Problem Statement */}
          <div>
            <h4 className="flex items-center font-medium text-gray-900 mb-2">
              <Target className="h-4 w-4 mr-2" />
              Problem Statement
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">{lab.problemStatement}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="flex items-center font-medium text-gray-900 mb-2">
              <Shield className="h-4 w-4 mr-2" />
              Approach
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">{lab.approach}</p>
          </div>

          {/* Key Learnings */}
          <div>
            <h4 className="flex items-center font-medium text-gray-900 mb-2">
              <Award className="h-4 w-4 mr-2" />
              Key Learnings
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {lab.keyLearnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Labs: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(labChallenges.map(lab => lab.category)))];
  const difficulties = ['All', ...Array.from(new Set(labChallenges.map(lab => lab.difficulty)))];

  const filteredLabs = labChallenges.filter(lab => {
    return (filterCategory === 'All' || lab.category === filterCategory) &&
           (filterDifficulty === 'All' || lab.difficulty === filterDifficulty);
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <div className="bg-cyber-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h1 className="text-4xl font-bold">Lab Challenges</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hands-on cybersecurity challenges, CTF competitions, and practical exercises 
              demonstrating real-world security analysis and problem-solving skills.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Difficulty
              </label>
              <select
                id="difficulty"
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <div className="bg-gray-100 px-4 py-3 rounded-md">
                <span className="text-sm font-medium text-gray-700">
                  {filteredLabs.length} challenge{filteredLabs.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Challenges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLabs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredLabs.map((lab) => (
                <LabCard key={lab.id} lab={lab} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No challenges found</h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more lab challenges.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenge Statistics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{labChallenges.length}</div>
              <div className="text-gray-600">Total Challenges</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {labChallenges.filter(lab => lab.difficulty === 'Advanced').length}
              </div>
              <div className="text-gray-600">Advanced Level</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Array.from(new Set(labChallenges.flatMap(lab => lab.toolsUsed))).length}
              </div>
              <div className="text-gray-600">Tools Mastered</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyber-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Security Challenges?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's talk about practical cybersecurity solutions and how hands-on experience 
            can strengthen your organization's security posture.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Labs;
