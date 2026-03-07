'use client';

import Link from "next/link";
import { projects } from "./project-data";
import { InView } from "../components/in-view";

export default function Projects() {
  const workExperience = projects.filter(project => project.type === 'work');
  const personalProjects = projects.filter(project => project.type === 'personal');
  const education = projects.filter(project => project.type === 'education');

  return (
    <section className="max-w-4xl mx-auto">
      <InView
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1
          className="mb-12 text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Resume
        </h1>
      </InView>

      {/* Work Experience Section */}
      <div id="work-experience" className="mb-24 md:mb-32">
        <InView
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2
            className="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Work Experience
          </h2>
          <div className="accent-line mb-8"></div>
        </InView>
        <div>
          {workExperience.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <article className="group border-b border-[var(--border-subtle)] py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3
                    className="text-xl font-semibold text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider uppercase whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                {project.company && (
                  <p className="text-sm font-mono text-[var(--accent)] mb-2">
                    {project.company}
                    {project.location && (
                      <span className="text-[var(--text-tertiary)] ml-2">— {project.location}</span>
                    )}
                  </p>
                )}

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                  >
                    Visit Company <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  {"workUrl" in project && project.workUrl && (
                    <Link
                      href={project.workUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                    >
                      View Work &rarr;
                    </Link>
                  )}
                  {"thesisUrl" in project && project.thesisUrl && (
                    <Link
                      href={project.thesisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                    >
                      View Thesis &rarr;
                    </Link>
                  )}
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div id="personal-projects" className="mb-24 md:mb-32">
        <InView
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2
            className="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Personal Projects
          </h2>
          <div className="accent-line mb-8"></div>
        </InView>
        <div>
          {personalProjects.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <article className="group border-b border-[var(--border-subtle)] py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3
                    className="text-xl font-semibold text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider uppercase whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                {project.project && (
                  <p className="text-sm font-mono text-[var(--accent)] mb-2">
                    {project.project}
                    {project.location && (
                      <span className="text-[var(--text-tertiary)] ml-2">— {project.location}</span>
                    )}
                  </p>
                )}

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.url && (
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                    >
                      View Project <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                )}
              </article>
            </InView>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div id="education">
        <InView
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          viewOptions={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2
            className="text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Education
          </h2>
          <div className="accent-line mb-8"></div>
        </InView>
        <div>
          {education.map((project, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <article className="group border-b border-[var(--border-subtle)] py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3
                    className="text-xl font-semibold text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider uppercase whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                {project.university && (
                  <p className="text-sm font-mono text-[var(--accent)] mb-2">
                    {project.university}
                    {project.location && (
                      <span className="text-[var(--text-tertiary)] ml-2">— {project.location}</span>
                    )}
                  </p>
                )}

                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                  >
                    Visit University <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
