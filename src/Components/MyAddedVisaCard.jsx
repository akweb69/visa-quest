import React, { useContext, useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaDollarSign, FaGlobe, FaPassport } from 'react-icons/fa6';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi'
import { AuthContext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
const MyAddedVisaCard = ({ sData, setAddedData }) => {
    const { Age_restriction, Description, Fee, Processing_time, Validity, Visa_type, countryImg, countryName, application_method, _id } = sData;
    const [openModal, setOpenModal] = useState(false);
    const [selectedDocuments, setSelectedDocuments] = useState([]);
    const { User } = useContext(AuthContext)
    const name = User?.displayName;
    const email = User?.email;
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedDocuments((prev) =>
            checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const countryName = form.get("countryName");
        const countryImg = form.get("countryImg");
        const Visa_type = form.get("Visa_type");
        const Processing_time = form.get("Processing_time");
        const Age_restriction = form.get("Age_restriction");
        const Fee = form.get("Fee");
        const Validity = form.get("Validity");
        const Description = form.get("Description");
        const application_method = form.get("method")

        const UpdatedVisaData = {
            selectedDocuments,
            countryImg,
            countryName,
            Visa_type,
            Processing_time,
            Age_restriction,
            Fee,
            Validity,
            Description,
            application_method,
            name,
            email

        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
            background: "rgb(0,0,31)",
            color: "#fff"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-quest-server.vercel.app/visas/${email}/${_id}`, {
                    method: 'PUT',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(UpdatedVisaData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {

                            fetch("https://visa-quest-server.vercel.app/visas")
                                .then(res => res.json())
                                .then(newVisas => {
                                    setAddedData(newVisas.filter(newvisa => newvisa.email === email))
                                })

                            setOpenModal(false)

                        }
                    })
                Swal.fire({
                    title: "Updated!",
                    text: "Your Visa has been Updated.",
                    icon: "success",
                    background: "rgba(20,67,12,01)",
                    color: "#fff"
                })

            }
        });


        console.log(UpdatedVisaData)
    }
    const handleDeleteBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-quest-server.vercel.app/visas/${email}/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            fetch("https://visa-quest-server.vercel.app/visas")
                                .then(res => res.json())
                                .then(newVisas => {
                                    setAddedData(newVisas.filter(newvisa => newvisa.email === email))
                                })

                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="visa-card">
            <div className="w-full  p-4 rounded-lg bg-[rgb(0,0,44)] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Section */}
                <div className="w-full mb-4 overflow-hidden rounded-lg">
                    <img
                        className="w-full max-h-[200px] md:h-[180px] rounded-lg hover:scale-105 transition-transform duration-500"
                        src={countryImg}
                        alt={countryName}
                    />
                </div>

                {/* Details Section */}
                <div className="text-white space-y-3">
                    <div className="flex items-center space-x-2 capitalize">
                        <FaGlobe className="text-blue-400" />
                        <span>Country Name: <strong>{countryName}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 capitalize">
                        <FaPassport className="text-yellow-400" />
                        <span>Visa Type: <strong>{Visa_type}</strong></span>
                    </div>

                    <div className="flex items-center space-x-2 capitalize">
                        <FaDollarSign className="text-red-400" />
                        <span className='flex items-center'>Total Fees: <strong className='flex items-center'> <FaDollarSign className="text-red-400" /> {Fee}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 capitalize">
                        <FaRegCalendarAlt className="text-purple-400" />
                        <span>Validity: <strong>{Validity}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 capitalize">
                        <FaRegCalendarAlt className="text-purple-400" />
                        <span>Processing Time: <strong>{Processing_time}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 capitalize">
                        <FaRegCalendarAlt className="text-purple-400" />
                        <span>Application Method: <strong>{application_method}</strong></span>
                    </div>

                </div>

                {/* Button Section */}
                <div className="mt-6 flex justify-center gap-4 w-full">
                    {/* Edit Button */}
                    <button onClick={() => setOpenModal(true)} className="flex items-center gap-2 px-6 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                        <FiEdit size={18} />
                        Edit
                    </button>

                    {/* Delete Button */}
                    <button onClick={handleDeleteBtn} className="flex items-center gap-2 px-6 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        <FiTrash2 size={18} />
                        Delete
                    </button>
                </div>
            </div>
            {
                openModal && <div className='w-10/12 mx-auto md:w-8/12 bg-white  fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 rounded-xl overflow-y-scroll h-[500px]'>

                    <div className="">
                        <div className="">
                            <div className=" w-full  mx-auto">
                                <form onSubmit={handleSubmit} className="w-full md:p-12 p-4 rounded-[1rem] md:grid grid-cols-2 gap-5 bg-[rgb(0,0,51)]">
                                    <h1 className="bg-gradient-to-tr from-purple-600 to-pink-700 bg-clip-text text-2xl md:text-3xl lg:text-4xl font-extrabold font-quest mb-5 text-transparent col-span-2 text-center">Visa Update Form </h1>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="countryImg">Country Image Url :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="countryImg" id="" placeholder='Enter Country Image URL' defaultValue={countryImg} />
                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="countryName">Country Name :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="countryName" id="" placeholder='Enter Country Name' defaultValue={countryName} />
                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Visa_type">Visa Type :</label>
                                        <select
                                            required
                                            className="w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900"
                                            name="Visa_type"
                                            id=""
                                            placeholder="Enter Country Name"
                                            defaultValue={Visa_type}
                                        >
                                            <option
                                                className="bg-purple-700 text-white font-semibold p-3"
                                                disabled
                                                value=""
                                            >
                                                Select Your Visa Type
                                            </option>
                                            <option
                                                className="bg-transparent text-black hover:bg-purple-700 hover:text-white transition-all p-3"
                                                value="student"
                                            >
                                                Student Visa
                                            </option>
                                            <option
                                                className="bg-transparent text-black hover:bg-purple-700 hover:text-white transition-all p-3"
                                                value="official"
                                            >
                                                Official Visa
                                            </option>
                                            <option
                                                className="bg-transparent text-black hover:bg-purple-700 hover:text-white transition-all p-3"
                                                value="tourist"
                                            >
                                                Tourist Visa
                                            </option>
                                            <option
                                                className="bg-transparent text-black hover:bg-purple-700 hover:text-white transition-all p-3"
                                                value="business"
                                            >
                                                Business Visa
                                            </option>
                                            <option
                                                className="bg-transparent text-black hover:bg-purple-700 hover:text-white transition-all p-3"
                                                value="work"
                                            >
                                                Work Visa
                                            </option>
                                        </select>

                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Processing_time">Processing Time :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Processing_time" id="" placeholder='Enter Processing Time' defaultValue={Processing_time} />
                                    </div>

                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Age_restriction">Age Restriction :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="number" name="Age_restriction" id="" placeholder='Enter Age Restriction' defaultValue={Age_restriction} />
                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Fee">Fee :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="number" name="Fee" id="" placeholder='Enter Fees Amount' defaultValue={Fee} />
                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Validity">Validity :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Validity" id="" placeholder='Validity' defaultValue={Validity} />
                                    </div>
                                    <div className="">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="method">Application Method :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="method" id="" placeholder='Application Method' defaultValue={application_method} />
                                    </div>
                                    {/* Description */}
                                    <div className="col-span-2">
                                        <label className='md:text-lg font-semibold text-purple-100' htmlFor="Description">Description :</label>
                                        <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Description" id="" placeholder='Enter Description' defaultValue={Description} />
                                    </div>
                                    {/* required */}
                                    <div className="w-full bg-[rgba(0,0,0,0.15)] p-6 col-span-2 text-white rounded-lg shadow-md">

                                        <h3 className="text-xl font-semibold text-white mb-4">Required Documents</h3>

                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Valid Passport"
                                                    id="valid_passport"
                                                    className="checkbox checkbox-primary"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label htmlFor="valid_passport" className="ml-2 text-white">Valid passport</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Visa application form"
                                                    id="Visa_application_form"
                                                    className="checkbox checkbox-primary"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label htmlFor="visa_application_form" className="ml-2 text-white">Visa application form</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Recent passport-sized photograph"
                                                    id="passport_photo"
                                                    className="checkbox checkbox-primary"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label htmlFor="passport_photo" className="ml-2 text-white">Recent passport-sized photograph</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Financial statement"
                                                    id="financial_statement"
                                                    className="checkbox checkbox-primary"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label htmlFor="financial_statement" className="ml-2 text-white">Financial statement</label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value="Travel insurance"
                                                    id="travel_insurance"
                                                    className="checkbox checkbox-primary"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label htmlFor="travel_insurance" className="ml-2 text-white">Travel insurance</label>
                                            </div>
                                        </div>

                                        {/* Display selected documents */}
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-white">Selected Documents:</h4>
                                            <ul className="list-disc pl-5 text-white">
                                                {selectedDocuments.length === 0
                                                    ? 'No documents selected.'
                                                    : selectedDocuments.map((doc) => <li key={doc}>{doc}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* buuton */}
                                    <div className="btn-box  mt-5" >
                                        <button type="submit" className="w-full p-4 cursor-pointer rounded-xl text-white gap-1 flex justify-center items-center  bg-gradient-to-tr from-purple-950 to-blue-950 hover:bg-gradient-to-tl ">
                                            <span>Update Visa</span>
                                            <FiPlus className="text-lg md:text-2xl font-extrabold text-purple-300"></FiPlus>
                                        </button>

                                    </div>
                                    <div className="btn-box  mt-5">
                                        <button onClick={() => setOpenModal(false)} className="w-full p-4 cursor-pointer rounded-xl text-white gap-1 flex justify-center items-center  bg-gradient-to-tr from-red-950 to-red-500 hover:bg-gradient-to-tl ">
                                            <span>Cancel Update</span>

                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </div>

    );
};

export default MyAddedVisaCard;