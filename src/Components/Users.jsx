import { useLoaderData } from "react-router";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Helmet } from "react-helmet";

const Users = () => {
    const userData = useLoaderData();
    console.log(userData)



    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[rgb(0,0,31)]">
            <Helmet>
                <title>Users History | Visa Quest</title>
            </Helmet>
            <div className="w-11/12 mx-auto py-20 overflow-auto">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-gradient-to-tr from-purple-700 via-pink-600 to-violet-600 bg-clip-text w-fit mx-auto">
                    User History : {userData?.length < 10 ? "0" + userData?.length : userData?.length}
                </div>
                {/* usre table */}
                <div className="w-full mt-6">
                    <table className="w-full overflow-x-scroll">
                        <thead>
                            <tr className="border bg-[rgb(0,0,44)] ">
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">Serial No</th>
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">Uaer Name</th>
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">User Email</th>
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">Verified</th>
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">Photo</th>
                                <th className="border py-3 text-white font-bold text-center  border-purple-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map((user, idx) => <tr className="border border-purple-700 text-white text-center" key={idx}>
                                    <td className="border border-purple-700">{idx + 1 < 10 ? "0" + (idx + 1) : idx + 1}</td>
                                    <td className="border border-purple-700">{user.displayName}</td>
                                    <td className="border border-purple-700">{user.email}</td>
                                    <td className="border border-purple-700">{user.emailVerified ? "Verified" : " Not Verified"}</td>
                                    <td className="border border-purple-700"><img className="size-10 rounded-full mx-auto m-3" src={user.photoURL} alt="" /></td>
                                    <td className="  border border-purple-700 gap-4">
                                        <div className="flex justify-center items-center">
                                            <button className="btn btn-sm btn-neutral rounded-full"><FiEdit className="text-yellow-500 font-bold font-xl"></FiEdit></button>
                                            <button className="btn btn-sm btn-warning rounded-full"><MdDeleteForever className="text-red-600 font-xl font-extrabold"></MdDeleteForever></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;