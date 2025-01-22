import React from "react";
import profile from "../assets/profile.jpg";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Sidebar = () => {

    const Social = [
        { icon: FaWhatsapp, color: "text-green-500", link: "https://wa.me/917566236975" },
        { icon: FaLinkedin, color: "text-blue-700", link: "https://www.linkedin.com/in/kundan-patidar-1093162a6" },
        { icon: FaTwitter, color: "text-blue-400", link: "https://twitter.com/yourusername" },
        { icon: FaGithub, color: "text-gray-600", link: "https://github.com/karthiksk2518" },
    ]

    const Contacts = [
        { icon: FaPhone, color: "text-orange-500", label: "Phone", value: "+91-7566236975", h_line: <hr /> },
        { icon: FaEnvelope, color: "text-red-500", label: "Email", value: "karthikpatidar2518@gmail.com", h_line: <hr /> },
        { icon: FaMapMarkerAlt, color: "text-green-500", label: "Location", value: "Ujjain, Madhya Pradesh, India" },
    ]

    return (
        <div className="ml-0 lg:ml-16 flex flex-col items-center justify-center relative">
            <div className="relative w-44 h-44 rounded-lg overflow-hidden z-10">
                <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details Section */}
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-8 mt-[-5.5rem] relative z-0 shadow-md shadow-gray-500">
                <h1 className="mt-16 text-3xl font-bold">Kundan Patidar</h1>
                <p className="mt-1 text-lg text-gray-500">MERN Stack Developer</p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                    {Social.map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-[#F2F7FC] p-2 rounded-lg shadow-md hover:scale-125 transition-transform duration-300">
                                <item.icon className={`w-6 h-6 cursor-pointer ${item.color}`} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Details */}
                <div className="bg-gray-100 w-full mt-6 px-4 rounded-lg text-gray-700">
                    {Contacts.map((contact, index) => (
                        <div  key={index}>
                            <div className="flex items-center my-2">
                                <contact.icon className={`${contact.color} w-5 h-5`} />
                                <div className="ml-6">
                                    <div className="text-gray-500">{contact.label}</div>
                                    <div>{contact.value}</div>
                                </div>
                            </div>
                            {contact.h_line}
                        </div>
                    ))}
                </div>

                {/* Download Resume */}
                <a
                    href="https://drive.google.com/file/d/1H0iMwJucglzi2VWaCvyjPu1eQW2XXGsE/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600">
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;