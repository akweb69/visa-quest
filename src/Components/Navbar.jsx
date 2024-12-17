import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip'
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { FaUsers } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { User, hanldeLogout, darkMode, setDarkMode } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const [isLogout, setIsLogout] = useState(false);

    // if (isLogout) {
    //     navigate("/")
    // }

    const handleLogoutBtn = () => {
        Swal.fire({
            text: "Are you sure?",
            title: "Logout",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logout!",
                    text: "Successfully Logout!.",
                    icon: "success"
                })
                    .then(() => {
                        hanldeLogout()

                    })
            }
        });

    }
    return (
        <div className={`w-full ${!darkMode ? "bg-[rgb(0,0,44)]" : "bg-purple-300"}`}>
            <div className="w-11/12 mx-auto py-4 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link to={"/"} className="text-2xl md:text-3xl lg:text-4xl font-bold font-visa text-transparent bg-gradient-to-tr from-pink-600 to-purple-600 bg-clip-text">
                        Visa<span className="font-quest">Quest</span>
                    </Link>
                </div>

                {/* Center - Links */}
                <div className="hidden lg:flex">
                    <ul className="flex text-white">
                        <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/">Home</NavLink></li>
                        <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/all-visas">All Visas</NavLink></li>
                        {
                            User && User?.email ? <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/add-visa">Add Visa</NavLink></li> : ""
                        }
                        {
                            User && User?.email ? <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/my-application-visa">My Visa Applications</NavLink></li> : ""
                        }
                        {
                            User && User?.email ? <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/my-added-visas">My Added Visas</NavLink></li> : ""
                        }
                        <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/Gallery">Gallery</NavLink></li>
                        <li className=" hover:text-purple-400"><NavLink className="px-3 py-2" to="/blogs">Blogs</NavLink></li>


                    </ul>
                </div>

                {/* Right - Buttons */}

                {
                    User && User.email ? <div className='flex gap-4 items-center'>
                        <div className="hidden lg:flex justify-end space-x-4">
                            <div id="clickable" className="">

                                <div className="profile-img rounded-full">
                                    <div className="">
                                        <img className='size-10 rounded-full  cursor-pointer' src={User.photoURL} alt="" />
                                    </div>
                                </div>


                                <div className="rounded-lg bg-[rgb(0,0,33)]">
                                    {/* Tooltip */}
                                    <Tooltip
                                        anchorSelect="#clickable"
                                        clickable
                                        className="z-50 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2"
                                    >
                                        {/* Profile Button */}
                                        <button
                                            className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                        >
                                            <FaUserCircle size={18} />
                                            <span>{User?.displayName}</span>
                                        </button>
                                        <Link to={"/profile"}
                                            className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                        >
                                            <FaUserCircle size={18} />
                                            <span>Profile</span>
                                        </Link>

                                        <Link className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition" to="/users" >
                                            <FaUsers size={18} />
                                            <span>Admin</span>
                                        </Link>


                                        {/* Logout Button */}
                                        <button onClick={handleLogoutBtn}
                                            className="flex items-center space-x-2 hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"

                                        >
                                            <FaSignOutAlt size={18} />
                                            <span>Logout</span>
                                        </button>
                                    </Tooltip>
                                </div>

                            </div>
                        </div>
                        {/* theme toggle */}
                        <div onClick={() => setDarkMode(!darkMode)} className="border cursor-pointer border-[rgb(0,0,88)] p-1 rounded-full">
                            {
                                !darkMode ? <MdDarkMode className='size-8 rounded-full text-white  bg-[rgb(0,0,37)]' /> : <CiLight className='size-8 rounded-full text-white ' />
                            }


                        </div>
                    </div>
                        :
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to={"/login"} className="px-4 py-2 text-white border border-purple-500 hover:bg-purple-600 rounded">
                                Login
                            </Link>
                            <Link to={"/register"} className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded">
                                Register
                            </Link>
                            {/* theme toggle */}
                            <div onClick={() => setDarkMode(!darkMode)} className="border cursor-pointer border-[rgb(0,0,88)] p-1 rounded-full">
                                {
                                    !darkMode ? <MdDarkMode className='size-8 rounded-full text-white  bg-[rgb(0,0,37)]' /> : <CiLight className='size-8 rounded-full text-white ' />
                                }


                            </div>
                        </div>
                }


                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex">
                    {
                        User && User?.email && <div>
                            <div className=" md:flex justify-end space-x-4">
                                <div id="clickable" className="">

                                    <div className="profile-img rounded-full">
                                        <div className="">
                                            <img className='size-10 rounded-full  cursor-pointer' src={User.photoURL} alt="" />
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-[rgb(0,0,33)]">
                                        {/* Tooltip */}
                                        <Tooltip
                                            anchorSelect="#clickable"
                                            clickable
                                            className="z-50 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2"
                                        >
                                            {/* Profile Button */}
                                            <button
                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                            >
                                                <FaUserCircle size={18} />
                                                <span>{User?.displayName}</span>
                                            </button>
                                            <Link to={"/profile"}
                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                            >
                                                <FaUserCircle size={18} />
                                                <span>Profile</span>
                                            </Link>
                                            <Link className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition" to="/users" >
                                                <FaUsers size={18} />
                                                <span>Admin</span>
                                            </Link>


                                            {/* Logout Button */}
                                            <button onClick={handleLogoutBtn}
                                                className="flex items-center space-x-2 hover:text-red-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"

                                            >
                                                <FaSignOutAlt size={18} />
                                                <span>Logout</span>
                                            </button>
                                        </Tooltip>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                    {/* <div onClick={() => setDarkMode(!darkMode)} className="border flex items-center cursor-pointer border-[rgb(0,0,88)] p-1 rounded-full mx-4">
                        {
                            !darkMode ? <MdDarkMode className='size-8 rounded-full text-white  bg-[rgb(0,0,37)]' /> : <CiLight className='size-8 rounded-full text-white ' />
                        }


                    </div> */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl bg-[rgba(0,0,0,0.3)] p-2 px-3 rounded-sm">
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                    {/* theme toggle */}

                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[rgb(0,0,44)] text-white">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/all-visas" onClick={() => setIsMenuOpen(false)}>All Visas</NavLink></li>
                        <li><NavLink to="/add-visa" onClick={() => setIsMenuOpen(false)}>Add Visa</NavLink></li>
                        <li><NavLink to="/my-added-visas" onClick={() => setIsMenuOpen(false)}>My Added Visas</NavLink></li>
                        <li><NavLink to="/my-application-visa" onClick={() => setIsMenuOpen(false)}>My Visa Applications</NavLink></li>

                        <li><NavLink to="/Gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
                        <li><NavLink to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink></li>
                        <li><NavLink to="/users" onClick={() => setIsMenuOpen(false)}>Admin Pannel</NavLink></li>
                        {
                            User && User.email ?
                                <div>
                                    <div className=" md:flex  space-x-4">
                                        <div onClick={handleLogoutBtn} to={"/login"} className="px-4 py-2 text-white border border-purple-500 hover:bg-purple-600 rounded">
                                            Log Out
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="flex flex-col justify-center md:hidden items-center space-y-4">
                                    <Link to={"/login"} className="px-4 py-2 text-white border border-purple-500 hover:bg-purple-600 rounded">
                                        Login
                                    </Link>
                                    <Link to={"/register"} className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded">
                                        Register
                                    </Link>
                                </div>
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
