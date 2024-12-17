import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaRegPaperPlane, FaListAlt } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { FiSearch } from "react-icons/fi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaGlobe, FaHandshake, FaChartLine } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import Newsletter from './Newsletter';
import KeyFeatures from './KeyFeature';
import Contact from './Contact';
import LatestVisa from './LatestVisa';

import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from '../AuthContext/AuthProvider';
import ExploreWorld from './ExploreWorld';
import FAQ from './FAQ';
import VisaConsultancy from './VisaConsultancy';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import ApplicationTracker from './ApplicationTracker';
const HomePage = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    // State for theme toggle
    const { darkMode, setDarkMode } = useContext(AuthContext);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <Helmet>
                <title>Home | Visa Quest</title>
            </Helmet>
            {/* Page Wrapper */}
            <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative">
                {/* Theme Toggle Button */}
                {/* <div className="absolute top-5 right-5 z-50">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg transition-transform transform hover:scale-110 hover:rotate-12 focus:outline-none"
                    >
                        {darkMode ? (
                            <FaMoon className="text-2xl" />
                        ) : (
                            <FaSun className="text-2xl" />
                        )}
                    </button>
                </div> */}


                {/* Swiper Slider */}
                <div className="min-h-screen w-full">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 12000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                        loop={true}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="relative w-full min-h-screen flex items-center justify-center bg-s1 bg-cover bg-center bg-blend-overlay">
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Animated Content */}
                                <motion.div
                                    className="relative text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <motion.h1
                                        className="text-4xl sm:text-6xl font-bold text-white"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    >

                                        <span className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 bg-clip-text">
                                            <ReactTyped
                                                backSpeed={50}
                                                onBegin={function noRefCheck() { }}
                                                onComplete={function noRefCheck() { }}
                                                onDestroy={function noRefCheck() { }}
                                                onLastStringBackspaced={function noRefCheck() { }}
                                                onReset={function noRefCheck() { }}
                                                onStart={function noRefCheck() { }}
                                                onStop={function noRefCheck() { }}
                                                onStringTyped={function noRefCheck() { }}
                                                onTypingPaused={function noRefCheck() { }}
                                                onTypingResumed={function noRefCheck() { }}
                                                loop
                                                strings={[
                                                    "Welcome!",
                                                    "Welcome Visa Quest",
                                                    "Your Visa Journey Starts Here",
                                                    "Easy To Track Your Visa"
                                                ]}
                                                typeSpeed={50}
                                                typedRef={function noRefCheck() { }}
                                            />

                                        </span>
                                    </motion.h1>
                                    <motion.p
                                        className="font-quest md:text-lg text-gray-300 mt-4 md:w-2/3 mx-auto px-5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        "Your all-in-one platform for effortlessly managing visa applications, tracking progress, and discovering visa requirements, ensuring a smooth and stress-free journey from start to finish."                                    </motion.p>
                                    <motion.button
                                        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link to={"/all-visas"}> Get Started</Link>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-s4 bg-blend-overlay">
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Animated Content */}
                                <motion.div
                                    className="relative text-center text-white z-10 px-4 sm:px-8"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    {/* Animated Heading */}
                                    <motion.h1
                                        className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 text-4xl sm:text-6xl font-bold bg-clip-text"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                    >
                                        <ReactTyped
                                            backSpeed={50}
                                            onBegin={function noRefCheck() { }}
                                            onComplete={function noRefCheck() { }}
                                            onDestroy={function noRefCheck() { }}
                                            onLastStringBackspaced={function noRefCheck() { }}
                                            onReset={function noRefCheck() { }}
                                            onStart={function noRefCheck() { }}
                                            onStop={function noRefCheck() { }}
                                            onStringTyped={function noRefCheck() { }}
                                            onTypingPaused={function noRefCheck() { }}
                                            onTypingResumed={function noRefCheck() { }}
                                            loop
                                            strings={[
                                                "welcome",
                                                "Your Visa Journey Starts Here"
                                            ]}
                                            typeSpeed={50}
                                            typedRef={function noRefCheck() { }}
                                        />


                                    </motion.h1>

                                    {/* Subheading */}
                                    <motion.p
                                        className="font-quest md:text-lg text-gray-200 mt-4 md:w-2/3 mx-auto px-5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7, duration: 1 }}
                                    >
                                        "Explore visa requirements, easily apply online, and track your application status in real-time. Our platform simplifies the entire process, providing a seamless experience for managing visa applications from start to finish, ensuring convenience and efficiency at every step."
                                    </motion.p>

                                    {/* Call to Action Buttons */}
                                    <div className="mt-6 flex flex-col  lg:flex-row  justify-center gap-6 items-center">
                                        <motion.button
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition duration-300"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1, duration: 1 }}
                                        >
                                            <FaRegPaperPlane className="text-xl" />
                                            Start Your Application
                                        </motion.button>
                                        <motion.button
                                            className="flex items-center gap-2 border-2 border-white hover:bg-white hover:text-blue-600 text-white py-2 px-6 rounded-full font-medium transition duration-300"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.2, duration: 1 }}
                                        >
                                            <FaListAlt className="text-xl" />
                                            See Visa Types
                                        </motion.button>
                                    </div>

                                    {/* Optional Social Proof */}
                                    <motion.div
                                        className="mt-10 text-white text-sm font-light md:w-1/2 mx-auto px-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 1 }}
                                    >
                                        Trusted by 100+ travelers for a seamless visa process.
                                    </motion.div>
                                </motion.div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-s3 bg-left bg-no-repeat bg-cover bg-[rgba(0,0,0,0.4)] bg-blend-overlay relative">
                                {/* Background Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 bg-black bg-opacity-50"
                                ></motion.div>

                                {/* Title Section */}
                                <motion.h1
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="text-4xl sm:text-6xl font-bold text-center text-white z-10"
                                >
                                    Track Applications Seamlessly
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="text-lg sm:text-xl px-4 md:w-2/3 text-gray-300 text-center mt-4 z-10"
                                >
                                    Effortlessly explore visa options, apply online, and monitor your progress in real-time.
                                </motion.p>

                                {/* Icons Section */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="flex space-x-6 mt-8 z-10"
                                >
                                    <div className="flex flex-col items-center">
                                        <FiSearch className="text-white text-4xl hover:text-yellow-400 transition duration-300" />
                                        <p className="text-white mt-2">Explore</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <MdOutlineTrackChanges className="text-white text-4xl hover:text-yellow-400 transition duration-300" />
                                        <p className="text-white mt-2">Track</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <AiOutlineCheckCircle className="text-white text-4xl hover:text-yellow-400 transition duration-300" />
                                        <p className="text-white mt-2">Apply</p>
                                    </div>
                                </motion.div>

                                {/* Call-to-Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-10 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 z-10"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </SwiperSlide>

                        {/* Autoplay Progress */}
                        <div className="autoplay-progress absolute bottom-5 right-5 flex items-center gap-2" slot="container-end">
                            <svg
                                className="w-12 h-12"
                                viewBox="0 0 48 48"
                                ref={progressCircle}
                            >
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    className="stroke-gray-400 dark:stroke-gray-600 fill-none stroke-[4]"
                                ></circle>
                            </svg>
                            <span ref={progressContent} className="text-sm"></span>
                        </div>
                    </Swiper>
                </div>
            </div>
            {/* leatest visa  */}
            <div className="">
                <LatestVisa darkMode={darkMode} ></LatestVisa>
            </div>
            <div className="">
                <ApplicationTracker darkMode={darkMode}></ApplicationTracker>
            </div>
            <div className="">
                <ExploreWorld></ExploreWorld>
            </div>
            {/* Aboout section */}
            <div className={`w-full min-h-screen flex flex-col justify-center items-center py-20 md:py-0 ${!darkMode ? "from-[rgb(0,0,31)] via-[rgb(0,0,44)] to-[rgb(0,0,55)] bg-gradient-to-b  text-white px-6" : " bg-white text-black px-6"}`}>
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold mb-6 text-center"
                >
                    About Visa Quest
                </motion.h2>

                {/* Subheader */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={`text-lg sm:text-xl ${!darkMode ? "text-gray-200" : "text-gray-700"} text-center max-w-3xl mb-12`}
                >
                    Simplifying visa processes with a user-friendly portal that offers real-time tracking, seamless applications, and all necessary visa-related information at your fingertips.
                </motion.p>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col items-center ${!darkMode ? "bg-white" : "bg-pink-200"} text-black rounded-lg shadow-lg p-6`}
                    >
                        <FaGlobe className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                        <p className="text-center text-sm">
                            Access visa requirements and details for countries around the globe in one platform.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`flex flex-col items-center ${!darkMode ? "bg-white" : "bg-purple-200"} text-black rounded-lg shadow-lg p-6`}>
                        <FaHandshake className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
                        <p className="text-center text-sm">
                            Enjoy a smooth, interactive experience for applying and tracking your visas effortlessly.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`flex flex-col items-center ${!darkMode ? "bg-white" : "bg-blue-200"} text-black rounded-lg shadow-lg p-6`}>
                        <FaChartLine className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
                        <p className="text-center text-sm">
                            Stay informed with real-time updates and notifications for your visa applications.
                        </p>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                    Learn More
                </motion.button>
            </div>
            {/* news letter section */}

            <div className="">
                <KeyFeatures darkMode={darkMode}></KeyFeatures>

            </div>
            <div className="">
                <VisaConsultancy darkMode={darkMode}></VisaConsultancy>
            </div>
            <div className="">
                <Testimonials darkMode={darkMode}></Testimonials>
            </div>
            <div className="">
                <FAQ darkMode={darkMode}></FAQ>
            </div>
            <div className="">
                <Contact darkMode={darkMode}></Contact>
            </div>
            <div className="w-full">
                <Newsletter darkMode={darkMode} ></Newsletter>
            </div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transform transition-transform hover:-rotate-12"
            >
                <FaPaperPlane />
            </button>
        </div>

    );
};

export default HomePage;
