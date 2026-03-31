import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  LayoutTemplate,
  GitBranch,
  Sparkles,
  Database,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle2,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Core",
    icon: Code2,
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    description:
      "Building clean, reusable, and responsive user interfaces with strong component structure.",
  },
  {
    title: "UI / UX Design",
    icon: Palette,
    items: ["Visual Hierarchy", "Spacing", "Color Systems", "Responsive Layouts", "Interaction Design"],
    description:
      "Designing polished interfaces that feel modern, intuitive, and visually balanced.",
  },
  {
    title: "Animation & Experience",
    icon: Zap,
    items: ["Framer Motion", "Hover Effects", "Transitions", "Micro Interactions", "Scroll Animations"],
    description:
      "Adding motion and detail that make products feel premium and engaging.",
  },
  {
    title: "Workflow & Tools",
    icon: GitBranch,
    items: ["Git", "GitHub", "Vite", "Component Reuse", "Project Structure"],
    description:
      "Using modern frontend tooling and organized workflows for scalable development.",
  },
];

const focusAreas = [
  {
    icon: LayoutTemplate,
    title: "Component Architecture",
    text: "Structuring interfaces into reusable, maintainable parts for cleaner scaling.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    text: "Ensuring smooth experiences across phone, tablet, and desktop screens.",
  },
  {
    icon: Monitor,
    title: "Premium Interfaces",
    text: "Crafting layouts that feel professional, high-end, and presentation-ready.",
  },
  {
    icon: Database,
    title: "Frontend Integration",
    text: "Connecting UI with data and frontend logic in a clean, practical way.",
  },
];

const strengths = [
  "Clean React component structure",
  "Strong Tailwind CSS styling",
  "Modern responsive layout building",
  "Smooth animations with Framer Motion",
  "Professional UI detail and polish",
  "Readable and maintainable frontend code",
];

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-indigo-50/30 py-24 text-slate-900"
    >
      <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-36 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Skills & Expertise
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            The tools and strengths behind
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}my frontend work
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            I focus on building modern interfaces that combine clean code, strong visual design,
            responsive layouts, and polished interactions. My skills are centered on practical
            frontend development and creating products that feel professional.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, items, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(239,246,255,0.68))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(239,246,255,0.7))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-2xl sm:p-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">
                What I bring to a project
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Beyond individual tools, I bring structure, attention to detail, and a strong focus
                on creating frontend products that feel complete. I care about both how the code is written
                and how the final user experience feels.
              </p>
            </div>

            <div className="grid gap-3">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-blue-100/80 bg-white/80 px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <p className="text-sm leading-6 text-slate-600 sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}