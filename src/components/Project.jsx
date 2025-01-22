import React from "react";
import Food from "../assets/Food.png";

const projects = [
    {
        id: 1,
        name: "YUMMY BASKET",
        image: Food,
        liveLink: "https://food-ordering-kp.vercel.app/",
        backendLink: "https://food-ordering-backend-gbvs.onrender.com/",
        githubLink: "https://github.com/karthiksk2518/Food-Ordering",
    },
    {
        id: 2,
        name: "YUMMY BASKET",
        image: Food,
        liveLink: "https://food-ordering-kp.vercel.app/",
        backendLink: "https://food-ordering-backend-gbvs.onrender.com/",
        githubLink: "https://github.com/karthiksk2518/Food-Ordering",
    },
    {
        id: 3,
        name: "YUMMY BASKET",
        image: Food,
        liveLink: "https://food-ordering-kp.vercel.app/",
        backendLink: "https://food-ordering-backend-gbvs.onrender.com/",
        githubLink: "https://github.com/karthiksk2518/Food-Ordering",
    },
];

const Projects = () => {
    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 mt-4 bg-white p-8 rounded-lg shadow-md" id="Project">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Projects</h1>
                <hr className="border-t-2 border-orange-500 w-20 mb-6" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group w-full h-60 bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md shadow-black overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-3/4 object-cover group-hover:blur-sm transition duration-500"
                        />
                        <div className="mt-4 flex items-center justify-center">
                            <h3 className="text-2xl font-extrabold text-gray-800">{project.name}</h3>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-700">
                            <div className="flex space-x-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Live
                                </a>
                                <a
                                    href={project.backendLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                >
                                    Backend
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;