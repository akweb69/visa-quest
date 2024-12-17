import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddVisas = () => {
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

        const addVisaData = {
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
        console.log(addVisaData)
        fetch("https://visa-quest-server.vercel.app/visas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addVisaData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Added A New Visa",
                    showConfirmButton: true,

                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            e.target.reset();
                        }

                    })
            })
            .catch((err) => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "An Error Occur!",
                    showConfirmButton: true,

                })
            })



    }
    return (
        <div className=' bg-gradient-to-tr py-4 md:py-20 from-[rgb(0,0,34)] to-[rgb(0,0,44)] min-h-screen'>
            <Helmet>
                <title> Add Visa | Visa Quest</title>
            </Helmet>
            <div className="w-11/12 h-full mx-auto flex flex-col justify-center items-center py-12 md:py-0">


                <div className="w-full">
                    <div className="md:w-10/12 w-full form-add mx-auto">
                        <form onSubmit={handleSubmit} className="w-full md:p-12 p-4 rounded-[1rem] md:grid grid-cols-2 gap-5 bg-[rgb(0,0,51)]">
                            <h1 className="bg-gradient-to-tr from-purple-600 to-pink-700 bg-clip-text text-2xl md:text-3xl lg:text-4xl font-extrabold font-quest mb-5 text-transparent col-span-2 text-center">Add A New Visa </h1>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="countryImg">Country Image Url :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="countryImg" id="" placeholder='Enter Country Image URL' />
                            </div>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="countryName">Country Name :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="countryName" id="" placeholder='Enter Country Name' />
                            </div>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="Visa_type">Visa Type :</label>
                                <select
                                    required
                                    className="w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900"
                                    name="Visa_type"
                                    id=""
                                    placeholder="Enter Country Name"
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
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Processing_time" id="" placeholder='Enter Processing Time' />
                            </div>

                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="Age_restriction">Age Restriction :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="number" name="Age_restriction" id="" placeholder='Enter Age Restriction' />
                            </div>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="Fee">Fee :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="number" name="Fee" id="" placeholder='Enter Fees Amount' />
                            </div>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="Validity">Validity :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Validity" id="" placeholder='Validity' />
                            </div>
                            <div className="">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="method">Application Method :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="method" id="" placeholder='Application Method' />
                            </div>
                            {/* Description */}
                            <div className="col-span-2">
                                <label className='md:text-lg font-semibold text-purple-100' htmlFor="Description">Description :</label>
                                <input required className='w-full rounded-lg px-4 py-3 bg-transparent text-white input-primary border mt-1 border-purple-900' type="text" name="Description" id="" placeholder='Enter Description' />
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
                            <div className="btn-box col-span-2 mt-5" >
                                <button type="submit" className="w-full p-4 cursor-pointer rounded-xl text-white gap-1 flex justify-center items-center  bg-gradient-to-tr from-purple-950 to-violet-500 hover:bg-gradient-to-tl ">
                                    <span>Add new visa</span>
                                    <FiPlus className="text-lg md:text-2xl font-extrabold text-purple-300"></FiPlus>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddVisas;