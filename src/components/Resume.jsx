// Resume.jsx
import React from "react";

const Resume = () => {
  return (
    <div className="bg-slate-100 font-sans py-8 px-4 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-start gap-6 pb-6 mb-6 border-b-4 border-blue-500">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
                Samatar Mohamed
              </h1>
              <p className="text-lg text-slate-600 mt-1 font-medium">Software Engineer</p>
            </div>
            <div className="text-left md:text-right">
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="mailto:samatar@example.com" className="text-blue-600 text-sm hover:underline">
                  samatar@example.com
                </a>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  +1 (123) 456-7890
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                📍 Seattle, WA ·{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  github.com/samatar
                </a>{" "}
                ·{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  linkedin.com/in/samatar
                </a>
              </p>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT COLUMN (1/3 width) */}
            <div className="md:col-span-1 space-y-6">
              {/* Technical Skills */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Technical Skills
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-slate-700 mb-1">Languages</div>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript/TypeScript", "Python", "HTML5/CSS3", "SQL"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 mb-1">
                      Frameworks & Libraries
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "Tailwind CSS", "D3.js", "Express"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 mb-1">
                      Tools & Platforms
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Git/GitHub", "MongoDB", "Firebase", "VS Code", "REST APIs"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-700"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Education
                </h2>
                <div>
                  <h3 className="font-bold">B.S. in Computer Science</h3>
                  <div className="text-sm text-slate-500 mt-0.5">
                    University of Washington · Graduated May 2024
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1 marker:text-blue-500">
                    <li>
                      <strong>Cum Laude</strong> – Top 15% of class
                    </li>
                    <li>
                      <strong>Dean’s List</strong> – 4 semesters (Fall 2022 – Spring 2024)
                    </li>
                    <li>Relevant coursework: Data Structures, Web Dev, ML, Databases</li>
                  </ul>
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Leadership
                </h2>
                <div>
                  <h3 className="font-bold">
                    Web Development Club –{" "}
                    <span className="text-blue-600">President</span>
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">2023 – 2024</div>
                  <p className="text-sm text-slate-600 mt-2 border-l-2 border-slate-200 pl-3">
                    Led a club of 30+ students, organized weekly coding workshops, and
                    hosted a campus-wide hackathon (120+ participants). Increased member
                    retention by 40% and introduced mentorship program.
                  </p>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Awards
                </h2>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 marker:text-blue-500">
                  <li>Cum Laude Graduate</li>
                  <li>Dean’s List (x4)</li>
                  <li>Outstanding Capstone Project Nominee</li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN (2/3 width) */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Profile
                </h2>
                <p className="text-slate-600">
                  Recent Computer Science graduate with Cum Laude honors and proven
                  leadership as Web Development Club President. Passionate about building
                  intelligent web applications, AI integration, and creating seamless
                  user experiences. Seeking a full‑stack or software engineering role
                  where I can contribute and grow.
                </p>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Projects
                </h2>

                <div className="space-y-5">
                  {/* Project 1 */}
                  <div>
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h3 className="font-bold text-blue-600">
                        AI-Powered Web Application
                      </h3>
                      <span className="text-xs text-slate-400">Capstone, 2024</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 border-l-2 border-slate-200 pl-3">
                      Built an intelligent dashboard that processes real-time data
                      streams and provides predictive insights using machine learning.
                      Features include customizable widgets, dark mode, and responsive
                      design.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "TypeScript", "Node.js", "TensorFlow.js", "D3.js"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h3 className="font-bold text-blue-600">
                        Qurankareem – Quran Learning Platform
                      </h3>
                      <span className="text-xs text-slate-400">2024</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 border-l-2 border-slate-200 pl-3">
                      Full‑stack Quran app with verse‑by‑verse audio recitations,
                      multiple translations, advanced search, and bookmarking.
                      Implemented a responsive reader with dark mode and progress
                      tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "Tailwind CSS", "Node.js", "MongoDB", "Audio API"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div className="flex flex-wrap justify-between items-baseline">
                      <h3 className="font-bold text-blue-600">
                        Real-Time Analytics Dashboard
                      </h3>
                      <span className="text-xs text-slate-400">2023</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1 border-l-2 border-slate-200 pl-3">
                      Developed a dashboard for visualizing live metrics using WebSockets
                      and D3.js. Reduced data refresh latency by 60% and enabled
                      exportable reports.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "D3.js", "Socket.io", "Express"].map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">
                  Experience
                </h2>
                <div>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="font-bold text-blue-600">Software Developer Intern</h3>
                    <span className="text-xs text-slate-400">Summer 2023</span>
                  </div>
                  <ul className="text-sm text-slate-600 mt-2 list-disc list-inside space-y-1">
                    <li>
                      Assisted in building internal tools for data processing, improving
                      efficiency by 25%.
                    </li>
                    <li>
                      Collaborated in an agile team using Jira and Git; wrote unit tests
                      with Jest.
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-4 border-slate-200" />
              <div className="text-center text-xs text-slate-400">
                📄 References available upon request · Portfolio:{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  samatar.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;