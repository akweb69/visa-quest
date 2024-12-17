import React, { useState } from "react";
import { FaCog } from "react-icons/fa"; // Importing a gear icon
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateProfile = () => {

    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const handlesubmit = e => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setSuccess(true);
                Swal.fire({
                    title: "Updated!",
                    text: "Your file has been Updated.",
                    icon: "success"
                });
            }
        });

    }
    if (success) {
        navigate("/")
    }






    return (
        <div className="min-h-screen flex items-center justify-center md:bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <Helmet>
                <title>Update Profile | Visa Quest</title>
            </Helmet>
            <div className="container w-11/12 md:grid md:grid-cols-2 gap-10 bg-gray-900 rounded-lg shadow-lg p-5 md:p-10">
                {/* Left Side Gear Icon */}
                <div className="flex justify-center items-center">
                    <div className="text-purple-500 animate-spin">
                        <FaCog size={150} />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Update Profile
                    </h2>
                    <form
                        onSubmit={handlesubmit}
                        className="space-y-6 bg-gray-800 p-5 rounded-lg"
                    >
                        <div className="flex flex-col">
                            <label htmlFor="photoURL" className="text-lg mb-2 font-semibold">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photo"
                                className="p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your photo URL"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg mb-2 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"

                                className="p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition-all duration-300"
                        >
                            Update Information
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
