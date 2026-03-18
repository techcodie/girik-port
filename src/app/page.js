"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <hr className="section__divider" />
                <About />
                <hr className="section__divider" />
                <Skills />
                <hr className="section__divider" />
                <Projects />
                <hr className="section__divider" />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
