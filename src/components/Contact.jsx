import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
            console.log(response);
            setStatus("Message sent successfully!");
            setFormData({ name: "", contactNumber: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send the message. Please try again.");
        }
    };

    return (
        <div className="mx-4 lg:mx-0 lg:mr-16 mt-4 bg-white p-8 rounded-lg shadow-md" id="Contact">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>
                <hr className="border-t-2 border-orange-500 w-20 mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Section */}
                <div className="bg-orange-100 p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <FiPhone className="text-2xl text-orange-500 mr-3" />
                        <h3 className="text-lg font-semibold">Phone:</h3>
                    </div>
                    <p className="ml-9 text-gray-800 text-sm">+91-7566236975</p>
                </div>

                {/* Email Section */}
                <div className="bg-blue-100 p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <FiMail className="text-2xl text-blue-500 mr-3" />
                        <h3 className="text-lg font-semibold">Email:</h3>
                    </div>
                    <p className="ml-9 text-gray-800 text-sm">karthikpatidar2518@gmail.com</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-100 p-6 sm:p-10 mt-10 rounded-lg shadow-md">
                <p className="text-gray-800 text-sm mb-6">
                    I am always open to discussing <span className="font-bold">new projects, opportunities in tech world, partnerships</span>.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                            Contact Number:
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Submit
                    </button>
                </form>
                {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
            </div>
        </div>
    );
};

export default Contact;