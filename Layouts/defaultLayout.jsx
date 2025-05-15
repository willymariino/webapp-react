import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import { useContext } from "react";
import countContext from "../context/globalCotext";

function DefaultLayout() {



    return (
        <>
            <Header />
            <Navbar />
            { }
            <Outlet />

        </>
    )
}

export default DefaultLayout