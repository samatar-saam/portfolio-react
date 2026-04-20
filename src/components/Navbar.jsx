import { useEffect, useState } from "react";
import { Menu, ArrowUpRight, Sparkles, Download, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ElectricBorder from "./ElectricBorder";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const useScrollSpy = (offsets = [100]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + (offsets[0] || 100);

      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= scrollPosition
        ) {
          current = navLinks[i].href;
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsets]);

  return activeId;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeLink = useScrollSpy([80]);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      window.history.pushState(null, "", href);
    }
  };

  // Robust resume handler with fallback and download option
  const handleResumeClick = async (forceDownload = false) => {
    const resumeUrl = "/resume.pdf";
    try {
      // Check if file exists
      const response = await fetch(resumeUrl, { method: "HEAD" });
      if (!response.ok) throw new Error("Resume not found");

      if (forceDownload) {
        // Force download
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Samatar_Mohamed_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Open in new tab
        window.open(resumeUrl, "_blank");
      }
    } catch (error) {
      console.error("Resume error:", error);
      alert("Resume not available yet. Please check back later or contact me directly.");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes floatOne {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(8px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        @keyframes floatTwo {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(12px) translateX(-10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }

        @keyframes floatThree {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes floatFour {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(15px) translateY(-5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }

        @keyframes borderGlow {
          0% { opacity: 0.35; border-color: rgba(59, 130, 246, 0.2); }
          50% { opacity: 0.9; border-color: rgba(59, 130, 246, 0.55); }
          100% { opacity: 0.35; border-color: rgba(59, 130, 246, 0.2); }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        } ${darkMode ? "dark" : ""}`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Floating blobs */}
            <div
              className="pointer-events-none absolute -left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-blue-200/25 blur-3xl dark:bg-blue-900/20"
              style={{ animation: "floatOne 6s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-8 top-0 h-20 w-20 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-900/20"
              style={{ animation: "floatTwo 7s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-8 left-1/3 h-16 w-16 rounded-full bg-cyan-100/30 blur-2xl dark:bg-cyan-900/20"
              style={{ animation: "floatThree 8s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-1/3 right-12 h-12 w-12 rounded-full bg-blue-300/20 blur-xl dark:bg-blue-900/20"
              style={{ animation: "floatFour 9s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/10 to-indigo-200/10 blur-3xl dark:from-blue-900/10 dark:to-indigo-900/10"
              style={{ animation: "floatOne 10s ease-in-out infinite" }}
              aria-hidden="true"
            />

            <ElectricBorder
              color={darkMode ? "#94a3b8" : "#3b82f6"}
              thickness={2}
              chaos={0.12}
              speed={1}
              style={{ borderRadius: "1rem" }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5 pointer-events-auto ${
                  scrolled
                    ? darkMode
                      ? "bg-gradient-to-br from-slate-800/95 to-slate-900/95 shadow-[0_12px_38px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                      : "bg-[linear-gradient(135deg,rgba(239,246,255,0.82),rgba(255,255,255,0.55),rgba(219,234,254,0.75))] shadow-[0_12px_38px_rgba(59,130,246,0.12)] backdrop-blur-xl"
                    : darkMode
                    ? "bg-gradient-to-br from-slate-800/85 to-slate-900/85 backdrop-blur-lg"
                    : "bg-[linear-gradient(135deg,rgba(239,246,255,0.58),rgba(255,255,255,0.28),rgba(219,234,254,0.52))] backdrop-blur-lg"
                }`}
              >
                <div className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.05),transparent_55%)]" : "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_55%)]"}`} />
                <div className={`absolute inset-0 ${darkMode ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.03),transparent,rgba(148,163,184,0.03))]" : "bg-[linear-gradient(to_right,rgba(59,130,246,0.06),transparent,rgba(99,102,241,0.06))]"}`} />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
                  style={{
                    boxShadow: darkMode ? "0 0 20px rgba(148,163,184,0.18)" : "0 0 20px rgba(59,130,246,0.18)",
                    animation: "borderGlow 3s infinite",
                  }}
                />

                <div className="relative flex items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="group flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Home"
                  >
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-500 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                      <span className="text-lg font-bold tracking-wide">SM</span>
                    </div>

                    <div className="leading-tight">
                      <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Samatar <span className="text-blue-600 dark:text-blue-400">Mohamed</span>
                      </h1>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Software Engineer
                      </p>
                    </div>
                  </a>

                  <div className="hidden lg:flex items-center gap-2">
                    <NavigationMenu>
                      <NavigationMenuList className="gap-1">
                        {navLinks.map((link) => (
                          <NavigationMenuItem key={link.name}>
                            <NavigationMenuLink
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                                activeLink === link.href
                                  ? "bg-blue-100/90 text-blue-700 dark:bg-slate-700/80 dark:text-slate-200"
                                  : "text-slate-600 hover:text-blue-700 hover:bg-white/40 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800/40"
                              }`}
                            >
                              {link.name}
                              {activeLink === link.href && (
                                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-slate-400" />
                              )}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>

                    <div className="ml-4 flex items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={toggleDarkMode}
                        className="rounded-full border-blue-200/80 bg-white/35 text-slate-700 hover:bg-white/55 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800/35 dark:text-slate-300 dark:hover:bg-slate-800/55 dark:hover:border-slate-600"
                      >
                        {darkMode ? (
                          <>
                            <Sun className="h-4 w-4 mr-2" />
                            Light
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4 mr-2" />
                            Dark
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        className="rounded-full border-blue-200/80 bg-white/35 text-slate-700 hover:bg-white/55 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800/35 dark:text-slate-300 dark:hover:bg-slate-800/55 dark:hover:border-slate-600"
                        onClick={() => handleResumeClick(false)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Resume
                      </Button>

                      <Button
                        className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 dark:from-slate-600 dark:to-slate-700"
                        onClick={(e) => handleNavClick(e, "#contact")}
                      >
                        Let’s Talk
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden h-10 w-10 rounded-lg border border-blue-100/80 bg-white/40 text-blue-600 hover:bg-white/60 dark:border-slate-700 dark:bg-slate-800/40 dark:text-blue-400 dark:hover:bg-slate-800/60"
                      >
                        <Menu size={20} />
                      </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[300px] sm:w-[400px] dark:bg-slate-900 dark:border-slate-700">
                      <SheetHeader>
                        <SheetTitle className="text-left dark:text-white">Menu</SheetTitle>
                      </SheetHeader>

                      <div className="mt-6 flex flex-col gap-4">
                        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:from-slate-800 dark:to-slate-700">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white dark:from-slate-600 dark:to-slate-700">
                              <Sparkles className="h-5 w-5" />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                Samatar Mohamed
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                Software Engineer
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          {navLinks.map((link) => (
                            <SheetClose key={link.name} asChild>
                              <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                                  activeLink === link.href
                                    ? "bg-blue-50 text-blue-700 dark:bg-slate-800 dark:text-slate-200"
                                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                                }`}
                              >
                                {link.name}
                              </a>
                            </SheetClose>
                          ))}
                        </div>

                        <div className="mt-4 space-y-2">
                          <Button
                            variant="outline"
                            onClick={toggleDarkMode}
                            className="w-full justify-center rounded-xl border-blue-200 bg-white text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                          >
                            {darkMode ? (
                              <>
                                <Sun className="mr-2 h-4 w-4" />
                                Light Mode
                              </>
                            ) : (
                              <>
                                <Moon className="mr-2 h-4 w-4" />
                                Dark Mode
                              </>
                            )}
                          </Button>

                          <SheetClose asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-center rounded-xl border-blue-200 bg-white text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                              onClick={() => handleResumeClick(false)}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download Resume
                            </Button>
                          </SheetClose>

                          <SheetClose asChild>
                            <Button
                              className="w-full justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white dark:from-slate-600 dark:to-slate-700"
                              onClick={(e) => handleNavClick(e, "#ContactPage")}
                            >
                              Let’s Talk
                              <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                          </SheetClose>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </nav>

      <div className="h-0" />
    </>
  );
}