import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';
import MyApplicationVisaCard from './MyApplicationVisaCard';
import { MdNearbyError } from "react-icons/md";
import { Helmet } from 'react-helmet';
import { FiSearch } from "react-icons/fi";
const MyApplicationVisa = () => {
    const { User } = useContext(AuthContext);
    const loaderData = useLoaderData();
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        const newData = loaderData.filter(singleVisa => singleVisa?.email === User.email)
        setFilterData(newData)
    }, [])

    const [inputSearch, setInputSearch] = useState("");
    const [inputValue, setInputValue] = useState("")
    const handleSearch = () => {
        setInputSearch(inputValue);
    }

    return (
        <div className='bg-[rgb(0,0,31)] min-h-screen w-full'>
            <Helmet>
                <title>My Applications | Visa Quest</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                <div className="text-center pt-10 md:pt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr 
                from-orange-500 to-blue-700 w-fit mx-auto capitalize">My Application visa</div>

                <div className="flex w-10/12 md:w-1/2 pt-4 mx-auto justify-between">
                    <div className="w-full flex items-center gap-2">
                        <input
                            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                            className="w-full py-2 px-4 bg-transparent border border-purple-700 rounded-lg text-white focus:outline-none"
                            type="text"
                            placeholder="Search By Country Name"
                        />
                        <button
                            onClick={handleSearch}
                            className="py-2 px-4 flex items-center gap-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                        >
                            <FiSearch className="text-lg" />
                            <span className="hidden sm:block">Search</span>
                        </button>
                    </div>

                </div>

                <div className="">
                    {
                        filterData.length === 0 ? <div className='text-center col-span-3 flex items-center text-xl mt-32 flex-col justify-center md:text-3xl font-bold text-red-400'>
                            <MdNearbyError

                                className='text-[170px] md:text[300px] text-red-600' />

                            You Didn't Apply Any  Visa
                        </div> :
                            <div className='md:grid grid-cols-3 gap-10 space-y-7 md:space-y-0 md:py-14 py-5'>
                                {
                                    filterData.filter(sVisa => sVisa.countryName.toLowerCase().includes(inputSearch)).map((myVisa) => <MyApplicationVisaCard key={myVisa._id} filterData={filterData} setFilterData={setFilterData} myVisa={myVisa} ></MyApplicationVisaCard>)
                                }
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default MyApplicationVisa;