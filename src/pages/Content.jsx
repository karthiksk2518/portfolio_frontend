import React, { useState, useEffect, useRef } from "react";
import About from "../components/About";
import ContentNavbar from "../components/contentNavbar";
import ResumePage from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";

const Content = () => {
    const [activeSection, setActiveSection] = useState("about");
    const [isSticky, setIsSticky] = useState(false);
    const stickyWrapperRef = useRef(null);

    useEffect(() => {
        // Observer for section visibility
        const sections = document.querySelectorAll("section");
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => sectionObserver.observe(section));

        // Observer for navbar stickiness
        const currentStickyWrapper = stickyWrapperRef.current;
        const navObserver = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
        );

        if (currentStickyWrapper) {
            navObserver.observe(currentStickyWrapper);
        }

        return () => {
            sections.forEach((section) => sectionObserver.unobserve(section));
            if (currentStickyWrapper) {
                navObserver.unobserve(currentStickyWrapper);
            }
        };
    }, []);

    return (
        <div className="relative">
            {/* Sticky sentinel */}
            <div ref={stickyWrapperRef} className="h-0" />

            {/* Content Navbar */}
            <div
                className={`
                    transition-all duration-300
                    lg:sticky lg:top-0 z-10
                    ${isSticky
                        ? "fixed top-0 left-0 right-0 animate-slideDown"
                        : "relative"
                    }
                `}
            >
                <ContentNavbar activeSection={activeSection} />
            </div>

            {/* Spacer when navbar is fixed */}
            {isSticky && <div className="h-20 lg:h-0" />}

            {/* Sections */}
            <div className="mt-4 relative">
                <section id="Home">
                    <About />
                </section>
                <section id="Resume">
                    <ResumePage />
                </section>
                <section id="Skill">
                    <Skills />
                </section>
                <section id="Project">
                    <Projects />
                </section>
                <section id="Contact">
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default Content;
