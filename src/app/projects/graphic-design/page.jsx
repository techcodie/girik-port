"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["All", "Poster Design", "Brand Identity", "Logos", "Infographics"];

const projects = [
    // Posters
    {
        id: 1,
        title: "Poster Design — I",
        category: "Poster Design",
        description: "Bold poster design with striking visuals and creative composition.",
        image: "https://drive.google.com/thumbnail?id=1JvzP19EiWyu2BI5zgn5S7GToKigbtzff&sz=w1000",
    },
    {
        id: 2,
        title: "Poster Design — II",
        category: "Poster Design",
        description: "Dynamic poster exploring color, form, and visual storytelling.",
        image: "https://drive.google.com/thumbnail?id=145kZ0NhX6HNWQ_eimsjAN8ja8ZMH4L69&sz=w1000",
    },
    {
        id: 3,
        title: "Poster Design — III",
        category: "Poster Design",
        description: "Creative poster blending modern aesthetics with impactful messaging.",
        image: "https://drive.google.com/thumbnail?id=13y6qA4ymVMy2I-TNPR4JI1AUlYWzA_lg&sz=w1000",
    },
    {
        id: 4,
        title: "Poster Design — IV",
        category: "Poster Design",
        description: "Expressive poster design with bold typography and high-contrast imagery.",
        image: "https://drive.google.com/thumbnail?id=1oHvnmiRonGRLmz3KARd4RdbRiXRww41p&sz=w1000",
    },
    {
        id: 5,
        title: "Poster Design — V",
        category: "Poster Design",
        description: "Visually captivating poster with layered elements and attention to detail.",
        image: "https://drive.google.com/thumbnail?id=1boajk4Iq9d4FzGjUEc1i6AvwTzGz1Ez1&sz=w1000",
    },
    {
        id: 6,
        title: "Poster Design — VI",
        category: "Poster Design",
        description: "Artistic poster featuring a unique visual concept and refined composition.",
        image: "https://drive.google.com/thumbnail?id=1Sl5kWIMzNChWb9SqasTyvqdEw2ESUjB_&sz=w1000",
    },
    {
        id: 7,
        title: "Poster Design — VII",
        category: "Poster Design",
        description: "Minimalist poster design with powerful visual impact and clean layout.",
        image: "https://drive.google.com/thumbnail?id=12WzcO8kvQIwDmU-CwB06AcpK5KRyqgVn&sz=w1000",
    },

    // Brand Identity
    {
        id: 8,
        title: "Brand Identity — I",
        category: "Brand Identity",
        description: "Complete brand identity design with logo, color palette, and visual guidelines.",
        image: "https://drive.google.com/thumbnail?id=1b8F005LaKnuzjtdKf5TA46_4mmEbI2WQ&sz=w1000",
    },
    {
        id: 9,
        title: "Brand Identity — II",
        category: "Brand Identity",
        description: "Alternative brand identity exploration with different color and typography direction.",
        image: "https://drive.google.com/thumbnail?id=1op2dDM-RAXzvLwz4lXJXneEoGyNW1NbC&sz=w1000",
    },
    {
        id: 10,
        title: "Brand Identity — III",
        category: "Brand Identity",
        description: "Brand identity iteration refining visual language and brand consistency.",
        image: "https://drive.google.com/thumbnail?id=1Oo37qNH4WY5A1YHK2sbYnVE4tu-4tlY8&sz=w1000",
    },
    {
        id: 11,
        title: "Brand Identity — IV",
        category: "Brand Identity",
        description: "Cohesive brand design system with consistent visual elements across touchpoints.",
        image: "https://drive.google.com/thumbnail?id=1pz4WDgKSV6Ufnl9xP7zXCzU7iIVIskFt&sz=w1000",
    },
    {
        id: 12,
        title: "Brand Identity — V",
        category: "Brand Identity",
        description: "Extended brand design with additional collateral and marketing materials.",
        image: "https://drive.google.com/thumbnail?id=1_Fy4vf-7Q5pLUv4tKcitQNAfFEOpjcmu&sz=w1000",
    },
    {
        id: 13,
        title: "Brand Identity — VI",
        category: "Brand Identity",
        description: "Brand design package with digital and print-ready assets.",
        image: "https://drive.google.com/thumbnail?id=11k6Ot4XyYN1tfrCdmu-0CoK6HlSEw_37&sz=w1000",
    },
    {
        id: 14,
        title: "Brand Identity — VII",
        category: "Brand Identity",
        description: "Product packaging and branding design with bold visuals and eye-catching layout.",
        image: "https://drive.google.com/thumbnail?id=1sFodagYex8f_SN7pcS4wMVBPfPsMnvi8&sz=w1000",
    },
    {
        id: 15,
        title: "Brand Identity — VIII",
        category: "Brand Identity",
        description: "Social media branding with vibrant colors and playful typography.",
        image: "https://drive.google.com/thumbnail?id=1rdLkEkAD17cDbqDPJQ-toCePukgOE0SN&sz=w1000",
    },
    {
        id: 16,
        title: "Brand Identity — IX",
        category: "Brand Identity",
        description: "Festive branding design with traditional motifs and modern layout.",
        image: "https://drive.google.com/thumbnail?id=1j70CSEoq-dlRlMqmD5cRtudFNuIoYFWa&sz=w1000",
    },

    // Logos
    {
        id: 17,
        title: "Logo Design — I",
        category: "Logos",
        description: "Clean, modern logo design with strong brand identity and versatile application.",
        image: "https://drive.google.com/thumbnail?id=1g4nXksDlzoXBehKE4pJ2FH88nSoW-Isc&sz=w1000",
    },
    {
        id: 18,
        title: "Logo Design — II",
        category: "Logos",
        description: "Minimalist logo concept with distinctive mark and professional appeal.",
        image: "https://drive.google.com/thumbnail?id=1fuNWoksU4vmB-Jh4tOuCK5m5Q6on-c5h&sz=w1000",
    },
    {
        id: 19,
        title: "Logo Design — III",
        category: "Logos",
        description: "Creative logo exploration with unique visual identity and brand personality.",
        image: "https://drive.google.com/thumbnail?id=1R4CxO-w1b_6H0jh-7GfE4Ng_tXsGwU3a&sz=w1000",
    },
    {
        id: 20,
        title: "Logo Design — IV",
        category: "Logos",
        description: "Bold logo design with geometric elements and contemporary style.",
        image: "https://drive.google.com/thumbnail?id=1IhoYaEun8oNjLO8nLVljfK-tMj75RO7s&sz=w1000",
    },

    // Infographics
    {
        id: 21,
        title: "Infographic Design — I",
        category: "Infographics",
        description: "Engaging infographic with rich visual storytelling and clear information hierarchy.",
        image: "https://drive.google.com/thumbnail?id=1ESp9uWlt7rlbQ2v7FkiyFVZxq80slD_i&sz=w1000",
    },
    {
        id: 22,
        title: "Infographic Design — II",
        category: "Infographics",
        description: "Social media infographic with engaging visuals and compelling typography.",
        image: "https://drive.google.com/thumbnail?id=1VMZf65MKnX-oknodbXaeHKJ_HqLJBePB&sz=w1000",
    },
    {
        id: 23,
        title: "Infographic Design — III",
        category: "Infographics",
        description: "Product-focused infographic with detailed visual hierarchy and information design.",
        image: "https://drive.google.com/thumbnail?id=1MEiu5h3k6IYOBoVquETTQ-RIfvkDokhA&sz=w1000",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function GraphicDesignPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered =
        activeTab === "All"
            ? projects
            : projects.filter((p) => p.category === activeTab);

    return (
        <>
            <Navbar />
            <div className="project-page">
                <div className="project-page__hero">
                    <Link href="/#projects" className="project-page__back">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Projects
                    </Link>

                    <motion.span
                        className="section__label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        01 — Graphic Design
                    </motion.span>
                    <motion.h1
                        className="section__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Visual Design Portfolio
                    </motion.h1>

                    <motion.div
                        className="tabs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab ${activeTab === tab ? "tab--active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="project-page__grid"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                    key={activeTab}
                >
                    {filtered.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            layout
                            whileHover={{ y: -4 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-card__image-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card__image"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="project-card__content">
                                <span className="project-card__tag">{project.category}</span>
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Image Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>
                            ✕
                        </button>
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: 1000 }}
                        >
                            <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", background: "var(--bg-secondary)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                            </div>
                            <div style={{ padding: "24px 32px" }}>
                                <span style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    color: "var(--accent)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                }}>
                                    {selectedProject.category}
                                </span>
                                <h2 style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.4rem",
                                    fontWeight: 700,
                                    margin: "8px 0",
                                }}>
                                    {selectedProject.title}
                                </h2>
                                <p style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.6,
                                    fontSize: "0.9rem",
                                }}>
                                    {selectedProject.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </>
    );
}
