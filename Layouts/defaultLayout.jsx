import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function DefaultLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}

export default DefaultLayout