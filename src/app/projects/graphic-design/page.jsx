"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["All", "Thumbnails", "Poster Design", "Infographics", "Branding"];

const projects = [
    // Thumbnails
    {
        id: 1,
        title: "Crush Them — YouTube Thumbnail",
        category: "Thumbnails",
        description: "Bold, high-impact YouTube thumbnail designed for maximum click-through rate.",
        image: "https://drive.google.com/uc?export=view&id=1If8omhAY3k3yK4IgG6pTmlfEf1pYM7ta",
    },

    // Posters
    {
        id: 2,
        title: "Abstract Geometry",
        category: "Poster Design",
        description: "Abstract geometric poster exploring form, color, and depth with minimalist composition.",
        image: "/projects/posters/abstract.png",
    },
    {
        id: 3,
        title: "Dharma",
        category: "Poster Design",
        description: "Cultural art poster blending traditional Indian aesthetics with modern design language.",
        image: "/projects/posters/dharma.png",
    },
    {
        id: 4,
        title: "Exoform",
        category: "Poster Design",
        description: "Futuristic digital art poster with sci-fi inspired elements and dynamic composition.",
        image: "/projects/posters/exoform.png",
    },
    {
        id: 5,
        title: "See Through",
        category: "Poster Design",
        description: "Experimental transparency-themed poster with layered visual elements.",
        image: "/projects/posters/see-through.png",
    },
    {
        id: 6,
        title: "Shivaay",
        category: "Poster Design",
        description: "Mythological poster design featuring Lord Shiva with intense visual storytelling.",
        image: "/projects/posters/shivaay.png",
    },
    {
        id: 7,
        title: "Sparta",
        category: "Poster Design",
        description: "Warrior-themed poster with bold typography and high-contrast imagery.",
        image: "/projects/posters/sparta.png",
    },
    {
        id: 8,
        title: "Sync",
        category: "Poster Design",
        description: "Tech-inspired poster design exploring the concept of digital synchronization.",
        image: "/projects/posters/sync.png",
    },

    // Infographics
    {
        id: 9,
        title: "Dhanlaxmi Post",
        category: "Infographics",
        description: "Festive social media infographic with rich visual storytelling and brand consistency.",
        image: "/projects/infographics/dhanlaxmi.png",
    },
    {
        id: 10,
        title: "Ramji Post",
        category: "Infographics",
        description: "Cultural social media content design with engaging visuals and typography.",
        image: "/projects/infographics/ramji-post.png",
    },
    {
        id: 11,
        title: "Ramji Post Reel",
        category: "Infographics",
        description: "Reel-format social media graphic optimized for Instagram engagement.",
        image: "/projects/infographics/ramji-post-re.png",
    },
    {
        id: 12,
        title: "Rasraj",
        category: "Infographics",
        description: "Product branding infographic with detailed visual hierarchy and information design.",
        image: "/projects/infographics/rasraj.png",
    },

    // Branding
    {
        id: 13,
        title: "Brand Identity — Concept 1",
        category: "Branding",
        description: "Complete brand identity design with logo, color palette, and visual guidelines.",
        image: "/projects/branding/brand-identity-1.png",
    },
    {
        id: 14,
        title: "Brand Identity — Concept 2",
        category: "Branding",
        description: "Alternative brand identity exploration with different color and typography direction.",
        image: "/projects/branding/brand-identity-2.png",
    },
    {
        id: 15,
        title: "Brand Identity — Concept 3",
        category: "Branding",
        description: "Third brand identity iteration refining visual language and brand consistency.",
        image: "/projects/branding/brand-identity-3.png",
    },
    {
        id: 16,
        title: "Brand Design — Series A",
        category: "Branding",
        description: "Cohesive brand design system with consistent visual elements across touchpoints.",
        image: "/projects/branding/brand-design-1.png",
    },
    {
        id: 17,
        title: "Brand Design — Series B",
        category: "Branding",
        description: "Extended brand design with additional collateral and marketing materials.",
        image: "/projects/branding/brand-design-2.png",
    },
    {
        id: 18,
        title: "Brand Design — Series C",
        category: "Branding",
        description: "Final brand design package with digital and print-ready assets.",
        image: "/projects/branding/brand-design-3.png",
    },
    {
        id: 19,
        title: "Box Cap Sticker Design",
        category: "Branding",
        description: "Product packaging sticker design with bold branding and eye-catching layout.",
        image: "/projects/branding/box-cap-sticker.png",
    },
    {
        id: 20,
        title: "Nutsy — Social Media Banner",
        category: "Branding",
        description: "Facebook banner design for Nutsy brand with vibrant colors and playful typography.",
        image: "/projects/branding/nutsy-banner.png",
    },
    {
        id: 21,
        title: "Navratri — Festival Branding",
        category: "Branding",
        description: "Festive branding design for Navratri celebration with traditional motifs and modern layout.",
        image: "/projects/branding/navratri.png",
    },
    {
        id: 22,
        title: "Thank You Card",
        category: "Branding",
        description: "Elegant thank you card design for client gifting and brand appreciation.",
        image: "/projects/branding/thank-you-card.png",
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
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="project-card__image"
                                    style={{ objectFit: "cover" }}
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
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    sizes="(max-width: 1000px) 100vw, 1000px"
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
