'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'INTRO' },
  { id: 'work-experience', label: 'EXPERIENCE' },
  { id: 'personal-projects', label: 'PROJECTS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export function SideProgressBar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
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
        <div className="absolute right-[9px] top-0 bottom-0 w-[1px] bg-[var(--border-subtle)]" />

        <div className="flex flex-col gap-7 relative">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-4 group relative justify-end cursor-pointer"
              >
                <motion.span
                  className={`text-[11px] font-medium tracking-[0.2em] whitespace-nowrap transition-all duration-300 uppercase ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]'
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                  animate={{
                    x: isActive ? -4 : 0,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {section.label}
                </motion.span>

                <div className="relative flex items-center justify-center z-10">
                  {isActive && (
                    <motion.div
                      className="absolute w-8 h-8 rounded-full bg-[var(--accent)] opacity-15 blur-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <motion.div
                    className={`relative w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[var(--accent)] shadow-[0_0_12px_rgba(168,144,104,0.3)]'
                        : 'bg-[var(--bg-primary)] border border-[var(--border-medium)] group-hover:border-[var(--text-tertiary)]'
                    }`}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {isActive && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[var(--bg-primary)]"
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
