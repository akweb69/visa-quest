import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../AuthContext/AuthProvider';
import MyAddedVisaCard from './MyAddedVisaCard';
import { Audio } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

const MyAddedVisas = () => {
    const { User } = useContext(AuthContext);
    const [myAddedData, setAddedData] = useState([]);
    const loaderData = useLoaderData();
    const myAddedDataFilter = loaderData?.filter(data => data?.email === User?.email);
    useEffect(() => {
        setAddedData(myAddedDataFilter);
    }, [])

    return (
        <div className='w-full min-h-screen bg-[rgb(0,0,31)] '>
            <Helmet>
                <title>My Added Visa | Visa Quest</title>
            </Helmet>
            <div className="text-2xl md:text-4xl font-bold text-center pt-6 pb-2 text-purple-100 ">
                My Added Visas
            </div>
            {
                myAddedData.length > 0 && <div className="text-white w-11/12 mx-auto text-xs  text-center">My   total added visas is : {myAddedData.length < 10 ? "0" + myAddedData.length : myAddedData.length} </div>
            }
            <div className="w-11/12 mx-auto">
                {
                    myAddedData.length <= 0 ?
                        <div className='w-full flex-col  flex justify-center items-center' >
                            <div className="flex flex-wrap justify-center md:pt-28">
                                <Audio
                                    height="100"
                                    width="100"
                                    color="#4fa94d"
                                    ariaLabel="audio-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="wrapper-class"
                                    visible={true}
                                />
                                <Audio
                                    height="100"
                                    width="100"
                                    color="#44d"
                                    ariaLabel="audio-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="wrapper-class"
                                    visible={true}
                                />
                                <Audio
                                    height="100"
                                    width="100"
                                    color="#f4d"
                                    ariaLabel="audio-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="wrapper-class"
                                    visible={true}
                                />
                            </div>
                            <div className="text-center py-2 text-3xl md:text-5xl font-bold">
                                You didn't add any visa before!
                            </div>
                            <Link to={"/add-visa"} className="btn btn-neutral btn-wide">
                                Add My Visa
                            </Link>
                        </div>
                        :
                        <div className="md:grid grid-cols-2 space-y-5 md:space-y-0 lg:grid-cols-3 py-10 gap-10">
                            {
                                myAddedData.map(sData => <MyAddedVisaCard setAddedData={setAddedData} sData={sData} key={sData._id}></MyAddedVisaCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyAddedVisas;