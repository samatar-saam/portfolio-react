import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  Clock,
  Globe,
  Coffee,
  Heart,
} from "lucide-react";

function FloatingBackground() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-4rem] top-36 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />
    </>
  );
}

function ContactInfoCard({ icon: Icon, title, value, description, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md transition-all duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mb-1 text-xl font-semibold text-blue-600">{value}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </motion.div>
  );
}

function FormInput({ label, name, type = "text", value, onChange, error, required, icon: Icon }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <Icon className="h-5 w-5 text-slate-400" />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border ${
            error ? "border-red-500" : "border-blue-200/70"
          } bg-white/80 py-3 ${Icon ? "pl-10" : "pl-4"} pr-4 text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 backdrop-blur-xl transition-all`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      </div>
      {error && (
        <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3 w-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function FormTextarea({ label, name, value, onChange, error, required, icon: Icon }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute left-3 top-3">
            <Icon className="h-5 w-5 text-slate-400" />
          </div>
        )}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className={`w-full rounded-xl border ${
            error ? "border-red-500" : "border-blue-200/70"
          } bg-white/80 py-3 ${Icon ? "pl-10" : "pl-4"} pr-4 text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 backdrop-blur-xl transition-all`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      </div>
      {error && (
        <div className="mt-1 flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3 w-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function AvailabilityCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const availabilitySlots = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", icon: Clock },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", icon: Clock },
    { day: "Sunday", hours: "Closed", icon: Coffee },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <Clock className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Availability</h3>
      </div>
      <div className="space-y-3">
        {availabilitySlots.map((slot) => (
          <div key={slot.day} className="flex items-center justify-between border-b border-blue-100 pb-2 last:border-0">
            <div className="flex items-center gap-2">
              <slot.icon className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">{slot.day}</span>
            </div>
            <span className="text-sm text-slate-600">{slot.hours}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-blue-50 p-3 text-center">
        <p className="text-sm text-blue-700">
          ⚡ Typically responds within 24 hours
        </p>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Success
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
            <Mail className="h-4 w-4" />
            Get in Touch
          </motion.div>

          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let's
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Connect
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ContactInfoCard
            icon={Mail}
            title="Email"
            value="samatar@example.com"
            description="Send me an email anytime"
            delay={0}
          />
          <ContactInfoCard
            icon={Phone}
            title="Phone"
            value="+1 (555) 123-4567"
            description="Mon-Fri, 9am-6pm EST"
            delay={0.1}
          />
          <ContactInfoCard
            icon={MapPin}
            title="Location"
            value="San Francisco, CA"
            description="Available for remote work worldwide"
            delay={0.2}
          />
        </div>

        {/* Form and Availability */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Send className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                <p className="text-sm text-slate-600">I'll get back to you within 24 hours</p>
              </div>
            </div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-green-700"
              >
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm">Message sent successfully! I'll respond soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                icon={User}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                icon={Mail}
              />
              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
                icon={MessageSquare}
              />
              <FormTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                icon={MessageSquare}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Availability & Quick Response */}
          <div className="space-y-6">
            <AvailabilityCard />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Why Work With Me?</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-sm text-slate-600">Fast response time (within 24 hours)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-sm text-slate-600">Clear communication and regular updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-sm text-slate-600">100% client satisfaction guarantee</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <p className="text-sm text-slate-600">Flexible scheduling and timezone friendly</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-2xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Schedule a Call</h3>
                  <p className="text-sm text-slate-600">Prefer to talk directly?</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-xl border-2 border-blue-500 bg-white/80 px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">
                Book a Meeting
              </button>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-blue-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl sm:p-12"
        >
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">What types of projects do you work on?</h3>
              <p className="text-sm text-slate-600">I specialize in frontend development, React applications, responsive websites, and interactive web experiences.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">What's your typical response time?</h3>
              <p className="text-sm text-slate-600">I usually respond within 24 hours during business days. For urgent matters, feel free to call.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">Do you work remotely?</h3>
              <p className="text-sm text-slate-600">Yes, I work remotely and am available for clients worldwide. I'm flexible with time zones.</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-slate-900">What's your availability?</h3>
              <p className="text-sm text-slate-600">I'm currently available for new projects. Check my availability calendar or send me a message to discuss.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}