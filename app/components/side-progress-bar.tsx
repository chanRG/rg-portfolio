'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
  color: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'ABOUT ME', color: 'from-blue-600 to-purple-600' },
  { id: 'work-experience', label: 'WORK EXPERIENCE', color: 'from-blue-600 to-blue-500' },
  { id: 'personal-projects', label: 'PERSONAL PROJECTS', color: 'from-purple-600 to-purple-500' },
  { id: 'education', label: 'EDUCATION', color: 'from-green-600 to-green-500' },
  { id: 'contact', label: 'CONTACT', color: 'from-blue-600 to-purple-600' },
];

export function SideProgressBar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom of the page (within 100px)
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const { offsetTop } = section;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="hidden xl:fixed xl:right-8 xl:top-1/2 xl:-translate-y-1/2 xl:flex xl:flex-col xl:gap-8 z-40">
      <div className="relative">
        {/* Vertical line connecting all sections */}
        <div className="absolute right-[9px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200/50 via-purple-200/50 to-blue-200/50 dark:from-blue-800/50 dark:via-purple-800/50 dark:to-blue-800/50" />

        {/* Section indicators */}
        <div className="flex flex-col gap-7 relative">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-4 group relative justify-end"
              >
                {/* Label */}
                <motion.span
                  className={`text-[11px] font-medium tracking-[0.2em] whitespace-nowrap transition-all duration-300 uppercase ${
                    isActive
                      ? `text-transparent bg-clip-text bg-gradient-to-r ${section.color}`
                      : 'text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-400'
                  }`}
                  animate={{
                    x: isActive ? -4 : 0,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {section.label}
                </motion.span>

                {/* Circle indicator with gradient */}
                <div className="relative flex items-center justify-center z-10">
                  {/* Gradient glow effect when active */}
                  {isActive && (
                    <motion.div
                      className={`absolute w-10 h-10 rounded-full bg-gradient-to-r ${section.color} opacity-20 blur-xl`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <motion.div
                    className={`relative w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${section.color} shadow-lg`
                        : 'bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-neutral-400 dark:group-hover:border-neutral-600'
                    }`}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {isActive && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      />
                    )}
                  </motion.div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

