
import React, { useState, useEffect } from 'react';

const TerminalAnimation: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    '> Initializing security protocols...',
    '> Loading threat intelligence database...',
    '> Scanning network interfaces...',
    '> Establishing secure connections...',
    '> Authentication systems online...',
    '> Portfolio interface ready...',
    '> Welcome, Roy Gitonga'
  ];

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('terminalAnimationShown');
    
    if (hasSeenAnimation) {
      setShowAnimation(false);
      return;
    }

    let interval: NodeJS.Timeout;
    
    if (showAnimation && currentLine < bootSequence.length) {
      interval = setInterval(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);
    } else if (currentLine >= bootSequence.length) {
      setTimeout(() => {
        setShowAnimation(false);
        sessionStorage.setItem('terminalAnimationShown', 'true');
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentLine, showAnimation, bootSequence.length]);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 bg-cyber-dark z-50 flex items-center justify-center">
      <div className="terminal-window bg-black border border-gray-600 rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm font-fira">System Boot Sequence</span>
        </div>
        
        <div className="terminal-content space-y-2">
          {bootSequence.slice(0, currentLine).map((line, index) => (
            <div
              key={index}
              className="text-green-400 font-fira text-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {line}
            </div>
          ))}
          
          {currentLine < bootSequence.length && (
            <div className="flex items-center space-x-2">
              <span className="text-green-400 font-fira text-sm">
                {bootSequence[currentLine]}
              </span>
              <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
            </div>
          )}
        </div>
        
        {currentLine >= bootSequence.length && (
          <div className="mt-4 text-center">
            <div className="inline-block w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalAnimation;
