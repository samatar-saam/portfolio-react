import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  Cpu,
  Layers3,
  Database,
  Award,
  BookOpen,
  Coffee,
  Zap,
  Heart,
  Target,
  GraduationCap,
  Briefcase,
  User,
  Mail,
  MapPin,
  Calendar,
  Download,
  Trophy,
  Users,
  Rocket,
  Shield,
  Quote,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience", icon: Briefcase, description: "Professional development" },
  { value: "20+", label: "Projects Completed", icon: Code2, description: "From startups to enterprises" },
  { value: "100%", label: "Client Satisfaction", icon: Heart, description: "Happy clients worldwide" },
  { value: "40%", label: "Performance Boost", icon: Zap, description: "Average optimization gain" },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern UI architectures.",
    achievements: [
      "Reduced load time by 40% through code splitting and optimization",
      "Led migration from legacy codebase to React + TypeScript",
      "Implemented design system used across 5+ products",
      "Mentored 3 junior developers, conducting code reviews and pair programming"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "React Developer",
    company: "Digital Creative Agency",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Developed responsive web applications and interactive user interfaces for clients across various industries.",
    achievements: [
      "Built 15+ client projects with 100% satisfaction rate",
      "Created reusable component library reducing development time by 30%",
      "Implemented complex animations using Framer Motion",
      "Collaborated with designers to create pixel-perfect implementations"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Figma"]
  },
  {
    title: "Frontend Intern",
    company: "Startup Hub",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Assisted in developing and maintaining web applications while learning modern frontend practices.",
    achievements: [
      "Contributed to 5 production applications",
      "Learned React and modern JavaScript ecosystem",
      "Participated in code reviews and team collaboration",
      "Implemented responsive designs for mobile and desktop"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    period: "2016 - 2020",
    location: "Boston, MA",
    achievements: [
      "Graduated with Honors (Cum Laude)",
      "Web Development Club President",
      "Dean's List recipient (4 semesters)",
      "Capstone Project: AI-Powered Web Application"
    ],
    courses: ["Data Structures", "Algorithms", "Web Development", "Database Design"]
  }
];

const achievements = [
  { icon: Trophy, title: "Best Frontend Award", description: "Recognized for exceptional UI/UX implementation at Tech Conference 2023" },
  { icon: Users, title: "Team Leadership", description: "Led frontend team of 5 developers on major client project" },
  { icon: Rocket, title: "10+ Production Apps", description: "Successfully deployed applications used by thousands" },
  { icon: Shield, title: "Code Quality Champion", description: "Maintained 95% test coverage across projects" }
];

const skills = [
  { name: "React.js", level: 90, icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: "📘", category: "Frontend" },
  { name: "Tailwind CSS", level: 92, icon: "🎨", category: "Styling" },
  { name: "Framer Motion", level: 88, icon: "✨", category: "Animation" },
  { name: "JavaScript", level: 88, icon: "📜", category: "Frontend" },
  { name: "Git & GitHub", level: 87, icon: "🔧", category: "Tools" },
  { name: "HTML5/CSS3", level: 95, icon: "🌐", category: "Core" },
  { name: "Node.js", level: 75, icon: "🟢", category: "Backend" },
];

const interests = [
  { icon: Coffee, label: "Coffee Enthusiast", description: "Always exploring new coffee shops" },
  { icon: BookOpen, label: "Tech Writer", description: "Writing about frontend development" },
  { icon: Globe, label: "Open Source", description: "Contributing to OSS projects" },
  { icon: Code2, label: "Side Projects", description: "Building fun experimental apps" }
];

function FloatingBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-36 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />
    </>
  );
}

function StatCard({ icon: Icon, value, label, description, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl border border-blue-200/70 bg-white/80 p-6 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-3 flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 p-3 transition-all duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm font-semibold text-blue-600">{label}</div>
      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </motion.div>
  );
}

function SkillBar({ name, level, icon, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="mb-5"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-medium text-slate-700">{name}</span>
        </div>
        <span className="text-sm text-blue-600">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-blue-100">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
          <p className="text-blue-600">{exp.company}</p>
          <p className="mt-1 text-xs text-slate-500">{exp.location}</p>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {exp.period}
        </span>
      </div>
      <p className="mb-4 text-slate-600">{exp.description}</p>
      <ul className="mb-4 space-y-2">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-indigo-50/30 text-slate-900">
      <FloatingBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-xl"
          >
            <User className="h-4 w-4" />
            About Me
          </motion.div>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Experiences
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            I'm a passionate frontend developer dedicated to creating beautiful,
            performant, and accessible web applications that leave a lasting impression.
            With 4+ Months of experience, I specialize in React and modern frontend technologies.
          </p>
        </motion.div>

        {/* Personal Info & Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 grid gap-8 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Am I?</h2>
            <p className="mb-4 text-slate-600">
              I'm a software engineer with a passion for building exceptional digital experiences.
              With over 4 Months of experience in frontend development, I specialize in creating
              responsive, performant, and visually stunning web applications.
            </p>
            <p className="text-slate-600">
              My approach combines technical excellence with creative design thinking,
              ensuring every project not only works flawlessly but also delights users
              with intuitive interactions and beautiful aesthetics.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-slate-600">samatar@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-slate-600">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-slate-600">Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
            <Quote className="mb-4 h-8 w-8 text-blue-500" />
            <p className="mb-4 text-lg italic text-slate-600">
              "The best way to predict the future is to create it. I strive to build
              interfaces that not only look beautiful but also feel intuitive and
              perform flawlessly."
            </p>
            <p className="font-semibold text-slate-900">— Samatar Mohamed</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Technical Skills</h2>
            <p className="text-slate-600">Technologies and tools I work with daily</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Core Competencies</h3>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} />
              ))}
            </div>

            <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="rounded-full bg-blue-100 p-2">
                      <achievement.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{achievement.title}</h4>
                      <p className="text-sm text-slate-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Experience & Education</h2>
            <p className="text-slate-600">My professional journey and academic background</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                <Briefcase className="h-6 w-6 text-blue-500" />
                Work Experience
              </h3>
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.title} exp={exp} index={index} />
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-blue-600">{edu.school}</p>
                      <p className="mt-1 text-xs text-slate-500">{edu.location}</p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {edu.period}
                    </span>
                  </div>
                  <ul className="mb-4 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span key={course} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <h3 className="mt-8 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Heart className="h-6 w-6 text-blue-500" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-blue-200/70 bg-white/80 p-4 text-center shadow-sm backdrop-blur-xl"
                  >
                    <interest.icon className="h-6 w-6 text-blue-500" />
                    <span className="text-sm font-medium text-slate-700">{interest.label}</span>
                    <p className="text-xs text-slate-500">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 p-8 text-center text-white shadow-xl sm:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
          <p className="mb-6 text-lg opacity-90">
            Have a project in mind? I'd love to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
              Download Resume
              <Download className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}