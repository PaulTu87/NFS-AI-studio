import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(13, 31, 45, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,188,212,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" className="h-14 w-14 rounded-full object-cover border-2 border-cyan-400" alt="NFS Studio" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              style={{ "--hover-color": "#00bcd4" }}
              onMouseEnter={(e) => (e.target.style.color = "#00bcd4")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-cyan text-sm px-5 py-2.5">
            Book Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3"
          style={{ background: "rgba(13,31,45,0.98)", border: "1px solid rgba(0,188,212,0.2)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
              style={{ color: "" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-cyan text-sm text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
