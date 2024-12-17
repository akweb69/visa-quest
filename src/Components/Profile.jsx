import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import imgp from "../assets/images/login-animate.svg"


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    ArcElement,
} from "chart.js";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
    FaBars,
    FaTimes,
    FaUser,
    FaCog,
    FaBell,
    FaChartBar,
    FaEnvelope,
    FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthContext/AuthProvider";
import Loading from "./Loading";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Profile = () => {

    const { User } = useContext(AuthContext);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("profile");

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Revenue",
                data: [2500, 2700, 2200, 2800, 3200, 3500, 4000],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const lineChartData = {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [
            {
                label: "Annual Traffic",
                data: [15000, 18000, 22000, 25000],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.3)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const pieChartData = {
        labels: ["Red", "Blue", "Green", "Yellow"],
        datasets: [
            {
                data: [12, 15, 9, 7],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],
            },
        ],
    };

    const doughnutChartData = {
        labels: ["Completed", "Pending", "In Progress"],
        datasets: [
            {
                data: [60, 25, 15],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
            },
        ],
    };

    const tabContent = {
        profile: (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 flex-col md:flex-row">Welcome Back, <span className="text-transparent bg-gradient-to-tr from-purple-800 to-pink-700 bg-clip-text font-extrabold">{User && User?.email ? User.displayName : "Mr. / Miss"}</span>  </h2>
                <div className="md:w-36 w-24 mx-auto p-1  my-5 border-purple-500 shadow-sm shadow-purple-800 border rounded-full">
                    {
                        User && User?.email ? <img className="w-full rounded-full" src={User?.photoURL} alt="" /> : <div><img src={imgp} alt="" /></div>
                    }
                </div>
                <div className="md:text-lg font-semibold text-center">
                    <h1 className=" md:text-lg font-semibold">
                        Name : {User?.displayName}
                    </h1>
                    <h1 className="">
                        Email : {User?.email}
                    </h1>
                    <h1 className="">
                        Phone :{User?.phone || " N/A"}
                    </h1>
                    <h1 className="">
                        Address: N/A
                    </h1>
                </div>


                <div className="my-6 flex justify-center">
                    <Link
                        to={"/update_profile"}
                        className="relative inline-flex items-center px-6 py-3 font-medium text-white group"
                    >

                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
                        <span className="absolute inset-0 w-full h-full bg-blue-600 rounded-lg shadow-xl group-hover:bg-blue-500"></span>
                        <span className="relative">Update Profile</span>
                    </Link>
                </div>

            </motion.div>
        ),
        analytics: (
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            >
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Revenue Bar Chart</h3>
                    <Bar data={barChartData} />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Annual Traffic Line Chart</h3>
                    <Line data={lineChartData} />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Poll Pie Chart</h3>
                    <Pie data={pieChartData} />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Task Completion Doughnut Chart</h3>
                    <Doughnut data={doughnutChartData} />
                </div>
            </motion.div>
        ),
        settings: (
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Settings</h2>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Change Password
                        </button>
                    </li>
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Update Email
                        </button>
                    </li>
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Notification Settings
                        </button>
                    </li>
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Account Privacy
                        </button>
                    </li>
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Linked Accounts
                        </button>
                    </li>
                    <li className="flex items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                            Deactivate Account
                        </button>
                    </li>
                </ul>
            </motion.div>
        ),
    };

    return (
        <div className="h-screen flex bg-gray-900 text-white">
            <Helmet>
                <title>Profile | {User?.displayName} | Visa Quest</title>
            </Helmet>
            <aside
                className={`bg-[rgb(0,0,31)] fixed lg:relative ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 z-50 w-64 h-full shadow-lg`}
            >
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                    <ul>
                        {[
                            { id: "profile", label: "Profile", icon: <FaUser /> },
                            { id: "analytics", label: "Analytics", icon: <FaChartBar /> },
                            { id: "settings", label: "Settings", icon: <FaCog /> },
                        ].map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setSelectedTab(tab.id)}
                                    className={`flex items-center p-4 mb-2 rounded-lg ${selectedTab === tab.id
                                        ? "bg-gray-700 text-white"
                                        : "hover:bg-gray-700 text-gray-400"
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="ml-3">{tab.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <main className="flex-1 lg:ml-64 overflow-auto">
                <div className="bg-[rgb(0,0,31)] p-4 flex items-center justify-between lg:hidden">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className="p-6 min-h-screen lg:w-full">{tabContent[selectedTab]}</div>
            </main>

        </div>
    );
};

export default Profile;
