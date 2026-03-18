"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const socials = [
    {
        name: "Email",
        value: "giriksain@gmail.com",
        href: "mailto:giriksain@gmail.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        ),
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/giriksain",
        href: "https://linkedin.com/in/giriksain",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        ),
    },
    {
        name: "Instagram",
        value: "@giriksain",
        href: "https://instagram.com/giriksain",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
        ),
    },
    {
        name: "GitHub",
        value: "github.com/techcodie",
        href: "https://github.com/techcodie",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        ),
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, wire up to an API or email service
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="section connect" id="contact">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
                <motion.span className="section__label" variants={fadeUp}>Contact</motion.span>
                <motion.h2 className="section__title" variants={fadeUp}>
                    Connect Protocol
                </motion.h2>
                <motion.p className="connect__subtitle" variants={fadeUp}>
                    Secure channel established. Enter your credentials to transmit data directly.
                </motion.p>

                <motion.div className="connect__grid" variants={fadeUp}>
                    {/* Social Links */}
                    <div className="connect__socials">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="connect__social-link"
                            >
                                <span className="connect__social-icon">{social.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.88rem" }}>
                                        {social.name}
                                    </div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{social.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form className="connect__form" onSubmit={handleSubmit}>
                        <input
                            className="connect__input"
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            className="connect__input"
                            type="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <textarea
                            className="connect__textarea"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <button
                            type="submit"
                            className="btn btn--primary"
                            style={{ width: "100%", justifyContent: "center" }}
                        >
                            {submitted ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    Message Sent
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}
