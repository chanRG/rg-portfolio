'use client';

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { TextScramble } from "../components/motion-primitives/text-scramble";
import { InView } from "./components/in-view";
import { projects } from "./experience/project-data";
import { SideProgressBar } from "./components/side-progress-bar";

export default function Page() {
  // Separate work experience, personal projects and education
  const workExperience = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');
  const education = projects.filter(project => project.type === 'education');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <SideProgressBar />
      <section className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div id="hero" className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Image
              src="/perfil.jpg"
              alt="Roger Gonzalez Sedano profile photo"
              className="rounded-full bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              unoptimized
              width={200}
              height={200}
              priority
            />
          </a>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi,<br />
            I'm Roger Gonzalez
          </h1>
          <div className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
            <TextScramble
              className='font-mono text-xl'
              duration={2}
              // characterSet='. '
            >
              Telecommunications Engineer & Research Enthusiast
            </TextScramble>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <button
              onClick={() => scrollToSection('work-experience')}
              className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              View Experience
            </button>
            <a
              href="/cv_RogerGonzalezSedano.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>

        </div>
      </div>

      {/* About Section */}
      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        >
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                I'm a Telecommunications Engineer who enjoys building simple, reliable systems that connect people and places. I'm curious about wireless networks and where applied AI genuinely improves the experience.
              </p>
              
              <p>
                I completed an MSc in Advanced Telecommunications Technologies (UPC) in 2025. I care about open-source, community networks, and making connectivity more accessible. Day to day I prototype in Python, explore signals, and ship pragmatic end-to-end solutions.
              </p>
              
              <p>
                Outside of technology, my passions include photography, traveling, and endurance sports. I've completed several half marathons and am currently training for a marathon and an Ironman 70.3 in late spring 2026—experiences that strengthen discipline and long-term thinking.
              </p>
            </div>
          </div>
        </InView>
      </div>

      {/* Work Experience Section */}
      <div id="work-experience" className="mb-12">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Work Experience
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
            </div>
          </InView>
          <div className="space-y-6">
            {workExperience.map((project, index) => (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
              >
                <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                          {project.title}
                        </h4>
                        <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 bg-blue-50 dark:bg-blue-950/30 px-2 py-1 rounded border border-blue-200 dark:border-blue-800 whitespace-nowrap self-start">
                          {project.year}
                        </span>
                      </div>
                      
                      {project.company && (
                        <div className="mb-3">
                          <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">
                            {project.company}
                            {project.location && (
                              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 ml-1 sm:ml-2">
                                | {project.location}
                              </span>
                            )}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 text-justify">
                        {project.description}
                      </p>
                      
                      {project.tags && (
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span>Visit Company</span>
                        <svg
                          className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                      {"workUrl" in project && project.workUrl && (
                        <Link
                          href={project.workUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <span>View Work</span>
                          <svg
                            className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      )}
                      {"thesisUrl" in project && project.thesisUrl && (
                        <Link
                          href={project.thesisUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <span>View Thesis</span>
                          <svg
                            className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </InView>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div id="personal-projects" className="mb-12">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                Personal Projects
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"></div>
            </div>
          </InView>
          <div className="space-y-6">
            {personalProjects.map((project, index) => (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
              >
                <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                          {project.title}
                        </h4>
                        <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 bg-purple-50 dark:bg-purple-950/30 px-2 py-1 rounded border border-purple-200 dark:border-purple-800 whitespace-nowrap self-start">
                          {project.year}
                        </span>
                      </div>
                      
                      {project.project && (
                        <div className="mb-3">
                          <p className="text-base sm:text-lg font-medium text-purple-600 dark:text-purple-400">
                            {project.project}
                            {project.location && (
                              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 ml-1 sm:ml-2">
                                | {project.location}
                              </span>
                            )}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 text-justify">
                        {project.description}
                      </p>
                      
                      {project.tags && (
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {project.url && (
                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <span>View Project</span>
                          <svg
                            className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              </InView>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="mb-12">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Education
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
            </div>
          </InView>
          <div className="space-y-6">
            {education.map((project, index) => (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                viewOptions={{ amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
              >
                <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 md:hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                          {project.title}
                        </h4>
                        <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded border border-green-200 dark:border-green-800 whitespace-nowrap self-start">
                          {project.year}
                        </span>
                      </div>
                      
                      {project.university && (
                        <div className="mb-3">
                          <p className="text-base sm:text-lg font-medium text-green-600 dark:text-green-400">
                            {project.university}
                            {project.location && (
                              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 ml-1 sm:ml-2">
                                | {project.location}
                              </span>
                            )}
                          </p>
                        </div>
                      )}
                      
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 text-justify">
                        {project.description}
                      </p>
                      
                      {project.tags && (
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        <span>Visit University</span>
                        <svg
                          className="w-4 h-4 ml-1 hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </InView>
            ))}
          </div>
        </div>

      {/* Contact Section */}
      <div id="contact" className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-12 mb-8 overflow-hidden group">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's work together
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>
          </div>
          
          <Link
            href="/contact"
            className="flex-shrink-0 group/button relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="font-semibold text-lg">Contact me</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover/button:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
      </section>
    </>
  );
}