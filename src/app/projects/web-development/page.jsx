"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const webProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with payment integration, admin dashboard, and responsive design.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        id: 2,
        title: "Portfolio CMS Dashboard",
        description: "A content management system for managing portfolio projects, blog posts, and client testimonials.",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        id: 3,
        title: "SaaS Landing Page",
        description: "High-converting landing page with smooth animations, dark mode, and responsive layouts.",
        technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
        id: 4,
        title: "Real Estate Platform",
        description: "Property listing platform with advanced filters, map integration, and virtual tour support.",
        technologies: ["React", "Express", "MongoDB", "Mapbox"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
        id: 5,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
        technologies: ["Next.js", "Chart.js", "REST API", "Tailwind CSS"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
        id: 6,
        title: "AI-Powered Blog",
        description: "Content platform with AI-assisted writing, SEO optimization, and analytics tracking.",
        technologies: ["Next.js", "OpenAI", "Prisma", "Vercel"],
        liveUrl: "#",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function WebDevelopmentPage() {
    const [selectedProject, setSelectedProject] = useState(null);

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
                        03 — Web Development
                    </motion.span>
                    <motion.h1
                        className="section__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Website &amp; Web Applications
                    </motion.h1>
                </div>

                <motion.div
                    className="project-page__grid"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {webProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4 }}
                            onClick={() => setSelectedProject(project)}
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
                                        opacity: 0.25,
                                        fontWeight: 800,
                                        fontFamily: "var(--font-display)",
                                        color: "#fff",
                                    }}>
                                        🌐
                                    </span>
                                </div>
                            </div>
                            <div className="project-card__content">
                                <span className="project-card__tag">Web App</span>
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Project Detail Modal */}
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
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: 260,
                                    background: selectedProject.gradient,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <span style={{ fontSize: "4rem", opacity: 0.3 }}>🌐</span>
                            </div>
                            <div style={{ padding: 32 }}>
                                <h2 style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.6rem",
                                    fontWeight: 700,
                                    marginBottom: 12,
                                }}>
                                    {selectedProject.title}
                                </h2>
                                <p style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                    marginBottom: 20,
                                    fontSize: "0.95rem",
                                }}>
                                    {selectedProject.description}
                                </p>

                                <div style={{ marginBottom: 24 }}>
                                    <span style={{
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        color: "var(--text-muted)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        marginBottom: 10,
                                        display: "block",
                                    }}>
                                        Technologies Used
                                    </span>
                                    <div className="web-detail__tech-list">
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className="web-detail__tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn--primary"
                                    >
                                        View Live
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </>
    );
}
