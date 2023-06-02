//create contact button needs to show only on home page and contact list page
// Using useLocation path of current page is taken and create contact button is removed from pages other than above two 
import React, { useEffect } from "react";
import {useLocation} from "react-router-dom"
const ButtonToggle=({children})=>{
    const location=useLocation();
    const [showButton,setShowButton]=React.useState(false)
    useEffect(()=>{
        if(location.pathname==='/'||location.pathname==='/contact'){
                setShowButton(true)
        }
        else{
            setShowButton(false)
        }
    },[location])
    return(
        <h1>{showButton&&children}</h1>
    )
}
export default ButtonToggle