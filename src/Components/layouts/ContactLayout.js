import { Outlet } from "react-router-dom";
import Contact from "../Contact";


function ContactLayout(){

    return(
        <>
        <Contact/>
        <Outlet/>
        </>
    );

}

export default ContactLayout;