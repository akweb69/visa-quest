import React, { useContext, useState } from 'react';
import img1 from "../assets/images/login-animate.svg"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { motion } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../FireBaseAuth/Firebase';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const Register = () => {
    const { createUserWithEmailPassword, setUser, createUserWithGoogle } = useContext(AuthContext);
    const [eye, setEye] = useState(true);
    const [err, setErr] = useState("");
    const [matchPassword, setMatchPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    if (success) {
        navigate("/");
    }


    // ! handle form submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        setMatchPassword("");
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");
        const photo = form.get("photo")
        const confirmPassword = form.get("cPassword")
        const loginUser = {
            email,
            password,
            name,
            photo
        }
        console.log(loginUser)

        // ! password vallidation check
        const hasNumber = /(?=.*\d)/;
        const hasUppercase = /[A-Z]/;
        const hasLowercase = /[a-z]/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        if (password.length < 6) {
            setErr("Password must be 6 character!")
            return;
        }
        if (!hasNumber.test(password)) {
            setErr("Password must Have one number!")
            return;
        }
        if (!hasUppercase.test(password)) {
            setErr("Password must have at least one Uppercase char!")
            return;
        }
        if (!hasLowercase.test(password)) {
            setErr("Password must have at least one lowercase char!")
            return;
        }
        if (!hasSpecialChar.test(password)) {
            setErr("Password must have at least one Special char!")
            return;
        }
        if (password != confirmPassword) {
            setMatchPassword("Password Doesn't Macth!");
            return;
        }
        // ! create    user with email and password
        createUserWithEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            text: "Registration Success!",
                            title: `Welcome ${user.displayName} ! to Visa Quest`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        fetch("https://visa-quest-server.vercel.app/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                setSuccess(true)
                                console.log(data)
                            })
                    })
                    .catch((err) => {
                        console.log("kiiiiiiii")
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",

                        });
                    })
                console.log(user)
            })
            .catch((err) => {
                console.log("kiiiiiiii")
                Swal.fire({
                    icon: "error",

                    title: "Your Email Allready Used!",
                    showClass: {
                        popup: `
                          animate__animated
                          animate__fadeInUp
                          animate__faster
                        `
                    },
                    hideClass: {
                        popup: `
                          animate__animated
                          animate__fadeOutDown
                          animate__faster
                        `
                    }

                });
            })
    }
    // ! google login / register
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Welcome ! , ${result.user.displayName} Google Register Login Success!`,
                    showConfirmButton: false,
                    timer: 3000
                })
                fetch("https://visa-quest-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(result.user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .then(() => {
                        setSuccess(true)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // ! handle form submit function



    return (
        <div className='w-full py-20 min-h-screen bg-[rgb(0,0,31)] flex justify-center items-center'>
            <Helmet>
                <title> Register | Visa Quest</title>
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
                                    <h1 className="text-center text-3xl md:text-4xl font-bold font-quest text-purple-400 mb-4 md:mb-10">Register</h1>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="name">User Name :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type="text" name="name" id="" placeholder='Enter Your Name' />
                                    </div>
                                    <div className="mt-5">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="photo">Photo URL :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type="text" name="photo" id="" placeholder='Enter Photo URL' />
                                    </div>
                                    <div className="mt-5">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="email">Email :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type="email" name="email" id="" placeholder='example@gmail.com' />
                                    </div>
                                    <div className="mt-5 relative">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="password">Password :</label>
                                        <input required className='w-full    rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type={eye ? "password" : "text"} name="password" id="" defaultValue={"pxQ12d#d$"} />
                                        <div onClick={() => setEye(!eye)} className="text-purple-600 text-xl cursor-pointer  rounded-full hover:bg-purple-950   absolute bottom-2 btn-sm right-2 flex justify-center items-center">
                                            {
                                                eye ? <IoIosEye /> : <IoIosEyeOff />
                                            }
                                        </div>

                                    </div>
                                    <div className="text-sm text-red-600 mt-3" >
                                        {
                                            err
                                        }
                                    </div>
                                    <div className="mt-5 relative">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="cPassword">Confirm Password :</label>
                                        <input required className='w-full    rounded-lg px-4 py-3 bg-transparent text-white input-primary border border-purple-900' type={eye ? "password" : "text"} name="cPassword" id="" defaultValue={"pxQ12d#d$"} />
                                        <div onClick={() => setEye(!eye)} className="text-purple-600 text-xl cursor-pointer  rounded-full hover:bg-purple-950   absolute bottom-2 btn-sm right-2 flex justify-center items-center">
                                            {
                                                eye ? <IoIosEye /> : <IoIosEyeOff />
                                            }
                                        </div>

                                    </div>
                                    <div className="text-sm text-red-600 mt-3" >
                                        {
                                            matchPassword
                                        }
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
                                            <span>Register</span>
                                        </motion.button>
                                    </div>
                                    <div className="divider text-purple-600 divider-primary">OR</div>
                                    <div onClick={handleGoogleLogin} className="flex justify-center items-center">
                                        <motion.button
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor: "rgb(68, 85, 255)",
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-5 w-full  mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-6 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
                                        >
                                            <FaGoogle className="mr-2 text-lg" />
                                            <span>Register With Google</span>
                                        </motion.button>
                                    </div>
                                    <div className="mt-4 text-sm text-purple-50">
                                        <h1 className="text-center  font-medium text-gray-700 mt-4">
                                            Allready Have an Account?{" "}
                                            <Link
                                                to="/login"
                                                className="text-blue-700 font-semibold underline hover:text-blue-900 transition-colors duration-300"
                                            >
                                                Login
                                            </Link>
                                        </h1>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;