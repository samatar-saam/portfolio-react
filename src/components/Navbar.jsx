import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Animations (same as before) */}
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
          0% { opacity: 0.4; border-color: rgba(16, 185, 129, 0.3); }
          50% { opacity: 1; border-color: rgba(16, 185, 129, 0.8); }
          100% { opacity: 0.4; border-color: rgba(16, 185, 129, 0.3); }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Floating decorative elements */}
            <div
              className="pointer-events-none absolute -left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl"
              style={{ animation: "floatOne 6s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-8 top-0 h-20 w-20 rounded-full bg-green-300/20 blur-3xl"
              style={{ animation: "floatTwo 7s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-8 left-1/3 h-16 w-16 rounded-full bg-emerald-300/20 blur-2xl"
              style={{ animation: "floatThree 8s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute top-1/3 right-12 h-12 w-12 rounded-full bg-teal-300/20 blur-xl"
              style={{ animation: "floatFour 9s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-200/10 to-green-200/10 blur-3xl"
              style={{ animation: "floatOne 10s ease-in-out infinite" }}
              aria-hidden="true"
            />

            {/* Main navbar container */}
            <div
              className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl ${
                scrolled
                  ? "border-white/30 bg-white/80 shadow-lg backdrop-blur-xl"
                  : "border-white/40 bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/40 via-transparent to-green-50/40" />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
                style={{ boxShadow: "0 0 20px rgba(16,185,129,0.3)", animation: "borderGlow 3s infinite" }}
              />

              <div className="relative flex items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
                {/* Logo / Brand */}
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
                  aria-label="Home"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <span className="text-lg font-bold tracking-wide">SM</span>
                  </div>
                  <div className="leading-tight">
                    <h1 className="text-lg font-bold tracking-tight text-slate-900">
                      Samatar <span className="text-emerald-600">Mohamed</span>
                    </h1>
                    <p className="text-xs font-medium text-slate-500">Software Engineer</p>
                  </div>
                </a>

                {/* Desktop Navigation using shadcn NavigationMenu */}
                <div className="hidden lg:flex items-center gap-2">
                  <NavigationMenu>
                    <NavigationMenuList className="gap-1">
                      {navLinks.map((link) => (
                        <NavigationMenuItem key={link.name}>
                          <NavigationMenuLink
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                              activeLink === link.href
                                ? "bg-emerald-100 text-emerald-700"
                                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                            }`}
                          >
                            {link.name}
                            {activeLink === link.href && (
                              <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-emerald-500" />
                            )}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>

                  <div className="flex items-center gap-3 ml-4">
                    <Button
                      variant="outline"
                      className="rounded-full border-emerald-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300"
                      onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </Button>
                    <Button
                      className="rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                      onClick={(e) => handleNavClick(e, "#contact")}
                    >
                      Let’s Talk
                      <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>

                {/* Mobile menu button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden h-10 w-10 rounded-lg border border-emerald-100 bg-white/80 text-emerald-600 hover:bg-emerald-50"
                    >
                      <Menu size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="text-left">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 flex flex-col gap-4">
                      <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 text-white">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">Samatar Mohamed</p>
                            <p className="text-xs text-slate-500">Software Engineer</p>
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
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                              }`}
                            >
                              {link.name}
                            </a>
                          </SheetClose>
                        ))}
                      </div>

                      <div className="mt-4 space-y-2">
                        <SheetClose asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-center rounded-xl border-emerald-200 bg-white text-slate-700 hover:bg-emerald-50"
                            onClick={() => window.open("/resume.pdf", "_blank")}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Resume
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button
                            className="w-full justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                            onClick={(e) => handleNavClick(e, "#contact")}
                          >
                            Let’s Talk
                            <ArrowUpRight className="h-4 w-4 ml-2" />
                          </Button>
                        </SheetClose>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </>
  );
}