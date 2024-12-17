import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';


const PrivateRout = ({ children }) => {
    const { User, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Loading></Loading>
    }
    if (User && User.email) {
        return children;
    }
    return (
        <Navigate state={location.pathname} replace={true} to={"/login"}></Navigate>
    );
};

export default PrivateRout;