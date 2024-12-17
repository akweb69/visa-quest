import { FaGlobe, FaPassport, FaClock, FaDollarSign, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const AllVisaCard = ({ visa }) => {
    const { Age_restriction, Description, Fee, Processing_time, Validity, Visa_type, countryImg, countryName, email, name, selectedDocuments, application_method, _id } = visa;
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
                        <FaCalendarAlt className="text-purple-400" />
                        <span>Validity: <strong>{Validity}</strong></span>
                    </div>

                </div>

                {/* Button Section */}
                <div className="mt-6 flex justify-center w-full overflow-hidden rounded-lg">
                    <Link to={`visas/${_id}`} className="btn btn-wide btn-accent text-white font-semibold rounded-lg py-2  px-6 hover:bg-[rgb(0,0,90)] hover:scale-105 transition-all duration-300">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllVisaCard;