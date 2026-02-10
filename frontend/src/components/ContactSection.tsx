"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("http://localhost:8000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="section-padding relative">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
                        Let&apos;s connect
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
                        Contact Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact info */}
                    <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-6">
                            Get in touch
                        </h3>
                        <p className="text-text-secondary mb-8 leading-relaxed">
                            I&apos;m always open to discussing new opportunities, interesting
                            projects, or just having a conversation about AI and technology.
                        </p>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${profile.contact.email}`}
                                className="flex items-center gap-4 glass-card p-4 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-xs uppercase tracking-wider">
                                        Email
                                    </p>
                                    <p className="text-text-primary text-sm font-medium">
                                        {profile.contact.email}
                                    </p>
                                </div>
                            </a>

                            <a
                                href={profile.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-card p-4 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-xs uppercase tracking-wider">
                                        LinkedIn
                                    </p>
                                    <p className="text-text-primary text-sm font-medium">
                                        Faiz Ur Rehman Ashrafi
                                    </p>
                                </div>
                            </a>

                            <a
                                href={profile.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-card p-4 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-xs uppercase tracking-wider">
                                        GitHub
                                    </p>
                                    <p className="text-text-primary text-sm font-medium">
                                        faiz0304
                                    </p>
                                </div>
                            </a>

                            <a
                                href={profile.contact.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-card p-4 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-xs uppercase tracking-wider">
                                        YouTube
                                    </p>
                                    <p className="text-text-primary text-sm font-medium">
                                        Faiz Codes AI
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="block text-text-secondary text-sm mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="contact-email"
                                className="block text-text-secondary text-sm mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="contact-message"
                                className="block text-text-secondary text-sm mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                                placeholder="What would you like to discuss?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "idle" && "Send Message"}
                            {status === "sending" && "Sending..."}
                            {status === "sent" && "✓ Message Sent!"}
                            {status === "error" && "Failed — Try Again"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
