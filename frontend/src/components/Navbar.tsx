"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-bg-darker/80 backdrop-blur-xl border-b border-border shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold gradient-text">
                    {profile.name.split(" ")[0]}
                    <span className="text-text-secondary font-light">.dev</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-200 ${activeSection === link.href.slice(1)
                                ? "text-primary"
                                : "text-text-secondary hover:text-text-primary"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-200"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 border-b border-border" : "max-h-0"
                    } bg-bg-darker/95 backdrop-blur-xl`}
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                                ? "text-primary"
                                : "text-text-secondary"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 w-fit"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}
