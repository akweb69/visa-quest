// VisaConsultancy.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaRegUserCircle, FaRegLightbulb } from 'react-icons/fa';
import img from "../assets/images/visa-ser2_orig.webp"
const VisaConsultancy = ({ darkMode }) => {
    return (
        <div className={`w-full mx-auto py-10  ${darkMode ? "bg-white" : "bg-[rgb(0,0,77)] text-white"}`}>
            <div className="">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center py-6  "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Visa Consultancy
                </motion.h2>

                <div className="flex justify-center max-h-[300px] overflow-hidden mb-8">
                    <motion.img
                        src={img}
                        alt="Visa Consultancy"
                        className="w-full h-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <div className="w-10/12 mx-auto ">
                <motion.div
                    className="space-y-6 text-lg "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        At <strong>Visa Consultancy</strong>, we guide you through the complexities of visa applications. Whether you're applying for a tourist, student, work, or immigration visa, our team ensures you have all the necessary documents and advice to succeed. We aim to make your visa application process as smooth and straightforward as possible.
                    </p>

                    <motion.h3
                        className="text-2xl font-semibold  mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Services
                    </motion.h3>
                    <ul className="list-inside list-disc space-y-4">
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <FaRegHandshake className="mr-3 text-blue-600 text-xl" />
                            <span>Tourist Visa Assistance</span>
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <FaRegUserCircle className="mr-3 text-green-600 text-xl" />
                            <span>Student Visa Guidance</span>
                        </motion.li>
                        <motion.li
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9 }}
                        >
                            <FaRegLightbulb className="mr-3 text-yellow-600 text-xl" />
                            <span>Work and Immigration Consulting</span>
                        </motion.li>
                    </ul>

                    <motion.h3
                        className="text-2xl font-semibold  mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Us?
                    </motion.h3>
                    <ul className="list-inside list-disc space-y-4">
                        <motion.li
                            className=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Experienced consultants with expert knowledge of visa processes.
                        </motion.li>
                        <motion.li
                            className=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Personalized service tailored to your specific needs.
                        </motion.li>
                        <motion.li
                            className=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9 }}
                        >
                            Fast processing times and accurate guidance throughout the process.
                        </motion.li>
                    </ul>

                    <motion.h3
                        className="text-2xl font-semibold "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h3>
                    <p className="">
                        If you're ready to begin your visa application, reach out to us today. We’re here to help you every step of the way.
                    </p>
                    <a
                        href="mailto:info@visaconsultancy.com"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        akwebdev69@gmail.com
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default VisaConsultancy;
