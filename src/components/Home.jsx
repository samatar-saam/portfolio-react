import { motion } from "framer-motion";
import FloatingLines from "./FloatingLines";
import profileImage from "../assets/profileImage.jpg";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  Cpu,
  Layers3,
  Database
} from "lucide-react";

const orbitIcons = [
  { src: "https://cdn.simpleicons.org/react/61DAFB", label: "React" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", label: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/git/F05032", label: "Git" },
  { src: "https://cdn.simpleicons.org/github/111111", label: "GitHub" },
  { src: "https://cdn.simpleicons.org/javascript/F7DF1E", label: "JavaScript" },
  { src: "https://cdn.simpleicons.org/html5/E34F26", label: "HTML5" },
  { src: "https://cdn.simpleicons.org/css/1572B6", label: "CSS3" },
  { src: "https://cdn.simpleicons.org/framer/0055FF", label: "Framer Motion" },
];

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "20+", label: "Projects Crafted" },
  { value: "100%", label: "Responsive Focus" },
];

const trustItems = [
  "Modern UI Systems",
  "Clean Component Architecture",
  "Animated User Experiences",
  "Responsive Across Devices",
];

const miniCards = [
  {
    title: "UI Engineering",
    text: "Thoughtful interfaces with strong spacing, hierarchy, motion, and clarity.",
  },
  {
    title: "Frontend Systems",
    text: "Reusable React components, scalable structure, and polished interactions.",
  },
  {
    title: "Creative Execution",
    text: "Turning ideas into visually strong, real-world products that feel premium.",
  },
];

function FloatingBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
            style={{
              height: `${120 + i * 35}px`,
              left: `${6 + i * 12}%`,
              top: `${(i % 4) * 18}%`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),transparent,rgba(59,130,246,0.05))]" />
    </>
  );
}

function OrbitRing({ radius = 220, duration = 18, reverse = false, children }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="absolute left-1/2 top-1/2"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50 text-slate-900"
    >
      <FloatingBackground />

      <div className="absolute inset-0 z-0 opacity-70">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            Software Engineer • React Developer • UI Builder
          </motion.div>

          <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            I build
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}senior-level digital products
            </span>
            <br />
            with code, motion, and visual precision.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            I create polished web experiences that feel premium, perform fast,
            and communicate clearly — combining React, Tailwind CSS, Framer Motion,
            and strong frontend architecture into products people remember.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(59,130,246,0.38)]">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-blue-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50">
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative flex min-h-[520px] items-center justify-center pt-0 lg:-mt-6"
        >
          <div className="absolute h-[32rem] w-[32rem] rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute h-[26rem] w-[26rem] rounded-full border border-blue-200/40 bg-white/30 backdrop-blur-3xl" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="absolute h-[28rem] w-[28rem] rounded-full border border-dashed border-blue-200/70"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
            className="absolute h-[23rem] w-[23rem] rounded-full border border-dashed border-blue-100"
          />

          <OrbitRing radius={220} duration={20}>
            {orbitIcons.map(({ src, label }, i) => {
              const angle = (i / orbitIcons.length) * 2 * Math.PI;
              const x = 220 + 220 * Math.cos(angle) - 30;
              const y = 220 + 220 * Math.sin(angle) - 30;
              return (
                <div
                  key={label}
                  className="absolute"
                  style={{ left: x, top: y }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_14px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-white opacity-80" />
                    <img src={src} alt={label} className="relative z-10 h-7 w-7 object-contain" />
                    <div className="pointer-events-none absolute -bottom-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white shadow-lg group-hover:block">
                      {label}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </OrbitRing>

          <OrbitRing radius={170} duration={14} reverse>
            {[0, 1, 2, 3].map((item) => {
              const angle = (item / 4) * 2 * Math.PI;
              const x = 170 + 170 * Math.cos(angle) - 8;
              const y = 170 + 170 * Math.sin(angle) - 8;
              return (
                <motion.div
                  key={item}
                  className="absolute h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                  style={{ left: x, top: y }}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 2.4 + item, repeat: Infinity, ease: "easeInOut" }}
                />
              );
            })}
          </OrbitRing>

          <div className="group relative z-10 mt-10 flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,246,255,0.65))] shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:h-[24rem] lg:w-[24rem]">
            <div className="absolute inset-3 rounded-full border border-blue-100/80 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),rgba(255,255,255,0.75),rgba(255,255,255,0.95))]" />
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.2),transparent,rgba(99,102,241,0.18),transparent,rgba(6,182,212,0.2))] blur-xl opacity-70" />
            <div className="absolute inset-[18px] rounded-full border border-dashed border-blue-200/70" />
            <div className="relative z-10 h-[15rem] w-[15rem] overflow-hidden rounded-full border border-blue-100 bg-white/70 text-center shadow-inner backdrop-blur-xl lg:h-[18rem] lg:w-[18rem]">
              <img
                src={profileImage}
                alt="Samatar Mohamed"
                className="h-full w-full object-cover scale-105"
              />
            </div>

            <div className="absolute -right-4 top-10 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">Stack</p>
              <p className="mt-1 text-sm font-bold text-slate-900">React • Tailwind • JS</p>
            </div>

            <div className="absolute -left-5 bottom-14 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">Focus</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Frontend Systems</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-16 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Design</p>
            <p className="mt-1 text-sm font-bold text-slate-900">Modern UI Systems</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-14 left-0 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Frontend</p>
            <p className="mt-1 text-sm font-bold text-slate-900">React • Tailwind • Motion</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}