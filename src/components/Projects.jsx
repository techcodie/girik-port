"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const categories = [
    {
        number: "01",
        title: "Graphic Design",
        desc: "Thumbnails, poster designs, infographics, and brand visuals crafted with precision and creativity.",
        href: "/projects/graphic-design",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #0a0a1a 100%)",
    },
    {
        number: "02",
        title: "Video Editing",
        desc: "Cinematic edits, motion graphics, and video content that captivates and tells compelling stories.",
        href: "/projects/video-editing",
        gradient: "linear-gradient(135deg, #1a2e1a 0%, #0a1a0a 100%)",
    },
    {
        number: "03",
        title: "Web Development",
        desc: "Responsive websites and web applications built with modern frameworks and clean architecture.",
        href: "/projects/web-development",
        gradient: "linear-gradient(135deg, #2e1a1a 0%, #1a0a0a 100%)",
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
                <motion.span className="section__label" variants={fadeUp}>Projects</motion.span>
                <motion.h2 className="section__title" variants={fadeUp}>
                    Selected Works
                </motion.h2>

                <motion.div className="projects__grid" variants={fadeUp}>
                    {categories.map((cat) => (
                        <Link href={cat.href} key={cat.number} style={{ textDecoration: "none", color: "inherit" }}>
                            <motion.div
                                className="project-category"
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: 220,
                                        background: cat.gradient,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "6rem",
                                            fontWeight: 800,
                                            color: "rgba(255,255,255,0.04)",
                                            letterSpacing: "-0.04em",
                                            userSelect: "none",
                                        }}
                                    >
                                        {cat.number}
                                    </span>
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "60%",
                                            background: "linear-gradient(to top, var(--bg-primary), transparent)",
                                        }}
                                    />
                                </div>

                                <div className="project-category__content">
                                    <span className="project-category__number">{cat.number}</span>
                                    <h3 className="project-category__title">{cat.title}</h3>
                                    <p className="project-category__desc">{cat.desc}</p>
                                    <span className="project-category__arrow">
                                        Explore
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
