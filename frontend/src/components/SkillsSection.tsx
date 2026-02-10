import { profile } from "@/data/profile";

interface SkillCategoryProps {
    title: string;
    icon: string;
    items: string[];
}

function SkillCategory({ title, icon, items }: SkillCategoryProps) {
    return (
        <div className="glass-card p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                    <span key={skill} className="tag-pill">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const categories: SkillCategoryProps[] = [
        {
            title: "Programming & Data",
            icon: "💻",
            items: profile.skills.programming,
        },
        {
            title: "Databases",
            icon: "🗄️",
            items: profile.skills.databases,
        },
        {
            title: "Frameworks",
            icon: "⚙️",
            items: profile.skills.frameworks,
        },
        {
            title: "AI / ML Foundations",
            icon: "🧠",
            items: profile.skills.aiml,
        },
        {
            title: "System & Engineering",
            icon: "🔧",
            items: profile.skills.engineering,
        },
        {
            title: "Tools & Platforms",
            icon: "🛠️",
            items: profile.skills.tools,
        },
    ];

    return (
        <section id="skills" className="section-padding relative">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
                        What I work with
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
                        Skills & Technologies
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <SkillCategory key={cat.title} {...cat} />
                    ))}
                </div>

                {/* Personal traits */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-6 text-text-primary">
                        Core Traits
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {profile.traits.map((trait) => (
                            <span
                                key={trait}
                                className="px-5 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-medium hover:bg-secondary/10 transition-colors duration-200"
                            >
                                {trait}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
