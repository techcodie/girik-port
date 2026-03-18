"use client";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
};

const roles = [
    "Creative Developer",
    "Visual Designer",
    "Video Editor",
];

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__bg">
                <ParticleBackground />
                <div className="hero__gradient hero__gradient--1" />
                <div className="hero__gradient hero__gradient--2" />
            </div>

            <motion.div
                className="hero__content"
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero__tag" custom={0} variants={fadeUp}>
                    <span className="hero__tag-dot" />
                    Available for freelance work
                </motion.div>

                <motion.h1 className="hero__name" custom={1} variants={fadeUp}>
                    Girik Sain
                </motion.h1>

                <motion.p className="hero__subtitle" custom={2} variants={fadeUp}>
                    Creative designer and developer building visuals, motion, and digital experiences.
                </motion.p>

                <motion.div className="hero__roles" custom={3} variants={fadeUp}>
                    {roles.map((role) => (
                        <span className="hero__role" key={role}>
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                                <circle cx="3" cy="3" r="3" fill="#00ffa3" />
                            </svg>
                            {role}
                        </span>
                    ))}
                </motion.div>

                <motion.div className="hero__cta-group" custom={4} variants={fadeUp}>
                    <a href="#projects" className="btn btn--primary">
                        View Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a href="#contact" className="btn btn--outline">
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
            >
                <span className="hero__scroll-text">Scroll</span>
                <span className="hero__scroll-line" />
            </motion.div>
        </section>
    );
}
