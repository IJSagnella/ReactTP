import { Outlet } from "react-router-dom"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export const Layout = () => {
    <>
    <Nav/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
}