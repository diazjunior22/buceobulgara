"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Experiencias", href: "#experiencias" },
  { name: "Cursos", href: "#cursos" },
  { name: "Galería", href: "#galeria" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isScrolled
          ? "bg-bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Buceo Hurgada"
            width={323}
            height={414}
            priority
            className="w-auto h-9 md:h-10 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-text-dark" : "text-bg-white/90 hover:text-bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contacto"
            className={`btn-press px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl ${
              isScrolled
                ? "bg-primary text-bg-white hover:bg-blue-700"
                : "bg-bg-white text-primary hover:bg-bg-light"
            }`}
          >
            Reservar Ahora
          </Link>
        </nav>

        {/* Mobile Reservar CTA */}
        <Link
          href="#contacto"
          className={`md:hidden btn-press px-4 py-1.5 rounded-full font-semibold text-xs transition-all shadow-md ${
            isScrolled
              ? "bg-primary text-bg-white hover:bg-blue-700"
              : "bg-white/20 backdrop-blur-sm text-bg-white hover:bg-white/30"
          }`}
        >
          Reservar
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 btn-press ${isScrolled ? "text-text-dark" : "text-bg-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] as any }}
            className="origin-top md:hidden bg-bg-white shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-dark font-medium py-2 px-4 rounded-lg hover:bg-bg-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="#contacto"
                  className="btn-press flex justify-center w-full bg-primary text-bg-white py-3 rounded-xl font-semibold shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reservar Ahora
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

