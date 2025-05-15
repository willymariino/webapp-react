import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import { useContext } from "react";
import countContext from "../context/globalCotext";

function DefaultLayout() {

    const { isLoading } = useContext(countContext)

    return (
        <>
            <Header />
            <Navbar />
            { }
            <Outlet />
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout