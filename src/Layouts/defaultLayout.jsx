import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";


function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)


    return (
        <>
            <Header />
            <Navbar />
            {isLoading && <Loader />}
            <Outlet />

        </>
    )
}

export default DefaultLayout