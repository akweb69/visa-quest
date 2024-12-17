import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Components/HomeLayout';
import HomePage from '../Components/HomePage';
import Login from '../Components/Login';
import Register from '../Components/Register';
import AddVisas from '../Components/AddVisas';
import PrivateRout from '../PrivetRout/PrivateRout';
import ErrorPage from '../Components/ErrorPage';
import AllVisas from '../Components/AllVisas';
import VisaDetails from '../Components/VisaDetails';
import MyApplicationVisa from '../Components/MyApplicationVisa';
import Users from '../Components/Users';
import MyAddedVisas from '../Components/MyAddedVisas';
import ContryDetails from '../Components/ContryDetails';
import Blogs from '../Components/Blogs';
import Gallery from '../Components/Gallery';
import Profile from '../Components/Profile';
import UpdateProfile from '../Components/UpdateProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/update_profile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/add-visa",
                element: <PrivateRout><AddVisas></AddVisas></PrivateRout>
            },
            {
                path: "/my-added-visas",
                element: <PrivateRout><MyAddedVisas></MyAddedVisas></PrivateRout>,
                loader: () => fetch("https://visa-quest-server.vercel.app/visas")

            },
            {
                path: "/my-application-visa",
                element: <PrivateRout><MyApplicationVisa></MyApplicationVisa></PrivateRout>,
                loader: () => fetch("https://visa-quest-server.vercel.app/myApplication")

            },
            {
                path: "all-visas",
                element: <AllVisas></AllVisas>,
                loader: () => fetch("https://visa-quest-server.vercel.app/visas")

            },
            {
                path: "all-visas/visas/:id",
                element: <PrivateRout><VisaDetails></VisaDetails></PrivateRout>,
                loader: ({ params }) => fetch(`https://visa-quest-server.vercel.app/visas/${params.id}`)
            }
            ,
            {
                path: "/users",
                element: <PrivateRout><Users></Users></PrivateRout>,
                loader: () => fetch("https://visa-quest-server.vercel.app/users")
            },
            {
                path: "/country-details/:id",
                element: <ContryDetails></ContryDetails>,
                loader: () => fetch(`/allCountry.json`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/Gallery",
                element: <Gallery></Gallery>
            }

        ]

    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default router;