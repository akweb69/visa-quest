import React from 'react';
import { FaCog } from 'react-icons/fa'; // Gear icon

const Commingsoon = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <div className="text-center bg-gray-800 p-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold text-indigo-400 mb-4 animate__animated animate__fadeIn">
                    Opp!
                    <FaCog className="inline-block text-yellow-400 ml-2 animate-spin text-5xl" />
                </div>
                <div className="text-2xl font-semibold text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Coming soon...
                </div>
                <p className="text-lg text-gray-400 mb-6 animate__animated animate__fadeIn animate__delay-2s">
                    We are working on this, please stay with us and explore it later.
                </p>
            </div>
        </div>
    );
};

export default Commingsoon;
