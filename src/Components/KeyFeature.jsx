import React from "react";
import { FaGlobe, FaPassport, FaHandsHelping, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const KeyFeatures = ({ darkMode }) => {
    const features = [
        {
            icon: <FaGlobe />,
            title: "Global Visa Coverage",
            description: "Access detailed visa requirements for countries worldwide.",
        },
        {
            icon: <FaPassport />,
            title: "Easy Application Process",
            description: "Streamlined guidance for hassle-free visa applications.",
        },
        {
            icon: <FaHandsHelping />,
            title: "Expert Assistance",
            description: "Get support from visa experts at every step of the process.",
        },
        {
            icon: <FaPlane />,
            title: "Travel Preparedness",
            description: "Plan your journey with essential travel and visa tips.",
        },
    ];

    return (
        <div className={`${!darkMode ? "bg-gradient-to-b  from-[rgb(0,0,55)] to-[rgb(0,0,77)] text-white" : ""} py-16 px-6`}>
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Why Choose Visa Quest ?
                </motion.h2>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`${!darkMode ? "hover:bg-purple-700/30 bg-[rgb(0,0,57)]" : "bg-pink-200 "} rounded-lg p-6 flex flex-col items-center text-center  transition duration-300`}
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            {/* Feature Icon */}
                            <div className="text-purple-400 text-5xl mb-4">{feature.icon}</div>
                            {/* Feature Title */}
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            {/* Feature Description */}
                            <p className={`${darkMode ? "text-black" : "text-purple-100"}`}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default KeyFeatures;
