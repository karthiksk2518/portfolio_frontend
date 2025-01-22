import React from "react";
import { FaHome, FaFileAlt, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const ContentNavbar = ({ activeSection }) => {

    const navItems = [
        { id: "Home", icon: FaHome, label: "Home" },
        { id: "Resume", icon: FaFileAlt, label: "Resume" },
        { id: "Skill", icon: FaTools, label: "Skill" },
        { id: "Project", icon: FaBriefcase, label: "Project" },
        { id: "Contact", icon: FaEnvelope, label: "Contact" },
    ]

    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 flex justify-around items-center gap-4 lg:gap-8 shadow-md rounded-lg py-3 px-6 bg-white z-10">
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex flex-col items-center ${activeSection === item.id ? "text-orange-500" : "text-gray-500"}`}
                >
                    <item.icon size={24} />
                    <span className="text-sm mt-1">{item.label}</span>
                </a>
            ))}
        </div>
    );
};

export default ContentNavbar;