import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthProvider";

const ApplicationTracker = ({ darkMode }) => {
    const [applicationId, setApplicationId] = useState("");
    const [loading, setLoading] = useState(false);
    const { User } = useContext(AuthContext);
    const [applyData, setApplyData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = () => {
        if (!applicationId.trim()) {
            setError("Please enter a valid Application ID");
            return;
        }

        setLoading(true);
        setError("");
        setApplyData(null);

        fetch("https://visa-quest-server.vercel.app/myApplication")
            .then((res) => res.json())
            .then((data) => {
                const myData = data.filter((d) => d.email === User.email);
                const myApply = myData.find((dd) => dd.applyId == applicationId);

                if (myApply) {
                    setApplyData(myApply);
                    setError("");
                } else {
                    setError("No application found with the provided ID.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("An error occurred while fetching the data.");
                setLoading(false);
            });
    };

    return (
        <div className={`py-20 flex flex-col justify-center items-center ${!darkMode ? "bg-[rgb(0,0,31)]" : "bg-white"} text-white`}>
            <div className={`md:max-w-lg w-11/12 mx-auto p-6 ${!darkMode ? "bg-[rgb(0,0,31)] text-white" : "bg-base-200 text-black"} shadow-lg rounded-lg border-2 border-[#fff]`}>
                <h1 className="text-2xl font-bold text-center mb-6">
                    Track Your Application
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <input
                        type="text"
                        placeholder="Enter Application ID"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        className="flex-grow px-4 py-2 border rounded-md text-white bg-[rgb(255,255,255,0.1)] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="mt-3 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none flex items-center justify-center w-full md:w-auto"
                    >
                        <FaSearch className="mr-2" />
                        <span>Search</span>
                    </button>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-center">{error}</p>}

                {/* Loading State */}
                {loading && (
                    <div className="text-blue-500 text-center">Loading...</div>
                )}

                {/* Application Details */}
                {!loading && applyData && (
                    <div className="w-full border rounded-lg border-purple-900 bg-[rgba(19,24,46,0.6)] mt-4">
                        <img src={applyData?.countryImg} alt="Country" className="w-full" />
                        <div className="flex gap-2 pt-5 justify-between p-4 items-center">
                            <div>
                                <h1>
                                    <strong>Full Name: </strong>
                                    {applyData?.fullName}
                                </h1>
                                <h1>
                                    <strong>Email: </strong>
                                    {User?.email}
                                </h1>
                                <p>
                                    <strong>Apply Date: </strong>
                                    {applyData?.applyDate}
                                </p>
                            </div>
                            <div>
                                <img
                                    className="rounded-full"
                                    src={User?.photoURL}
                                    alt="User"
                                />
                            </div>
                        </div>
                        <div className="p-4 border-t border-t-purple-950">
                            <p>
                                <strong>Country Name: </strong>
                                {applyData?.countryName}
                            </p>
                            <p>
                                <strong>Visa Type: </strong>
                                {applyData?.Visa_type}
                            </p>
                            <p>
                                <strong>Processing Time: </strong>
                                {applyData?.Processing_time}
                            </p>
                            <p>
                                <strong>Application Method: </strong>
                                {applyData?.application_method}
                            </p>
                            <p>
                                <strong>Fee: $</strong> {applyData?.Fee}
                            </p>
                            <p className="capitalize text-center">
                                Your process is running
                            </p>
                            <ul className="steps steps-vertical">
                                <li className="step step-primary">Application</li>
                                <li className="step step-primary">Review</li>
                                <li className="step">Verification</li>
                                <li className="step">Confirm</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationTracker;
