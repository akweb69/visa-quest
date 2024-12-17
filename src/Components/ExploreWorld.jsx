import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Link } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaInfoCircle } from 'react-icons/fa';
import Commingsoon from "./Commingsoon";


const ExploreWorld = () => {
    const { darkMode } = useContext(AuthContext);

    const [asia, setAsia] = useState([]);
    const [europe, setEurope] = useState([]);
    const [africa, setAfrica] = useState([]);
    const [america, setAmerica] = useState([]);



    useEffect(() => {
        fetch("allCountry.json")
            .then((res) => res.json())
            .then(data => {

                const allAsia = data.filter((b) => b.region === "Asia");
                const allEurope = data.filter((a) => a.region === "Europe");
                const allAfrica = data.filter((a) => a.region === "Africa");
                const allAmerica = data.filter((a) => a.region === "North America");

                setEurope(allEurope);
                setAsia(allAsia);
                setAfrica(allAfrica);
                setAmerica(allAmerica);
            })

    }, [])


    return (
        <div className={`w-full min-h-screen ${!darkMode ? "bg-[rgb(0,0,31)]" : "bg-white"} `}>
            <div className="text-center text-3xl md:text-5xl font-bold py-10 px-4 text-yellow-400">
                Explore The World!
            </div>

            <div className="w-10/12 mx-auto">
                <Tabs>
                    <TabList className="bg-[rgb(0,0,55)] text-white text-lg">
                        <Tab>Asia</Tab>
                        <Tab>Europe</Tab>
                        <Tab>Africa</Tab>
                        <Tab>North America</Tab>
                        <Tab>South America</Tab>
                        <Tab>Oceania</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=" md:grid md:grid-cols-3 pt-5 lg:grid-cols-4 space-y-4 md:space-y-0 gap-4">
                            {
                                asia.map(country =>
                                    <div key={country.id} className="relative border rounded-lg overflow-hidden w-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                                        {/* Image */}
                                        <img
                                            className="w-full max-h-[120px] object-cover border-b rounded-t-lg"
                                            src={country.flag}
                                            alt={country.country_name}
                                        />

                                        {/* Details Section */}
                                        <div className="px-4 p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {country.country_name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                Region: <span className="font-medium text-cyan-800 dark:text-cyan-400">{country.region || 'N/A'}</span>
                                            </p>
                                        </div>

                                        {/* Hover Effect */}
                                        <Link
                                            to={`/country-details/${country.country_name}`}
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,31,0.7)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FaInfoCircle className="text-3xl mb-2 animate-bounce" />
                                            <span className="font-medium text-lg tracking-wide transition-transform duration-300 transform group-hover:scale-110">
                                                See Details
                                            </span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    {/* europe */}
                    <TabPanel>
                        <div className=" md:grid md:grid-cols-3 pt-5 lg:grid-cols-4 space-y-4 md:space-y-0 gap-4">
                            {
                                europe?.map(country =>
                                    <div key={country.flag} className="relative border rounded-lg overflow-hidden w-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                                        {/* Image */}
                                        <img
                                            className="w-full max-h-[120px] object-cover border-b rounded-t-lg"
                                            src={country.flag}
                                            alt={country.country_name}
                                        />

                                        {/* Details Section */}
                                        <div className="p-1  px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {country.country_name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                Region: <span className="font-medium text-cyan-800 dark:text-cyan-400">{country.region || 'N/A'}</span>
                                            </p>
                                        </div>

                                        {/* Hover Effect */}
                                        <Link
                                            to={`/country-details/${country.country_name}`}
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,31,0.7)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FaInfoCircle className="text-3xl mb-2 animate-bounce" />
                                            <span className="font-medium text-lg tracking-wide transition-transform duration-300 transform group-hover:scale-110">
                                                See Details
                                            </span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    {/* africaq */}
                    <TabPanel>
                        <div className=" md:grid md:grid-cols-3 pt-5 lg:grid-cols-4 space-y-4 md:space-y-0 gap-4">
                            {
                                africa.map(country =>
                                    <div key={country.id} className="relative border rounded-lg overflow-hidden w-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                                        {/* Image */}
                                        <img
                                            className="w-full max-h-[120px] object-cover border-b rounded-t-lg"
                                            src={country.flag}
                                            alt={country.country_name}
                                        />

                                        {/* Details Section */}
                                        <div className="px-4 p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {country.country_name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                Region: <span className="font-medium text-cyan-800 dark:text-cyan-400">{country.region || 'N/A'}</span>
                                            </p>
                                        </div>

                                        {/* Hover Effect */}
                                        <Link
                                            to={`/country-details/${country.country_name}`}
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,31,0.7)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FaInfoCircle className="text-3xl mb-2 animate-bounce" />
                                            <span className="font-medium text-lg tracking-wide transition-transform duration-300 transform group-hover:scale-110">
                                                See Details
                                            </span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    {/* america */}
                    <TabPanel>
                        <div className=" md:grid md:grid-cols-3 pt-5 lg:grid-cols-4 space-y-4 md:space-y-0 gap-4">
                            {
                                america.map(country =>
                                    <div key={country.id} className="relative border rounded-lg overflow-hidden w-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                                        {/* Image */}
                                        <img
                                            className="w-full max-h-[120px] object-cover border-b rounded-t-lg"
                                            src={country.flag}
                                            alt={country.country_name}
                                        />

                                        {/* Details Section */}
                                        <div className="px-4 p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {country.country_name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                Region: <span className="font-medium text-cyan-800 dark:text-cyan-400">{country.region || 'N/A'}</span>
                                            </p>
                                        </div>

                                        {/* Hover Effect */}
                                        <Link
                                            to={`/country-details/${country.country_name}`}
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,31,0.7)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FaInfoCircle className="text-3xl mb-2 animate-bounce" />
                                            <span className="font-medium text-lg tracking-wide transition-transform duration-300 transform group-hover:scale-110">
                                                See Details
                                            </span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Commingsoon></Commingsoon>
                    </TabPanel>
                    <TabPanel>
                        <Commingsoon></Commingsoon>
                    </TabPanel>

                </Tabs></div>

        </div>
    );
};

export default ExploreWorld;