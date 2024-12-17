import React, { useContext, useState } from 'react';
import img1 from "../assets/images/login-animate.svg"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import Loading from './Loading';
import { Helmet } from 'react-helmet';


const Login = () => {

    const [eye, setEye] = useState(true);
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();
    const { loginWithEmailPassword, createUserWithGoogle } = useContext(AuthContext);

    if (success) {
        navigate("/");
    }



    // ! handle form submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        const loginUser = {
            email,
            password
        }
        // ! handle user signin with email and password
        loginWithEmailPassword(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome Back, Mr./Miss : ${loginUser.displayName} Your Login Success!`,
                    showConfirmButton: true,
                    timer: 7000
                })


            })
            .then(() => {
                setSuccess(true);
            })

            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Invalid Email Or Password",
                });

            })
    }
    // ! handle form submit function

    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome Back , ${result.user.displayName} Login Success!`,
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        setSuccess(true)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='w-full py-20 md:py-0 min-h-screen bg-[rgb(0,0,31)] flex justify-center items-center'>
            <Helmet>
                <title> Login | Visa Quest</title>
            </Helmet>
            <div className="w-11/12 mx-auto md:grid grid-cols-2 space-y-10 md:space-y-0 justify-center items-center">
                <div className="">
                    <img className='w-full' src={img1} alt="" />
                </div>
                <div className=" h-full flex justify-center md:justify-start items-center ">
                    <div className="form-box md:w-10/12 w-full">
                        <div className="md:p-10 p-4 py-10  w-full  bg-[rgb(0,0,44)] rounded-[1rem]">
                            <div className="">
                                <form onSubmit={handleSubmit} >
                                    <h1 className="text-center text-3xl md:text-4xl font-bold font-quest text-purple-400 mb-4 md:mb-10">Login</h1>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="email">Email :</label>
                                        <input className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type="email" name="email" id="" defaultValue={"example@gmail.com"} />
                                    </div>
                                    <div className="mt-5 relative">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="password">Password :</label>
                                        <input className='w-full    rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type={eye ? "password" : "text"} name="password" id="" defaultValue={"pxQ12d#d$"} />
                                        <div onClick={() => setEye(!eye)} className="text-purple-600 text-xl cursor-pointer  rounded-full hover:bg-purple-950   absolute bottom-2 btn-sm right-2 flex justify-center items-center">
                                            {
                                                eye ? <IoIosEye /> : <IoIosEyeOff />
                                            }
                                        </div>

                                    </div>
                                    <div className="">
                                        <motion.button
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor: "rgb(68, 85, 255)",
                                            }}
                                            whileTap={{ scale: 0.95 }} // Adds click animation
                                            className="mt-5 w-full  mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
                                        >
                                            <FaSignInAlt className="mr-2 text-lg" />
                                            <span>Login</span>
                                        </motion.button>
                                    </div>

                                </form>
                                <div className="text-sm hover:underline mt-4 text-white cursor-pointer">
                                    Forget Password
                                </div>
                                <div className="divider text-purple-600 divider-primary">OR</div>
                                <div onClick={handleGoogleLogin} className="">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: "rgb(68, 85, 255)",
                                        }}
                                        whileTap={{ scale: 0.95 }} // Adds click animation
                                        className="mt-5 w-full  mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
                                    >
                                        <FaGoogle className="mr-2 text-lg" />
                                        <span>Login With Google</span>
                                    </motion.button>
                                </div>



                                <div className="mt-4 text-sm text-purple-50">
                                    <h1 className="text-center  font-medium text-gray-700 mt-4">
                                        Don’t Have an Account?{" "}
                                        <Link
                                            to="/register"
                                            className="text-blue-700 font-semibold underline hover:text-blue-900 transition-colors duration-300"
                                        >
                                            Register
                                        </Link>
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;