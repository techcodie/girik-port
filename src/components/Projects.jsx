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
        desc: "Posters, brand identity, logos, infographics, and brand visuals crafted with precision and creativity.",
        href: "/projects/graphic-design",
        preview: "https://lh3.googleusercontent.com/d/1JvzP19EiWyu2BI5zgn5S7GToKigbtzff",
    },
    {
        number: "02",
        title: "Video Editing",
        desc: "Cinematic edits, motion graphics, and video content that captivates and tells compelling stories.",
        href: "/projects/video-editing",
        preview: "https://lh3.googleusercontent.com/d/1b8F005LaKnuzjtdKf5TA46_4mmEbI2WQ",
    },
    {
        number: "03",
        title: "Web Development",
        desc: "Responsive websites and web applications built with modern frameworks and clean architecture.",
        href: "/projects/web-development",
        preview: "https://lh3.googleusercontent.com/d/1g4nXksDlzoXBehKE4pJ2FH88nSoW-Isc",
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
                                <div style={{ width: "100%", height: 220, position: "relative", overflow: "hidden" }}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={cat.preview}
                                        alt={cat.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                        }}
                                        className="project-category__image"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.95) 100%)",
                                            pointerEvents: "none",
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
