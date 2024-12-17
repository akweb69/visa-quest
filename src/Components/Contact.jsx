import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
    return (
        <div className={`${!darkMode ? "bg-gradient-to-b from-[rgb(0,0,77)] to-[rgb(0,0,31)] text-white" : "text-black"} py-16 px-6`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Get in Touch
                </motion.h2>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Left Section: Contact Form */}
                    <motion.div
                        className={`${!darkMode ? "bg-[rgb(0,0,44)]" : "bg-base-200 text-gray-950"} p-8 rounded-lg shadow-lg`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label className={`block ${!darkMode ? "text-gray-300" : "text-gray-950"} mb-2`} htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`w-full ${!darkMode ? "bg-purple-700/20 text-white placeholder-gray-400" : ""} py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full ${!darkMode ? "bg-purple-700/20 text-white placeholder-gray-400" : ""} py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label className="block text-gray-300 mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className={`w-full ${!darkMode ? "bg-purple-700/20 text-white placeholder-gray-400" : ""} py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Section: Contact Details */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Contact Info */}
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                            <div>
                                <h3 className="text-xl font-semibold">Office Address</h3>
                                <p className={`${!darkMode ? "text-gray-300" : "text-black"}`}>
                                    123 Visa Quest St., Joypurhat, Rajshahi, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaPhoneAlt className="text-purple-400 text-2xl" />
                            <div>
                                <h3 className="text-xl font-semibold">Phone Number</h3>
                                <p className={`${!darkMode ? "text-gray-300" : "text-black"}`}>+880 1768037870</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-purple-400 text-2xl" />
                            <div>
                                <h3 className="text-xl font-semibold">Email Address</h3>
                                <p className={`${!darkMode ? "text-gray-300" : "text-black"}`}>akwebdev69@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-6 text-purple-400 text-2xl">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                className="hover:text-purple-500"
                            >
                                <FaFacebook />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                className="hover:text-purple-500"
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                className="hover:text-purple-500"
                            >
                                <FaLinkedin />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
