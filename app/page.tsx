'use client';

import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { TextScramble } from "../components/motion-primitives/text-scramble";
import { InView } from "./components/in-view";
import { projects } from "./experience/project-data";
import { SideProgressBar } from "./components/side-progress-bar";

export default function Page() {
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
        <div id="hero" className="mb-16 md:mb-32">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="flex-shrink-0 w-full flex justify-center md:w-auto md:block">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/perfil.jpg"
                  alt="Roger Gonzalez Sedano"
                  className="w-[220px] h-[220px] md:w-[180px] md:h-[180px] grayscale hover:grayscale-0 transition-all duration-700 border border-[var(--border-subtle)]"
                  unoptimized
                  width={220}
                  height={220}
                  priority
                />
              </a>
            </div>

            <div className="flex-1">
              <h1
                className="text-4xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[0.95] mb-4 md:mb-6 text-center md:text-left"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Roger<br />
                Gonzalez<br />
                <span className="text-[var(--accent)]">Sedano</span>
              </h1>
              <div className="mb-6 md:mb-8 text-center md:text-left">
                <TextScramble
                  className="font-mono text-base md:text-lg text-[var(--text-secondary)] tracking-wide"
                  duration={2}
                >
                  Telecommunications Engineer & EM Wave Researcher
                </TextScramble>
              </div>

              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
                <button
                  onClick={() => scrollToSection('work-experience')}
                  className="w-full md:w-auto text-center px-6 py-3.5 md:py-3 border border-[var(--accent)] text-[var(--accent)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  View Experience
                </button>
                <a
                  href="/cv_RogerGonzalezSedano.pdf"
                  download
                  className="w-full md:w-auto text-center px-6 py-3.5 md:py-3 bg-[var(--accent)] text-[var(--bg-primary)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--accent-hover)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-20 md:mb-32">
          <InView
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2
              className="text-3xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About
            </h2>
            <div className="accent-line mb-8 md:mb-10"></div>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            viewOptions={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="border-l-2 border-[var(--accent)] pl-5 md:border-l-0 md:pl-0 space-y-8 md:space-y-6 text-[15px] md:text-lg leading-[1.75] md:leading-relaxed text-[var(--text-secondary)] font-mono">
              <p>
                Telecommunications Engineer specializing in Electromagnetic Wave Propagation and Physical Modeling, with expertise in RF physics from research at KTH and N3Cat, and a strong foundation in Machine Learning.
              </p>
              <p>
                I completed an MSc in Advanced Telecommunications Technologies (UPC) in 2025. I care about open-source, community networks, and making connectivity more accessible. Day to day I prototype in Python, explore signals, and ship pragmatic end-to-end solutions.
              </p>
              <p>
                Outside of technology, my passions include photography, traveling, and endurance sports. I've completed several half marathons and am currently training for a marathon and an Ironman 70.3 — experiences that strengthen discipline and long-term thinking.
              </p>
            </div>
          </InView>
        </div>

        {/* Work Experience Section */}
        <div id="work-experience" className="mb-14 md:mb-32">
          <InView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3
              className="text-2xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience
            </h3>
            <div className="accent-line mb-8 md:mb-10"></div>
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
                <article className="group border-b border-[var(--border-subtle)] py-6 md:py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h4
                      className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider uppercase whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  {project.company && (
                    <p className="text-sm font-mono text-[var(--accent)] mb-2">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-2"
                      >
                        {project.company}
                      </Link>
                      {project.location && (
                        <span className="text-[var(--text-tertiary)] ml-2">— {project.location}</span>
                      )}
                    </p>
                  )}

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2.5 md:gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2.5 py-1.5 md:px-2 md:py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(("workUrl" in project && project.workUrl) || ("thesisUrl" in project && project.thesisUrl)) && (
                    <div className="flex items-center gap-6 md:gap-4">
                      {"workUrl" in project && project.workUrl && (
                        <Link
                          href={project.workUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm py-1 md:py-0 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                        >
                          View Work →
                        </Link>
                      )}
                      {"thesisUrl" in project && project.thesisUrl && (
                        <Link
                          href={project.thesisUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm py-1 md:py-0 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                        >
                          View Thesis →
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              </InView>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div id="personal-projects" className="mb-14 md:mb-32">
          <InView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3
              className="text-2xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Projects
            </h3>
            <div className="accent-line mb-8 md:mb-10"></div>
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
                <article className="group border-b border-[var(--border-subtle)] py-6 md:py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h4
                      className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h4>
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
                    <div className="flex flex-wrap gap-2.5 md:gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2.5 py-1.5 md:px-2 md:py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.url && (
                    <div className="flex items-center gap-6 md:gap-4">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm py-1 md:py-0 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                      >
                        View Project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  )}
                </article>
              </InView>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="mb-14 md:mb-32">
          <InView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            viewOptions={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3
              className="text-2xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Education
            </h3>
            <div className="accent-line mb-8 md:mb-10"></div>
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
                <article className="group border-b border-[var(--border-subtle)] py-6 md:py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <h4
                      className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider uppercase whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  {project.university && (
                    <p className="text-sm font-mono text-[var(--accent)] mb-2">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-2"
                      >
                        {project.university}
                      </Link>
                      {project.location && (
                        <span className="text-[var(--text-tertiary)] ml-2">— {project.location}</span>
                      )}
                    </p>
                  )}

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2.5 md:gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2.5 py-1.5 md:px-2 md:py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </InView>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div id="contact" className="mt-16 md:mt-24 mb-8 py-12 md:py-16 border-t-2 border-[var(--accent)] md:border-t md:border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 md:mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let&apos;s work<br />
                <span className="text-[var(--accent)]">together</span>
              </h2>
              <p className="text-[15px] md:text-base text-[var(--text-secondary)] font-mono max-w-md">
                Open to research collaborations, engineering roles, and interesting projects.
              </p>
            </div>

            <Link
              href="/contact"
              className="group w-full md:w-auto text-center px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] md:bg-transparent md:text-[var(--accent)] border border-[var(--accent)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get in touch
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
