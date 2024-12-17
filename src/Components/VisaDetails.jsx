import React, { useState, useContext } from 'react';
import { useLoaderData } from "react-router";
import { FaFileAlt, FaClock, FaGlobe, FaUser, FaCalendarAlt, FaDollarSign, FaListAlt, FaSignInAlt } from 'react-icons/fa';
import { Grid } from "react-loader-spinner";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet';

const VisaDetails = () => {
    const { User } = useContext(AuthContext);
    const visa = useLoaderData();
    const { countryImg, countryName, Age_restriction, Description, Fee, Processing_time, Validity, Visa_type, selectedDocuments, application_method } = visa;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const date = new Date()

    const handleApplyVisaBtn = () => {

        setIsModalOpen(true);  // Open modal when Apply button is clicked
    };

    const handleApplyBtn = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Your Application is Success!",
            showClass: {
                popup: `animate__animated animate__fadeInUp animate__faster`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOutDown animate__faster`
            }
        });
        const applyId = Math.floor(100000 + Math.random() * 900000);
        const form = new FormData(e.target);
        const fName = form.get("fName")
        const lName = form.get("lName")
        const fullName = `${fName} ${lName}`
        const applyDate = form.get("applyDate")
        const email = User?.email;
        console.log(applyId)
        const ApplyData = {
            email,
            fName,
            lName,
            fullName,
            applyDate,
            countryImg,
            countryName,
            Age_restriction,
            Description,
            Fee,
            Processing_time,
            Validity, Visa_type,
            selectedDocuments,
            application_method,
            applyId
        }
        fetch("https://visa-quest-server.vercel.app/myApplication", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(ApplyData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        setIsModalOpen(false);  // Close modal after success message
    };



    return (
        <div className="w-full min-h-screen pb-20 bg-[rgb(0,0,31)]">
            <Helmet>
                <title> Visa Details | Visa Quest</title>
            </Helmet>
            {/* Header and Image Section */}
            <div className="sm:h-[300px] h-[150px] w-full bg-[rgb(0,0,55)] relative">
                <div className="absolute w-8/12 top-1/2 left-1/2 transform -translate-x-1/2 mx-auto details-box bg-[rgb(0,0,66)]">
                    <div className="img-box">
                        <img className="w-full max-h-[400px] rounded-xl" src={countryImg} alt="" />
                    </div>
                </div>
                <div className="text-center pt-10 md:pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-blue-700 w-fit mx-auto capitalize">{countryName}</div>
            </div>

            {/* Visa Details Content */}
            <div className="w-10/12 mt-[150px] sm:mt-[200px] md:mt-[300px] mx-auto bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 rounded-lg shadow-lg md:p-10 py-6 px-4 text-white animate-fadeIn">
                <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">Details Information Of {countryName}</h1>

                {/* Content Sections */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4"><FaGlobe className="text-blue-300 text-xl" /><span className="text-lg font-medium">Description: {Description}</span></div>
                    <div className="flex items-center space-x-4"><FaFileAlt className="text-green-300 text-xl" /><span className="text-lg font-medium"><strong>Visa Type:</strong> {Visa_type}</span></div>
                    <div className="flex items-center space-x-4"><FaListAlt className="text-yellow-300 text-xl" /><span className="text-lg font-medium"><strong>Application Method: </strong>{application_method}</span></div>
                    <div className="flex items-center space-x-4"><FaClock className="text-purple-300 text-xl" /><span className="text-lg font-medium"><strong>Processing Time:</strong> {Processing_time}</span></div>
                    <div className="flex items-center space-x-4"><FaUser className="text-pink-300 text-xl" /><span className="text-lg font-medium"><strong>Age Restriction:</strong> {Age_restriction}</span></div>
                    <div className="flex items-center space-x-4"><FaCalendarAlt className="text-orange-300 text-xl" /><span className="text-lg font-medium"><strong>Validity:</strong> {Validity}</span></div>
                    <div className="flex items-center space-x-4"><FaDollarSign className="text-red-300 text-xl" /><span className="text-lg font-medium"><strong>Fee: </strong>{Fee}</span></div>

                    {/* Documents */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold"><strong>Required Documents:</strong></h3>
                        {selectedDocuments.map((document, idx) => (
                            <div key={idx} className="flex items-center space-x-3 bg-indigo-800 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                                <FaFileAlt className="text-blue-300" />
                                <span>{document}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Apply Button */}
                <div className="pb-5">
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgb(68, 85, 255)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleApplyVisaBtn}
                        className="mt-5 w-full mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
                    >
                        <FaSignInAlt className="mr-2 text-lg" />
                        <span>Apply For The Visa</span>
                    </motion.button>
                </div>
            </div>

            {/* Modal section  start */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white mx-4 md:mx-0 p-6 rounded-lg shadow-lg max-w-xl md:px-10 md:py-10 w-full">
                        <form onSubmit={handleApplyBtn} className='space-y-4' >
                            <div className="text-center text-2xl md:text-4xl font-bold">
                                Visa Application Form
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email"> Email :</label>
                                <input className='input input-bordered input-accent w-full' type="email" name="email" id="" value={User?.email} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fName"> First Name :</label>
                                <input required className='input input-bordered input-accent w-full' type="text" name="fName" id="" placeholder='Enter  Your First Name' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lName"> Last Name :</label>
                                <input required className='input input-bordered input-accent w-full' type="text" name="lName" id="" placeholder='Enter  Your Last Name' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fee"> Fee :</label>
                                <input className='input input-bordered input-accent w-full' type="text" name="fee" id="" value={Fee} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="applyDate"> Applied Date :</label>
                                <input className='input input-bordered input-accent w-full' type="text" name="applyDate" value={date.toLocaleString()} id="" />

                            </div>
                            <div className="grid grid-cols-2 gap-5 justify-between mt-6">

                                <motion.button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-secondary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Cancel
                                </motion.button>
                                <motion.button type='submit'

                                    className="btn  btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Apply
                                </motion.button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default VisaDetails;
