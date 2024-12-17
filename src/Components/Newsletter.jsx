import React from "react";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Newsletter = ({ darkMode }) => {
    return (
        <div className={` ${!darkMode ? "bg-gradient-to-b from-[rgb(0,0,31)] to-[rgb(0,0,44)] text-white" : ""} flex items-center justify-center px-6 py-20`}>
            <motion.div
                className={`max-w-4xl w-full ${!darkMode ? "bg-purple-800/20" : "bg-[rgb(0,0,44)]"} rounded-lg shadow-lg p-8 sm:p-12`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        Stay Updated!
                    </h2>
                    <p className="text-gray-300">
                        Subscribe to our newsletter and never miss the latest updates and offers.
                    </p>
                </motion.div>

                {/* Form Section */}
                <motion.form
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    {/* Email Input */}
                    <div className="relative flex-grow">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-purple-700/20 text-white placeholder-gray-400 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Subscribe Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
                    >
                        Subscribe <FaArrowRight className="ml-2" />
                    </motion.button>
                </motion.form>

                {/* Decorative Icons */}
                <motion.div
                    className="flex justify-center mt-8 gap-6 text-purple-400 text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <FaEnvelope />
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    >
                        <FaArrowRight />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Newsletter;
