"use client";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="footer__text">
                © {new Date().getFullYear()} Girik Sain. All rights reserved.
            </span>
            <span className="footer__credit">
                Built with 💚 by{" "}
                <a href="https://github.com/techcodie" target="_blank" rel="noopener noreferrer">
                    ANSH BAHETI
                </a>
            </span>
        </motion.footer>
    );
}
