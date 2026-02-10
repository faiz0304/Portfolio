import Image from "next/image";
import { profile } from "@/data/profile";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
                        Get to know me
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
                        About Me
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-border glow-ring">
                            <Image
                                src={profile.image}
                                alt={profile.name}
                                width={288}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            {profile.summary}
                        </p>

                        <p className="text-text-secondary leading-relaxed mb-8 italic border-l-2 border-primary/50 pl-4">
                            &ldquo;{profile.vision}&rdquo;
                        </p>

                        {/* Education */}
                        <h3 className="text-xl font-semibold mb-4 text-text-primary">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {profile.education.map((edu, i) => (
                                <div key={i} className="glass-card p-4 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <div>
                                            <h4 className="font-semibold text-text-primary">
                                                {edu.degree}
                                            </h4>
                                            {edu.institution && (
                                                <p className="text-text-secondary text-sm">
                                                    {edu.institution}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            {edu.cgpa && (
                                                <span className="tag-pill">CGPA: {edu.cgpa}</span>
                                            )}
                                            <span className="text-text-secondary">{edu.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Learning highlights */}
                        <h3 className="text-xl font-semibold mt-8 mb-4 text-text-primary">
                            Recent Learning
                        </h3>
                        <ul className="space-y-2">
                            {profile.learning2025.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-text-secondary text-sm"
                                >
                                    <span className="text-secondary mt-1 flex-shrink-0">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
