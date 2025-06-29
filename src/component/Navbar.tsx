import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    const btn = document.getElementById(`nav-${id}`);
    if (btn && bubbleRef.current && menuRef.current) {
      const btnRect = btn.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      bubbleRef.current.style.left = `${btnRect.left - menuRect.left}px`;
      bubbleRef.current.style.width = `${btnRect.width}px`;
    }

    // Close mobile menu after click
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    scrollToSection(activeSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-4 flex justify-between items-center bg-gradient-to-r from-[#66b2b2] via-white to-[#66b2b2] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg font-bold text-sm text-black transition-all duration-300 ${
            isDark ? "bg-yellow-500" : "bg-white"
          }`}
        >
          HS
        </div>
        <h1 className="text-lg font-semibold text-black dark:text-white">
          Heena Shaikh
        </h1>
      </div>

      {/* Desktop Menu */}
      <div
        ref={menuRef}
        className="hidden md:flex relative bg-white dark:bg-slate-700 shadow-md rounded-full px-4 py-2 space-x-4 items-center"
      >
        <div
          ref={bubbleRef}
          className="absolute top-0 left-0 h-full bg-[#008080] dark:bg-yellow-500 rounded-full transition-all duration-300 z-0"
          style={{ width: 0 }}
        ></div>

        {["home", "about", "projects", "experience", "skills", "contact"].map(
          (item) => (
            <button
              key={item}
              id={`nav-${item}`}
              onClick={() => scrollToSection(item)}
              className={`relative z-10 px-4 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeSection === item
                  ? "text-white"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Icons & Hamburger */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Social Icons */}
        <a
          href="https://github.com/heena2004shaikh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://linkedin.com/in/heena-shaikh-556731353/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform" />
        </a>
        <a
          href="mailto:heena2004shaikh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-5 h-5 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform" />
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 px-4 pt-4 pb-6 shadow-md md:hidden z-40 space-y-3">
          {["home", "about", "projects", "experience", "skills", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === item
                    ? "bg-[#008080] text-white"
                    : "text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
