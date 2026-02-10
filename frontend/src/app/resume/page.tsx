"use client";

import Image from "next/image";
import { profile } from "@/data/profile";

export default function ResumePage() {
    return (
        <div className="min-h-screen pt-24 pb-16 section-padding relative">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Top action bar */}
                <div className="flex items-center justify-between mb-8 print:hidden">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </a>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                    </button>
                </div>

                {/* Resume card */}
                <div className="glass-card p-8 sm:p-12">
                    {/* ───── Header ───── */}
                    <header className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-border">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 glow-ring flex-shrink-0">
                            <Image
                                src={profile.image}
                                alt={profile.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl font-bold gradient-text mb-1">
                                {profile.name}
                            </h1>
                            <p className="text-secondary font-medium text-lg mb-3">
                                {profile.role}
                            </p>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm">
                                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    {profile.contact.email}
                                </a>
                                <span className="text-border">|</span>
                                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn
                                </a>
                                <span className="text-border">|</span>
                                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                    GitHub
                                </a>
                                <span className="text-border">|</span>
                                <span className="text-text-secondary">📍 Karachi, Pakistan</span>
                            </div>
                        </div>
                    </header>

                    {/* ───── Summary ───── */}
                    <section className="py-8 border-b border-border">
                        <h2 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">📋</span>
                            Professional Summary
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                            {profile.summary}
                        </p>
                    </section>

                    {/* ───── Education ───── */}
                    <section className="py-8 border-b border-border">
                        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">🎓</span>
                            Education
                        </h2>
                        <div className="space-y-4">
                            {profile.education.map((edu, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 p-4 rounded-xl bg-surface border border-border/50 hover:border-primary/20 transition-colors">
                                    <div>
                                        <h3 className="font-semibold text-text-primary text-sm">
                                            {edu.degree}
                                        </h3>
                                        {edu.institution && (
                                            <p className="text-text-secondary text-sm">{edu.institution}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {edu.cgpa && (
                                            <span className="tag-pill">CGPA: {edu.cgpa}</span>
                                        )}
                                        <span className="text-text-secondary text-sm">{edu.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ───── Skills ───── */}
                    <section className="py-8 border-b border-border">
                        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">💻</span>
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Programming & Data", items: profile.skills.programming },
                                { label: "Databases", items: profile.skills.databases },
                                { label: "Frameworks", items: profile.skills.frameworks },
                                { label: "AI / ML", items: profile.skills.aiml },
                                { label: "Engineering", items: profile.skills.engineering },
                                { label: "Tools", items: profile.skills.tools },
                            ].map((cat) => (
                                <div key={cat.label} className="p-4 rounded-xl bg-surface border border-border/50">
                                    <h3 className="text-sm font-semibold text-secondary mb-2">
                                        {cat.label}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.items.map((item) => (
                                            <span key={item} className="tag-pill text-xs">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ───── Projects ───── */}
                    <section className="py-8 border-b border-border">
                        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">🚀</span>
                            Projects
                        </h2>
                        <div className="space-y-4">
                            {profile.projects.map((project) => (
                                <div key={project.title} className="p-4 rounded-xl bg-surface border border-border/50 hover:border-primary/20 transition-colors group">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-text-primary text-sm group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm mt-1">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="tag-pill text-xs">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-secondary hover:text-primary transition-colors flex-shrink-0 mt-1"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ───── Learning ───── */}
                    <section className="py-8 border-b border-border">
                        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">📚</span>
                            Learning & Development
                        </h2>
                        <ul className="space-y-2">
                            {profile.learning2025.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                                    <span className="text-secondary mt-0.5 flex-shrink-0">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* ───── Traits ───── */}
                    <section className="pt-8">
                        <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary text-sm">⭐</span>
                            Core Strengths
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {profile.traits.map((trait) => (
                                <span
                                    key={trait}
                                    className="px-4 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-medium"
                                >
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* ATS-friendly print styles — clean 2-page resume PDF */}
            <style jsx global>{`
        @media print {
          /* ── Page setup ── */
          @page { margin: 0.55in 0.6in; size: letter; }

          /* ── Hide non-resume elements ── */
          nav, footer, .print\\:hidden,
          .blur-3xl, .glow-ring::after,
          [class*="absolute"][class*="pointer-events-none"] { display: none !important; }

          /* ── Reset body ── */
          html, body {
            background: white !important;
            color: #111 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 10.5pt !important;
            line-height: 1.4 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* ── Remove dark theme container styles ── */
          .min-h-screen { min-height: auto !important; padding: 0 !important; background: white !important; }
          .section-padding { padding: 0 !important; }
          .max-w-4xl { max-width: 100% !important; }

          /* ── Glassmorphic card → clean white ── */
          .glass-card {
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            padding: 0 !important;
            box-shadow: none !important;
          }

          /* ── Header section ── */
          header {
            border-bottom: 2px solid #111 !important;
            padding-bottom: 8pt !important;
            margin-bottom: 6pt !important;
          }

          /* ── Profile image — hide for ATS ── */
          header .rounded-full.overflow-hidden,
          header .glow-ring { display: none !important; }

          /* ── Name ── */
          .gradient-text {
            background: none !important;
            -webkit-background-clip: unset !important;
            background-clip: unset !important;
            -webkit-text-fill-color: #111 !important;
            color: #111 !important;
            font-size: 18pt !important;
            font-weight: 700 !important;
          }

          /* ── Role subtitle ── */
          .text-secondary.font-medium.text-lg {
            color: #333 !important;
            font-size: 11pt !important;
            margin-bottom: 4pt !important;
          }

          /* ── Contact links row ── */
          header .flex.flex-wrap {
            gap: 6pt !important;
            font-size: 9pt !important;
          }
          header .flex.flex-wrap a,
          header .flex.flex-wrap span {
            color: #333 !important;
            text-decoration: none !important;
          }
          header .flex.flex-wrap svg { display: none !important; }
          header .text-border { color: #999 !important; }

          /* ── Section headings ── */
          section h2 {
            font-size: 11.5pt !important;
            font-weight: 700 !important;
            color: #111 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5pt !important;
            border-bottom: 1px solid #ccc !important;
            padding-bottom: 3pt !important;
            margin-bottom: 6pt !important;
          }

          /* ── Hide emoji icons in headings ── */
          section h2 > span:first-child {
            display: none !important;
          }

          /* ── Section spacing ── */
          section {
            padding-top: 8pt !important;
            padding-bottom: 8pt !important;
            border-bottom: none !important;
          }

          /* ── All text colors ── */
          .text-text-primary, h3, [class*="font-semibold"] { color: #111 !important; }
          .text-text-secondary, p, li, .text-secondary { color: #333 !important; }
          .leading-relaxed { line-height: 1.35 !important; }

          /* ── Tag pills → inline text for ATS ── */
          .tag-pill {
            background: #f3f3f3 !important;
            color: #222 !important;
            border: 1px solid #ddd !important;
            font-size: 8.5pt !important;
            padding: 1pt 5pt !important;
            border-radius: 3pt !important;
          }

          /* ── Education / inner cards ── */
          .rounded-xl.bg-surface,
          [class*="rounded-xl"][class*="bg-surface"] {
            background: transparent !important;
            border: none !important;
            border-bottom: 1px solid #eee !important;
            border-radius: 0 !important;
            padding: 4pt 0 !important;
          }

          /* ── Skills grid ── */
          .grid.grid-cols-1.sm\\:grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
            gap: 6pt !important;
          }
          .grid .rounded-xl {
            padding: 4pt 0 !important;
          }
          .grid h3 { color: #111 !important; font-weight: 700 !important; font-size: 9.5pt !important; }

          /* ── Projects — compact single-line ── */
          .space-y-4 > div { margin-bottom: 4pt !important; padding: 3pt 0 !important; }
          .space-y-4 h3 { font-size: 10pt !important; }
          .space-y-4 p { font-size: 9pt !important; margin-top: 1pt !important; }
          .space-y-4 .flex.flex-wrap { margin-top: 2pt !important; }

          /* ── Hide GitHub SVG icons in projects ── */
          .space-y-4 a svg,
          .flex-shrink-0.mt-1 { display: none !important; }

          /* ── Learning bullet list ── */
          .space-y-2 li {
            font-size: 9.5pt !important;
            margin-bottom: 1pt !important;
          }
          .space-y-2 .text-secondary.mt-0\\.5 { color: #111 !important; }

          /* ── Traits — inline comma style ── */
          .flex.flex-wrap.gap-3 span {
            border: none !important;
            padding: 0 !important;
            color: #333 !important;
            font-size: 9.5pt !important;
          }
          .flex.flex-wrap.gap-3 span::after { content: "  •  "; color: #999; }
          .flex.flex-wrap.gap-3 span:last-child::after { content: ""; }

          /* ── Page break control ── */
          section { page-break-inside: avoid; break-inside: avoid; }
          /* Force page break before Projects to land on page 2 */
          section:has(> h2 > span:first-child) { page-break-inside: auto; }

          /* ── Remove all link underlines ── */
          a { color: #333 !important; text-decoration: none !important; }

          /* ── Remove box shadows ── */
          * { box-shadow: none !important; }
        }
      `}</style>
        </div>
    );
}
