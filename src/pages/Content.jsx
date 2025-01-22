import React, { useState, useEffect } from "react";
import About from "../components/About";
import ContentNavbar from "../components/contentNavbar";
import ResumePage from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";

const Content = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="relative">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-20">
                <ContentNavbar activeSection={activeSection} />
            </div>

            {/* Sections */}
            <div className="mt-4 z-10 relative">
                <section id="Home" >
                    <About />
                </section>
                <section id="Resume" >
                    <ResumePage />
                </section>
                <section id="Skill" >
                    <Skills />
                </section>
                <section id="Project" >
                    <Projects />
                </section>
                <section id="Contact" >
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default Content;