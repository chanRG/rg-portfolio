'use client';

import Link from "next/link";
import Image from "next/image";
import { projects } from "./project-data";
import { InView } from "../components/in-view";

export default function Projects() {
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
    <section className="max-w-4xl mx-auto">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">Resume</h1>
      </InView>
      
      {/* Navigation Buttons */}
      <InView
        variants={{
          hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
      >
        <div className="flex justify-center flex-wrap gap-2 mb-12">
        <button
          onClick={() => scrollToSection('work-experience')}
          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
          Work Experience
        </button>
        <button
          onClick={() => scrollToSection('personal-projects')}
          className="inline-flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Personal Projects
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg text-xs"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Education
        </button>
        </div>
      </InView>
      
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
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Work Experience
          </h2>
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
              <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
              {/* Colored accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {project.title}
                    </h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-blue-50 dark:bg-blue-950/30 px-2 py-1 rounded border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Company and Location */}
                  {project.company && (
                    <div className="mb-3">
                      <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {project.company}
                        {project.location && (
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                            | {project.location}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Enlaces */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                      className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                      className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Personal Projects
          </h2>
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
              <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
              {/* Colored accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {project.title}
                    </h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-purple-50 dark:bg-purple-950/30 px-2 py-1 rounded border border-purple-200 dark:border-purple-800 whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Project and Location */}
                  {project.project && (
                    <div className="mb-3">
                      <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                        {project.project}
                        {project.location && (
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                            | {project.location}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Enlaces */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
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
              </div>
            </article>
            </InView>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div id="education">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: 'blur(4px)' },
            visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Education
          </h2>
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
              <article className="group relative bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700">
              {/* Colored accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {project.title}
                    </h2>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded border border-green-200 dark:border-green-800 whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* University and Location */}
                  {project.university && (
                    <div className="mb-3">
                      <p className="text-lg font-medium text-green-600 dark:text-green-400">
                        {project.university}
                        {project.location && (
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
                            | {project.location}
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Enlaces */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
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
    </section>
  );
}