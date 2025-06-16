
import React from 'react';
import TerminalAnimation from '@/components/TerminalAnimation';
import Hero from '@/components/Hero';

const Index: React.FC = () => {
  return (
    <>
      <TerminalAnimation />
      <div className="pt-16">
        <Hero />
      </div>
    </>
  );
};

export default Index;
