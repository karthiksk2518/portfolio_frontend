import React from "react";

const About = () => {
    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 p-8 rounded-lg shadow-lg bg-white" id="Home">
            {/* About Section */}
            <div className="mt-6">
                <h1 className="text-4xl font-bold">About Me</h1>
                <div className="w-16 h-1 mt-2 bg-orange-500"></div>
                <p className="mt-6 text-md text-gray-700 text-justify">
                    Hello there! I'm thrilled to welcome you to my portfolio. I am a
                    passionate and versatile full-stack developer with a keen interest in
                    exploring the latest cutting-edge technologies. My journey in the
                    world of web development has been nothing short of exhilarating, and
                    I constantly strive to enhance my skills and embrace emerging trends
                    in the industry.
                </p>
            </div>

            {/* Skills Section */}
            <div className="mt-6 mb-1">
                <h2 className="text-3xl font-semibold text-center">What I do!</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-4">
                    {/* Web Development */}
                    <div className="bg-orange-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                            <span className="mr-2">💻</span> Web Development
                        </h3>
                        <p className="text-gray-700 text-justify">
                            I specialize in building dynamic, responsive, and user-friendly websites
                            using modern web development technologies. My focus is on delivering
                            high-quality and efficient solutions tailored to meet client needs.
                        </p>
                    </div>

                    {/* MERN Stack Developer */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                            <span className="mr-2">🛠️</span> MERN Stack Development
                        </h3>
                        <p className="text-gray-700 text-justify">
                            As a MERN Stack Developer, I bring expertise in creating full-stack
                            applications that combine MongoDB, Express.js, React.js, and Node.js.
                            My goal is to deliver scalable, efficient, and robust solutions that
                            seamlessly integrate frontend and backend functionalities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;