"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["All", "Thumbnails", "Poster Design", "Infographics"];

const projects = [
    {
        id: 1,
        title: "Tech YouTube Thumbnail Series",
        category: "Thumbnails",
        description: "Eye-catching thumbnails designed for a tech YouTube channel, optimized for CTR.",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        id: 2,
        title: "Gaming Stream Thumbnails",
        category: "Thumbnails",
        description: "High-energy gaming thumbnails with dynamic compositions and bold typography.",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        id: 3,
        title: "Podcast Cover Series",
        category: "Thumbnails",
        description: "Minimalist podcast episode covers with consistent branding elements.",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
        id: 4,
        title: "Music Festival Poster",
        category: "Poster Design",
        description: "Vibrant festival poster featuring neon aesthetics and bold typography.",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    },
    {
        id: 5,
        title: "Product Launch Poster",
        category: "Poster Design",
        description: "Sleek product launch poster with minimalist design and premium feel.",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
    {
        id: 6,
        title: "Event Branding Poster",
        category: "Poster Design",
        description: "Corporate event branding with consistent visual language and hierarchy.",
        gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    },
    {
        id: 7,
        title: "Data Visualization Dashboard",
        category: "Infographics",
        description: "Complex data transformed into digestible visual infographic for social media.",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    },
    {
        id: 8,
        title: "Process Flow Infographic",
        category: "Infographics",
        description: "Step-by-step process infographic with clean icons and clear hierarchy.",
        gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    },
    {
        id: 9,
        title: "Statistics Report Infographic",
        category: "Infographics",
        description: "Annual statistics report visualized with charts, icons, and comparisons.",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function GraphicDesignPage() {
    const [activeTab, setActiveTab] = useState("All");

    const filtered = activeTab === "All"
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
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                >
                    <AnimatePresence mode="wait">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                layout
                                whileHover={{ y: -4 }}
                            >
                                <div className="project-card__image-wrap">
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            background: project.gradient,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <span style={{
                                            fontSize: "3rem",
                                            opacity: 0.3,
                                            fontWeight: 800,
                                            fontFamily: "var(--font-display)",
                                            color: "#fff",
                                        }}>
                                            {project.category === "Thumbnails" ? "🖼️" : project.category === "Poster Design" ? "📐" : "📊"}
                                        </span>
                                    </div>
                                </div>
                                <div className="project-card__content">
                                    <span className="project-card__tag">{project.category}</span>
                                    <h3 className="project-card__title">{project.title}</h3>
                                    <p className="project-card__desc">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}
