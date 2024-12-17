import { FaCalendarAlt, FaClock, FaDollarSign, FaExternalLinkAlt, FaGlobe, FaPassport } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const MyApplicationVisaCard = ({ myVisa, filterData, setFilterData }) => {
    const { setLoading } = useContext(AuthContext);
    const {
        email,
        fName,
        lName,
        fullName,
        applyDate,
        countryImg,
        countryName,
        Age_restriction,
        Description,
        Fee,
        Processing_time,
        Validity,
        Visa_type,
        applyId,
        selectedDocuments,
        application_method,
        _id } = myVisa;

    const handleCancelBtn = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel My Application!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-quest-server.vercel.app/myApplication/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Applicatin Has Been Cancel.",
                                icon: "success"
                            });
                            const remaining = filterData.filter(ss => ss._id !== _id);
                            setFilterData(remaining);
                        }
                    })

            }
        });

    }
    return (
        <div className="w-full rounded-xl bg-[rgb(0,0,44)] shadow-md shadow-[rgb(0,0,66)]">
            <div className="w-full">
                <img src={countryImg} alt="" className="w-full max-h-[250px] rounded-xl" />
            </div>
            <div className="p-4 text-white md:py-10">
                <div className="text-lg text-red-500 md:text-xl">
                    Application Id : {applyId}
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaGlobe className="text-blue-400" />
                    <span>Country Name: <strong>{countryName}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaPassport className="text-yellow-400" />
                    <span>Visa Type: <strong>{Visa_type}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaClock className="text-green-400" />
                    <span>Processing Time: <strong>{Processing_time}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaDollarSign className="text-red-400" />
                    <span className='flex items-center'>Total Fees: <strong className='flex items-center'> <FaDollarSign className="text-red-400" /> {Fee}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaCalendarAlt className="text-purple-400" />
                    <span>Validity: <strong>{Validity}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaExternalLinkAlt className="text-pink-400" />
                    <span>Application Method: <strong>{application_method}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <GrValidate className="text-pink-400" />
                    <span>Applied Date & Time: <strong>{applyDate}</strong></span>
                </div>
                <div className="flex items-center space-x-2 capitalize">
                    <FaUserGraduate className="text-pink-400" />
                    <span>Applicant's Name: <strong>{fullName}</strong></span>
                </div>
                <div className="flex  items-center space-x-2 capitalize">
                    <MdEmail className="text-pink-400" />
                    <span>Applicant's Email: <strong>{email}</strong></span>
                </div>
                <div className="mt-6 w-full mx-auto">
                    <div onClick={handleCancelBtn} className="btn w-full btn-accent text-white">
                        Cancel
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyApplicationVisaCard;