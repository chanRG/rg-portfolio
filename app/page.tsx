import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { TextScramble } from "../components/motion-primitives/text-scramble";
import { InView } from "./components/in-view";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
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
            I'm Roger Gonzalez Sedano
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
            <a
              href="/cv_RogerGonzalezSedano_sept.pdf"
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
            <Link
              href="/experience"
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
              See my work
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={socialLinks.email}
              className="text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">About me</h2>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
        >
          <div>
            <p className="text-lg leading-relaxed mb-4">
              I'm a Telecommunications Engineer with over 3 years of experience in research, machine learning, and distributed systems. I'm passionate
              about building end-to-end applications and enjoy working on projects in
              tech environments.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I have a strong foundation in Python, Django, relational databases, and
              production deployments. I am currently completing a Master's degree in
              Advanced Telecommunications Technologies, specializing in Deep
              Learning for Multimedia Processing.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I'm always eager to tackle the next challenge and learn new technologies.
              My experience spans from developing scalable backend systems to implementing
              cutting-edge machine learning solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of technology, my hobbies include photography, traveling,
              mountaineering, running and cycling. These experiences help me bring a unique perspective
              to problem-solving and resilience in my work.
            </p>
          </div>
        </InView>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">Contact me!</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={socialLinks.email}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}