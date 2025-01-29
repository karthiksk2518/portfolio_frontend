import React from "react";

const ResumePage = () => {

    const softSkills = [
        {Skill: "Time Management"},
        {Skill: "Teamwork"},
        {Skill: "Leadership"},
        {Skill: "Flexibility"},
    ]

    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 mt-4 bg-white shadow-lg rounded-lg p-8" id="Resume">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume</h1>
                <hr className="border-t-2 border-orange-500 w-20 mb-6" />
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    🎓 Education
                </h2>
                <div className="space-y-4">
                    <div className="bg-orange-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-gray-800">MCA (SE)</p>
                        <p className="text-sm text-gray-600">2023 - 2025</p>
                        <p className="text-sm text-gray-700">USICT, New Delhi</p>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-gray-800">BCA</p>
                        <p className="text-sm text-gray-600">2018 - 2021</p>
                        <p className="text-sm text-gray-700">
                            Royal Institute of Management and Advanced Studies, Ratlam
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    💼 Experience
                </h2>
                <div className="space-y-4">
                    <div className="bg-orange-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-gray-800">Web Developer Intern</p>
                        <p className="text-sm text-gray-600">March 2024 - April 2024</p>
                        <p className="text-sm text-gray-700">
                            TECH ALPHA - Developed frontend applications using HTML, CSS, and
                            JavaScript.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    🧠 Soft Skills
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {softSkills.map((item, index) => (
                        <span className="bg-gray-200 py-2 px-4 rounded-lg text-center">{item.Skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumePage;