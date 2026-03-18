"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
    {
        id: 1,
        title: "Video Edit — I",
        category: "Cinematic",
        embedUrl: "https://drive.google.com/file/d/1-LpsMArPq8CYgsgnVrEkocS2tAwts4Ne/preview",
    },
    {
        id: 2,
        title: "Video Edit — II",
        category: "Commercial",
        embedUrl: "https://drive.google.com/file/d/1eJQsnyvkMq1nxk14hiiBfSLDgvwEJK-n/preview",
    },
    {
        id: 3,
        title: "Video Edit — III",
        category: "Motion",
        embedUrl: "https://drive.google.com/file/d/1s-UHKJtkdx67i3kfRb3WuO6lCi9mTuTz/preview",
    },
    {
        id: 4,
        title: "Video Edit — IV",
        category: "Social Media",
        embedUrl: "https://drive.google.com/file/d/11NDc3Pthoi0NlFssx3bPpTPIsN-Wdqv3/preview",
    },
    {
        id: 5,
        title: "Video Edit — V",
        category: "Events",
        embedUrl: "https://drive.google.com/file/d/1de1yhIsGL7Fu82ao67UXk7alMI17en4j/preview",
    },
    {
        id: 6,
        title: "Video Edit — VI",
        category: "Motion",
        embedUrl: "https://drive.google.com/file/d/1kOK6UNPz-nniHaVMDEqvSLuOiKevsUkI/preview",
    },
    {
        id: 7,
        title: "Video Edit — VII",
        category: "Cinematic",
        embedUrl: "https://drive.google.com/file/d/19J0V2lDEH4bpQX3bBTy8smGJItNCCV5C/preview",
    },
    {
        id: 8,
        title: "Video Edit — VIII",
        category: "Commercial",
        embedUrl: "https://drive.google.com/file/d/1Ey5dYVrTPFBqxJrBjE6e8CZdPBnTbGyf/preview",
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
                                <iframe
                                    src={video.embedUrl}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        pointerEvents: "none",
                                    }}
                                    allow="autoplay"
                                    loading="lazy"
                                    title={video.title}
                                />
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
                                    {video.category}
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
                            <div style={{ aspectRatio: "16/9", background: "#000" }}>
                                <iframe
                                    src={selectedVideo.embedUrl}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                    }}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={selectedVideo.title}
                                />
                            </div>
                            <div style={{ padding: "24px 32px" }}>
                                <h2 style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "1.4rem",
                                    fontWeight: 700,
                                    margin: "8px 0",
                                }}>
                                    {selectedVideo.title}
                                </h2>
                                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                    {selectedVideo.category}
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
