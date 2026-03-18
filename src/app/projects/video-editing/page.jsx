"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
    {
        id: 1,
        title: "Cinematic Travel Reel",
        category: "Cinematic",
        duration: "2:34",
        gradient: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)",
    },
    {
        id: 2,
        title: "Product Launch Teaser",
        category: "Commercial",
        duration: "0:45",
        gradient: "linear-gradient(135deg, #141414 0%, #2e1a1a 100%)",
    },
    {
        id: 3,
        title: "Music Video Edit",
        category: "Music",
        duration: "3:12",
        gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 100%)",
    },
    {
        id: 4,
        title: "Social Media Reel Pack",
        category: "Social Media",
        duration: "0:30",
        gradient: "linear-gradient(135deg, #1a1a0a 0%, #2e2e1a 100%)",
    },
    {
        id: 5,
        title: "Event Highlights Montage",
        category: "Events",
        duration: "1:45",
        gradient: "linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 100%)",
    },
    {
        id: 6,
        title: "Motion Graphics Showreel",
        category: "Motion",
        duration: "1:20",
        gradient: "linear-gradient(135deg, #1a0a1a 0%, #2e1a2e 100%)",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function VideoEditingPage() {
    const [selectedVideo, setSelectedVideo] = useState(null);

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
                        02 — Video Editing
                    </motion.span>
                    <motion.h1
                        className="section__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Video &amp; Motion Works
                    </motion.h1>
                </div>

                <motion.div
                    className="project-page__grid"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            className="video-card"
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4 }}
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="video-card__preview">
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        background: video.gradient,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span style={{
                                        fontSize: "3rem",
                                        opacity: 0.2,
                                        fontWeight: 800,
                                        fontFamily: "var(--font-display)",
                                        color: "#fff",
                                    }}>
                                        🎬
                                    </span>
                                </div>
                                <div className="video-card__play-icon">
                                    <div className="video-card__play-circle">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5,3 19,12 5,21" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="video-card__content">
                                <h3 className="video-card__title">{video.title}</h3>
                                <span className="video-card__meta">
                                    {video.category} • {video.duration}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedVideo(null)}
                        >
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
                                    aspectRatio: "16/9",
                                    background: selectedVideo.gradient,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 16,
                                }}
                            >
                                <span style={{ fontSize: "4rem" }}>🎬</span>
                                <span style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#fff",
                                }}>
                                    {selectedVideo.title}
                                </span>
                                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                    {selectedVideo.category} • {selectedVideo.duration}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Footer />
        </>
    );
}
