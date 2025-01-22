import React from "react";
import { FaNodeJs } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiC,
    SiCplusplus,
    SiFigma,
} from "react-icons/si";

const Skills = () => {
    const skills = [
        { icon: <SiHtml5 size={24} />, color: "text-orange-500", name: "HTML5" },
        { icon: <SiCss3 size={24} />, color: "text-blue-500", name: "CSS3" },
        { icon: <SiJavascript size={24} />, color: "text-yellow-500", name: "JavaScript" },
        { icon: <SiReact size={24} />, color: "text-blue-400", name: "React.js" },
        { icon: <FaNodeJs size={24} />, color: "text-green-500", name: "Node.js" },
        { icon: <SiExpress size={24} />, color: "text-gray-600", name: "Express.js" },
        { icon: <SiMongodb size={24} />, color: "text-green-400", name: "MongoDB" },
        { icon: <SiTailwindcss size={24} />, color: "text-blue-500", name: "Tailwind" },
        { icon: <SiC size={24} />, color: "text-purple-500", name: "C" },
        { icon: <SiCplusplus size={24} />, color: "text-blue-700", name: "C++" },
        { icon: <SiFigma size={24} />, color: "text-pink-500", name: "Figma" },
    ];

    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 mt-4 bg-white p-8 rounded-lg shadow-md" id="Skill">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Skill</h1>
                <hr className="border-t-2 border-orange-500 w-20 mb-6" />
            </div>

            <div className="flex flex-col gap-8">
                <div className="text-gray-700 mb-4 p-8 rounded-md text-justify bg-orange-100">
                    <p>
                        Over the course of my journey as a full-stack developer, I've honed
                        my skills in a wide array of technologies, including frontend
                        frameworks, backend systems, and database management. My expertise
                        spans creating responsive designs, intuitive user interfaces, and
                        scalable backend solutions.
                    </p>
                    <p className="mt-4">
                        I continuously strive to learn emerging technologies and tools,
                        enabling me to develop robust and cutting-edge applications. Here's
                        a visual representation of the key skills that define my expertise.
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 p-8 justify-items-center bg-gray-100 rounded-md">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110"
                        >
                            <div
                                className={`p-4 rounded-full bg-white shadow-md transform transition-transform duration-300 group-hover:scale-100 ${skill.color}`}
                            >
                                {skill.icon}
                            </div>
                            <span className="absolute bottom-14 text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;