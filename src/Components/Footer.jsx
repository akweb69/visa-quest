import React, { useContext } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const Footer = () => {
    const { darkMode } = useContext(AuthContext);

    return (
        <footer className={`${darkMode ? "bg-base-200 text-black md:py-20" : "bg-[#00001f] md:py-20 text-white py-12"}`}>
            <div className="relative z-10 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Visa Quest
                </h1>
                <p className="text-center text-gray-400 text-lg mb-8">
                    Your Gateway to Global Opportunities
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-4">
                            Visa Quest is your trusted partner in navigating global opportunities. We provide expert
                            advice on visa processes, job placements, and educational opportunities worldwide.
                        </p>
                        <Link
                            to="/about"
                            className="text-blue-400 hover:text-blue-500 transition duration-200 text-sm"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-4">
                            Stay updated with the latest news, visa tips, and opportunities by subscribing to our
                            newsletter.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-2 rounded-l-md w-full bg-gray-800 text-white focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400 text-sm sm:text-base mb-4">
                            Have questions? Reach out to us through our social media or contact form.
                        </p>
                        <div className="flex justify-start space-x-4">
                            <Link
                                to="https://www.facebook.com"
                                className="text-gray-300 hover:text-blue-400 transition text-xl"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="https://twitter.com"
                                className="text-gray-300 hover:text-blue-400 transition text-xl"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                to="https://www.linkedin.com"
                                className="text-gray-300 hover:text-blue-400 transition text-xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                to="https://www.instagram.com"
                                className="text-gray-300 hover:text-blue-400 transition text-xl"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        to="#"
                        className="text-4xl text-blue-400 hover:text-blue-500 transition duration-300"
                        aria-label="Scroll Down"
                    >
                        &#8595;
                    </Link>
                </div>

                <p className="text-center text-gray-400 text-sm mt-8">
                    &copy; {new Date().getFullYear()} Visa Quest. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
