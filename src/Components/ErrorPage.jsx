import { DNA } from "react-loader-spinner";
import { Link } from "react-router";
import pagle from "../assets/pagla nach.json"
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen flex-col flex justify-center items-center bg-[rgb(0,0,31)] bg-no-repeat bg-center bg-cover">
            <div className="max-h-60">
                <Lottie animationData={pagle} loop={true}></Lottie>
            </div>
            <div className="text-red-600 font-bold text-2xl md:text:4xl lg:text-6xl">
                Opps! Error
            </div>
            <div className="text-4xl md:text-7xl lg:text-9xl font-extrabold font-quest text-red-700">
                404
            </div>
            <div className="">
                <DNA
                    visible={true}
                    height="100"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"

                />

            </div>
            <div className=" home-btn w-fit mx-auto ">
                <Link to={'/'}>
                    <div className="capitalize py-3 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-pink-800 text-white cursor-pointer">
                        back to home
                    </div></Link>
            </div>
        </div>
    );
};

export default ErrorPage;