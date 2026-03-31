import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  Eye,
  Star,
  GitFork,
  Calendar,
  CheckCircle2,
  X,
  Search,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    description: "An intelligent dashboard with real-time analytics, predictive insights, and interactive data visualizations.",
    fullDescription: "Built a comprehensive dashboard that processes real-time data streams and provides actionable insights using machine learning algorithms. Features include customizable widgets, dark mode, and responsive design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Node.js"],
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Customizable dashboard widgets",
      "Dark/light theme support",
      "Responsive design"
    ],
    demo: "https://demo.com",
    date: "2024",
    featured: true,
    stats: { views: "2.3k" }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with seamless checkout, product filtering, and payment integration.",
    fullDescription: "Developed a full-featured e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration. Optimized for performance and SEO.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    category: "Frontend",
    technologies: ["React", "Redux", "Tailwind CSS", "Stripe API", "Firebase"],
    features: [
      "Product catalog with filters",
      "Shopping cart functionality",
      "User authentication",
      "Payment integration",
      "Order tracking"
    ],
    demo: "https://demo.com",
    date: "2023",
    featured: true,
    stats: { views: "1.8k" }
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio with smooth animations, interactive elements, and modern design aesthetics.",
    fullDescription: "Designed and built a personal portfolio showcasing projects and skills with Framer Motion animations, responsive layout, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Frontend",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "React Router"],
    features: [
      "Smooth page transitions",
      "Interactive animations",
      "Responsive design",
      "Project filtering",
      "Contact form"
    ],
    demo: "https://demo.com",
    date: "2024",
    featured: true,
    stats: { views: "3.1k" }
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    fullDescription: "Built a Trello-like application for team collaboration with drag-and-drop functionality, real-time updates, and comprehensive task management features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    features: [
      "Drag-and-drop interface",
      "Real-time updates",
      "Team collaboration",
      "Task assignments",
      "Progress tracking"
    ],
    demo: "https://demo.com",
    date: "2023",
    featured: false,
    stats: { views: "1.2k" }
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Beautiful weather app with interactive maps, hourly forecasts, and location-based predictions.",
    fullDescription: "Created a weather application using OpenWeatherMap API with beautiful visualizations, 7-day forecasts, and location autocomplete features.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "Chart.js", "OpenWeather API"],
    features: [
      "Location-based weather",
      "Interactive weather maps",
      "7-day forecast",
      "Hourly predictions",
      "Weather alerts"
    ],
    demo: "https://demo.com",
    date: "2023",
    featured: false,
    stats: { views: "892" }
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with custom reports and engagement tracking.",
    fullDescription: "Developed a comprehensive analytics platform for tracking social media performance across multiple platforms with custom report generation and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Full Stack",
    technologies: ["React", "Python", "Django", "Chart.js", "PostgreSQL"],
    features: [
      "Multi-platform tracking",
      "Custom report generation",
      "Engagement metrics",
      "Audience insights",
      "Export capabilities"
    ],
    demo: "https://demo.com",
    date: "2024",
    featured: false,
    stats: { views: "1.1k" }
  }
];

const categories = ["All", "Frontend", "Full Stack"];

function FloatingBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-36 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />
    </>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-200/70 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {project.featured && (
          <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/90 p-2 text-slate-700">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar className="h-3 w-3" />
            {project.date}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
        <p className="mb-4 text-sm text-slate-600">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-blue-100 pt-4">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Eye className="h-3 w-3" />
              {project.stats.views}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 transition-colors hover:bg-red-500 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {project.category}
            </span>
          </div>

          <p className="mb-6 text-slate-600">{project.fullDescription}</p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">Key Features</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(p => p.featured);

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
            <Code2 className="h-4 w-4" />
            My Work
          </motion.div>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Featured
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            A collection of my best work showcasing modern frontend development,
            creative design solutions, and technical excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 text-center backdrop-blur-xl">
            <div className="mb-2 text-3xl font-bold text-blue-600">{projects.length}+</div>
            <div className="text-sm text-slate-600">Total Projects</div>
          </div>
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 text-center backdrop-blur-xl">
            <div className="mb-2 text-3xl font-bold text-blue-600">{featuredProjects.length}</div>
            <div className="text-sm text-slate-600">Featured Projects</div>
          </div>
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 text-center backdrop-blur-xl">
            <div className="mb-2 text-3xl font-bold text-blue-600">10+</div>
            <div className="text-sm text-slate-600">Technologies Used</div>
          </div>
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 text-center backdrop-blur-xl">
            <div className="mb-2 text-3xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-slate-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                    : "border border-blue-200/70 bg-white/80 text-slate-600 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border border-blue-200/70 bg-white/80 py-2 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 backdrop-blur-xl"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-200/70 bg-white/80 p-12 text-center backdrop-blur-xl">
            <Code2 className="mx-auto mb-4 h-12 w-12 text-slate-400" />
            <h3 className="mb-2 text-xl font-semibold text-slate-900">No projects found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 p-8 text-center text-white shadow-xl sm:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold">Have a Project in Mind?</h2>
          <p className="mb-6 text-lg opacity-90">
            Let's collaborate and bring your ideas to life with modern web technologies.
          </p>
          <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
}