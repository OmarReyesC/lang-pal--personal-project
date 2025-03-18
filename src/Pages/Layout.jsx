import { Outlet } from "react-router";
import Header from "../Components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}