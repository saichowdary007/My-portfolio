"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#projects") {
    const projectsSection = document.querySelector('#projects');
    const educationSection = document.querySelector('#education');
    projectsSection?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      educationSection?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  } else {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 duration-200 group ${isScrolled ? "bg-background/80 backdrop-blur" : ""}`}>
      <div className="mx-auto w-full px-6 xl:max-w-7xl relative">
        <nav className="flex items-center justify-center gap-4 duration-200 py-4 lg:h-20 max-w-7xl mx-auto w-full">
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg lg:hidden border-t">
              <ul className="flex flex-col items-center py-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        scrollToSection(e, link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-full text-center"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
