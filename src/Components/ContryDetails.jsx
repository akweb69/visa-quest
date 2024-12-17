import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router';

const ContryDetails = () => {
    const loaderData = useLoaderData();
    const params = useParams();
    const filterData = loaderData.filter(count => count.country_name === params.id);
    console.log(filterData)
    console.log(params.id)
    const { id, country_name, flag, description, places, b1, b2, b3, b4, capital, area, people, language, visa_policy, currency, region
    } = filterData[0];
    // console.log(loaderData)
    return (
        <div className='w-full bg-[rgb(0,0,31)] py-20'>
            <Helmet>
                <title> {country_name}| Visa Quest</title>
            </Helmet>
            <div className="w-10/12 mx-auto">
                <div className="md:grid grid-cols-3  gap-10 ">
                    <div className="col-span-2 text-white space-y-2">
                        <div className="text-2xl md:text-4xl text-white">
                            Country Name : {country_name}
                        </div>
                        <div className="md:text-xl ">
                            <strong> Region :</strong> {region}
                        </div>
                        <div className=" md:text-xl ">
                            <strong>Capital :</strong> {capital}
                        </div>
                        <div className=" md:text-xl ">
                            <strong>Language :</strong> {language}
                        </div>
                        <div className=" md:text-xl ">
                            <strong>Currency :</strong> {currency}
                        </div>
                        <div className=" md:text-xl ">
                            <strong>Area :</strong> {area}
                        </div>
                        <div className=" md:text-xl ">
                            <strong>Population :</strong> {people}
                        </div>
                    </div>
                    <div className="w-full border p-1 mt-4 md:mt-0 border-purple-700 rounded-xl">
                        <img className='w-full h-full  rounded-xl' src={flag} alt="" />
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-10 pt-10 mt-10 ">
                    <div className="w-full p-1 rounded-3xl border border-purple-900">
                        <img className='w-full h-full rounded-3xl ' src={b3} alt="" />
                    </div>
                    <div className="w-full p-1 rounded-3xl border border-purple-900">
                        <img className='w-full h-full rounded-3xl ' src={b4} alt="" />
                    </div>
                    <div className="w-full p-1 rounded-3xl border border-purple-900">
                        <img className='w-full h-full rounded-3xl ' src={b2} alt="" />
                    </div>
                    <div className="p-4 text-white">
                        <strong className='text-2xl md:text-3xl mr-2'>Details : </strong>
                        {description}
                    </div>
                    <div className="p-4 text-white justify-center h-full flex flex-col">
                        <strong className='text-2xl md:text-3xl mr-2'> Beauty & Historical Places:</strong>
                        <ul className="">
                            {
                                places.map((pl, idx) => <li key={idx}>{idx + 1}.  {pl}</li>)
                            }
                        </ul>
                    </div>
                    <div className="w-full p-1 rounded-3xl border border-purple-900">
                        <img className='w-full h-full rounded-3xl ' src={b1} alt="" />
                    </div>
                    <div className="w-full p-1 rounded-3xl border border-purple-900">
                        <img className='w-full h-full rounded-3xl ' src={b3} alt="" />
                    </div>

                    <div className="p-4 text-white">
                        <strong className='text-2xl md:text-3xl mr-2'>Visa Policy : </strong>
                        {visa_policy}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContryDetails;