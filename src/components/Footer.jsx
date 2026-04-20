import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Clock, Heart, Sparkles } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "React Applications",
  "Responsive Design",
  "UI/UX Implementation",
  "Performance Optimization",
  "Code Reviews",
];

const contactInfo = [
  { icon: Mail, text: "samatar578@example.com", href: "mailto:samatar@example.com" },
  { icon: Phone, text: "+254 727568271", href: "" },
  { icon: MapPin, text: "Kenya, Garissa", href: "#" },
  { icon: Clock, text: "Mon-Fri, 9am-6pm EST", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-blue-50/40 text-slate-900">
      {/* Floating Background Elements */}
      <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] bottom-20 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Samatar <span className="text-blue-600">Mohamed</span>
                </h2>
                <p className="text-xs text-slate-500">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Building exceptional digital experiences with clean code, 
              modern design, and attention to detail.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Heart className="h-4 w-4 text-blue-500" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    <span className="transition-transform group-hover:translate-x-1">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900">Get in Touch</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <info.icon className="h-4 w-4 flex-shrink-0 text-blue-500" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Section */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-slate-700">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-blue-200/70 bg-white/80 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 backdrop-blur-xl"
                />
                <button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">No spam, unsubscribe anytime.</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-slate-600 sm:text-left">
            © {currentYear} Samatar Mohamed. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-blue-600">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-blue-600">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-blue-600">
              Sitemap
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
}