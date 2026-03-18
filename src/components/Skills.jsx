"use client";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const categories = [
    {
        title: "Graphic Design",
        skills: [
            { name: "Photoshop", icon: "🎨" },
            { name: "Illustrator", icon: "✏️" },
            { name: "Canva", icon: "🖼️" },
            { name: "Figma", icon: "🎯" },
        ],
    },
    {
        title: "Video Editing & Motion",
        skills: [
            { name: "Premiere Pro", icon: "🎬" },
            { name: "After Effects", icon: "✨" },
            { name: "DaVinci Resolve", icon: "🎥" },
            { name: "CapCut", icon: "📱" },
        ],
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML", icon: "🌐" },
            { name: "CSS", icon: "🎨" },
            { name: "JavaScript", icon: "⚡" },
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "Webflow", icon: "🌊" },
            { name: "WordPress", icon: "📝" },
            { name: "Framer", icon: "🔲" },
        ],
    },
];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                <motion.span className="section__label" variants={fadeUp}>Skills</motion.span>
                <motion.h2 className="section__title" variants={fadeUp}>
                    Tools &amp; Technologies
                </motion.h2>

                <div className="skills__categories">
                    {categories.map((cat) => (
                        <motion.div key={cat.title} variants={fadeUp}>
                            <h3 className="skills__category-title">{cat.title}</h3>
                            <div className="skills__grid">
                                {cat.skills.map((skill, i) => (
                                    <motion.div
                                        className="skill-card"
                                        key={skill.name}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <span className="skill-card__icon">{skill.icon}</span>
                                        <span className="skill-card__name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
