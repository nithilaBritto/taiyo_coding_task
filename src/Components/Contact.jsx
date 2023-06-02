//Since contact button needs to be shown in specific pages it is created in specific component
import React from "react";
import {Link} from "react-router-dom"

const Contact=()=>{
    return(
    <Link to="/createcontact" className="mt-10 absolute  text-center btn_color text-black justify-center items-center border-2 border-black p-5 ml-80">Create Contact</Link>
    )
}
export default Contact;

