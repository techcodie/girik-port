"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <a href="#hero" className="navbar__logo">
                Girik<span>.</span>
            </a>

            <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            className="navbar__link"
                            onClick={() => handleClick(link.href)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className={`navbar__menu-btn ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
        </motion.nav>
    );
}
