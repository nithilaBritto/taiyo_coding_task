//Create contact page.
import React from "react";
const CreateContact=()=>{


    const [contacts,setContacts]=React.useState(
        {
            firstName:"",
            lastName:"",
            status:""
        }
    )
    const handleChange=(event)=> {
        const {name, value} = event.target
        setContacts(prevContacts => {
            return {
                ...prevContacts,
                [name]: value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        var pattern = /^[a-zA-Z ]{2,30}$/;
       
        if(contacts.status==""){
            alert("Status can't be empty")
        }
        else{
            alert("Name should contain atleast 2 alphabets")
        }
        
    }
    return(
        <div className="flex flex-col">
            <h2 className="text-black text-center text-xl">Create Contact Screen</h2>
        <form onSubmit={handleSubmit}>
        <div className="main_color mt-7 w-1/2 mar text-black border-2 border-black flex flex-col justify-center items-center">
            <div className="flex flex-row">
            <label>First Name:</label>
            <input 
                type="text"
                className="border-2 border-black h-20px block rounded-md"
                onChange={handleChange}
                value={contacts.firstName}
                name="firstName"
                
            />
            </div>
            <br />
            <div className="flex flex-row">
            <label>Last Name:</label>
            <input
                type="text"
                className="border-2 border-black h-20px block rounded-md"
                onChange={handleChange}
                value={contacts.lastName}
                name="lastName"
            />
            </div>
            <div className="flex flex-row">
            <label>Status:</label>
            
            <input 
                    type="radio"
                    id="active"
                    name="status"
                    value="active"
                    checked={contacts.status === "active"}
                    onChange={handleChange}
                />
                <label htmlFor="active">Active</label>
                <br />
                
                <input 
                    type="radio"
                    id="inactive"
                    name="status"
                    value="inactive"
                    checked={contacts.status === "inactive"}
                    onChange={handleChange}
                />
                <label htmlFor="inactive">Inactive</label>
                </div>
                <br />
                
                </div>
                <center>
                <button className="mt-4 text-center btn_color text-black justify-center items-center border-2 border-black p-1" >Save Contact</button>
                </center>
                </form>
        </div>
    )
}
export default CreateContact;