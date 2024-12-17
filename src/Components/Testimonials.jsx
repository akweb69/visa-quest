import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        feedback: "Visa Quest made my visa application process so smooth and easy. Highly recommended!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Digital Marketer",
        feedback: "Amazing service! I got my visa in no time. Professional and supportive team!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
    {
        id: 3,
        name: "Mike Wilson",
        role: "Entrepreneur",
        feedback: "The team at Visa Quest is very knowledgeable and helped me with all my queries!",
        image: "https://i.ibb.co.com/0CcCWj3/my.png",
    },
];

const Testimonials = ({ darkMode }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={`${darkMode ? "bg-gray-100" : "bg-[rgb(0,0,66)] text-white"} py-12`}>
            <div className="container mx-auto px-6">
                {/* Title and Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className={`text-3xl font-bold ${darkMode ? "text-gray-800" : "text-yellow-300"}`}>
                        What Our Clients Say
                    </h2>
                    <p className={`${darkMode ? "text-gray-600" : "text-gray-300"} mt-2`}>
                        Here's what our happy clients have to say about us.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="relative max-w-xl mx-auto">
                    <motion.div
                        key={testimonials[currentIndex].id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className={`${darkMode ? "bg-[rgb(0,0,55)] text-white" : "bg-base-200 text-black"}  rounded-lg shadow-lg p-6`}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-bold">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>
                        <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
                        <p className={`${darkMode ? "text-white" : "text-gray-700"} italic`}>
                            {testimonials[currentIndex].feedback}
                        </p>
                    </motion.div>

                    {/* Navigation Buttons Outside the Card */}
                    <div className="flex justify-center items-center mt-6 space-x-4">
                        <button
                            onClick={handlePrev}
                            className="bg-indigo-500 text-white p-3 rounded-full shadow-md hover:bg-indigo-600 focus:outline-none"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-indigo-500 text-white p-3 rounded-full shadow-md hover:bg-indigo-600 focus:outline-none"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
