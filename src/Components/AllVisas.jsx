import { useLoaderData } from "react-router";
import AllVisaCard from "./AllVisaCard";
import { TbFilterSearch } from "react-icons/tb";
import { useState } from "react";
import { Helmet } from "react-helmet";


const AllVisas = () => {
    const LoadallVisas = useLoaderData();
    const [allVisas, setAllVisas] = useState(LoadallVisas)
    const [title, setTitle] = useState("")
    const [selectedValue, setSelectedValue] = useState('');
    const [opps, setOpps] = useState("");
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleFilterBtn = () => {

        setTitle(selectedValue);
        allVisas.map(visa => console.log(visa.Visa_type))

        const remainingVisa = [...LoadallVisas].filter(visas => visas.Visa_type === selectedValue.toLowerCase())
        // console.log(remainingVisa)
        // console.log(selectedValue.toLocaleLowerCase())
        setAllVisas(remainingVisa)
        setOpps(selectedValue);
    }
    // console.log(allVisas)
    return (
        <div className='w-full min-h-screen bg-[rgb(0,0,31)] py-4'>
            <Helmet>
                <title>All Visas | Visa Quest</title>
            </Helmet>
            <div className="w-11/12 mx-auto rounded-lg  flex justify-between mb-4 border-green-300 border overflow-hidden">
                <select onChange={handleChange} name="filterInput" className="select select-accent w-full rounded-none bg-transparent text-white outline-none">
                    <option disabled selected>Filter By Visa Type</option>
                    <option value={"student"} className="text-black">Student Visa</option>
                    <option value={"official"} className="text-black">Official Visa</option>
                    <option value={"tourist"} className="text-black">Tourist Visa</option>
                    <option value={"business"} className="text-black">Business Visa </option>
                    <option value={"work"} className="text-black">Work Visa</option>
                </select>
                <div onClick={handleFilterBtn} className="flex cursor-pointer items-center justify-center gap-1 px-4 md:px-10 bg-violet-600 text-white">
                    <TbFilterSearch className="text-green-200 " />
                    Filter
                </div>
            </div>
            <div className="w-11/12 mx-auto py-4 flex flex-col justify-center items-center ">
                <div className="text-transparent bg-gradient-to-r from-pink-500 font-quest via-purple-500 to-blue-500 mb-10 bg-clip-text text-3xl md:text-5xl font-bold">
                    {
                        title.length > 0 ? title.toUpperCase() + " VISAS" : "ALL VISAS"
                    }
                </div>

                {
                    allVisas?.length === 0 ?
                        <div>
                            <div className="text-red-600 font-bold text-2xl md:text:4xl lg:text-6xl text-center">
                                Opps!
                            </div>
                            <div className="py-4 text-2xl font-semibold text-center text-red-400">
                                There are no {opps} Visas ... the {opps} visa is comming soon... <br />
                                Stay With Us!
                            </div>
                        </div>
                        :
                        <div className="md:grid md:grid-cols-3  lg:grid-cols-4 gap-5 space-y-6 md:space-y-0">
                            {
                                allVisas?.map(visa => <AllVisaCard key={visa._id} visa={visa}></AllVisaCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllVisas;