"use client";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Done" },
    { value: "20+", label: "Happy Clients" },
    { value: "∞", label: "Ideas Created" },
];

export default function About() {
    return (
        <section className="section" id="about">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                <motion.span className="section__label" variants={fadeUp}>About</motion.span>
                <motion.h2 className="section__title" variants={fadeUp}>
                    Building at the intersection<br />of design & technology
                </motion.h2>

                <div className="about">
                    <motion.div variants={fadeUp}>
                        <p className="about__text">
                            <span className="about__highlight">Multidisciplinary creative</span> specializing
                            in video editing, motion design, graphic design, and responsive website &amp; web
                            application development. Focused on blending{" "}
                            <span className="about__highlight">visual storytelling and technology</span> to
                            build engaging digital experiences and impactful content.
                        </p>
                        <br />
                        <p className="about__text">
                            Every project is an opportunity to push creative boundaries — whether it&apos;s
                            crafting a brand identity, editing cinematic content, or engineering a responsive
                            web platform from the ground up.
                        </p>
                    </motion.div>

                    <motion.div className="about__stats" variants={fadeUp}>
                        {stats.map((stat) => (
                            <div className="about__stat-card" key={stat.label}>
                                <div className="about__stat-value">{stat.value}</div>
                                <div className="about__stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
