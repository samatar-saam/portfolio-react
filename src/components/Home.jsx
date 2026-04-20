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
import { useTheme } from "@/contexts/ThemeContext";

const trustItems = [
  "Modern UI Systems",
  "Clean Component Architecture",
  "Animated User Experiences",
  "Responsive Across Devices",
];

function FloatingBackground() {
  const { darkMode } = useTheme();
  
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-px bg-gradient-to-b from-transparent ${darkMode ? 'via-blue-400/20' : 'via-blue-400/40'} to-transparent`}
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

      <div className={`pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-300/20'} blur-3xl`} />
      <div className={`pointer-events-none absolute right-[-5rem] top-32 h-80 w-80 rounded-full ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-300/20'} blur-3xl`} />
      <div className={`pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full ${darkMode ? 'bg-cyan-900/20' : 'bg-cyan-200/20'} blur-3xl`} />
      <div className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,${darkMode ? 'rgba(59,130,246,0.08)' : 'rgba(59,130,246,0.14)'},transparent_35%)]`} />
      <div className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,${darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'},transparent,${darkMode ? 'rgba(59,130,246,0.03)' : 'rgba(59,130,246,0.05)'})]`} />
    </>
  );
}

export default function HomePage() {
  const { darkMode } = useTheme();

  return (
    <main
      id="home"
      className={`relative min-h-screen overflow-hidden ${darkMode ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-b from-blue-50 via-white to-indigo-50'} text-slate-900 dark:text-white`}
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

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-8 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-32">
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
            className={`mb-6 inline-flex items-center gap-2 rounded-full border ${darkMode ? 'border-blue-800/70 bg-slate-800/80 text-blue-400' : 'border-blue-200/70 bg-white/80 text-blue-700'} px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl`}
          >
            <Sparkles className="h-4 w-4" />
            Software Engineer • React Developer • UI Builder
          </motion.div>

          <h1 className={`text-3xl font-black leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'} sm:text-4xl lg:text-5xl`}>
            I build
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}senior-level digital products
            </span>
            <br />
            with code, motion, and visual precision.
          </h1>

          <p className={`mt-5 max-w-xl text-base leading-7 ${darkMode ? 'text-slate-300' : 'text-slate-600'} sm:text-lg`}>
            I create polished web experiences that feel premium, perform fast,
            and communicate clearly  combining React, Tailwind CSS, Framer Motion,
            and strong frontend architecture into products people remember.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className={`rounded-full border ${darkMode ? 'border-blue-800/70 bg-slate-800/80 text-slate-300' : 'border-blue-200/70 bg-white/80 text-slate-700'} px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-xl`}
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

            <button className={`rounded-full border ${darkMode ? 'border-blue-800 bg-slate-800/80 text-slate-300 hover:border-blue-700 hover:bg-slate-700' : 'border-blue-200 bg-white/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50'} px-6 py-3.5 text-sm font-semibold shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1`}>
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          {/* Simple Circle with Profile Image */}
          <div className="relative">
            {/* Animated outer ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute -inset-4 rounded-full ${darkMode ? 'bg-blue-500/20' : 'bg-blue-400/20'} blur-xl`}
            />
            
            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className={`absolute -inset-2 rounded-full border-2 border-dashed ${darkMode ? 'border-blue-500/50' : 'border-blue-400/60'}`}
            />
            
            {/* Main circle with image */}
            <div className={`relative h-[300px] w-[300px] rounded-full border-4 ${darkMode ? 'border-blue-500/30 bg-slate-800/50' : 'border-blue-500/20 bg-white/50'} shadow-2xl backdrop-blur-sm lg:h-[380px] lg:w-[380px]`}>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Samatar Mohamed"
                  className="h-full w-full object-cover scale-105"
                />
              </div>
              
              {/* Decorative elements around the circle */}
              <div className="absolute -right-8 top-1/4 rounded-2xl border bg-white/90 px-4 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/90">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Stack</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">React • Tailwind • JS</p>
              </div>
              
              <div className="absolute -left-8 bottom-1/4 rounded-2xl border bg-white/90 px-4 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/90">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Focus</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Frontend Systems</p>
              </div>
            </div>
            
            {/* Floating decorative circles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-0 rounded-2xl border bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/80"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Design</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Modern UI</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-0 rounded-2xl border bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/80"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Motion</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Framer</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}