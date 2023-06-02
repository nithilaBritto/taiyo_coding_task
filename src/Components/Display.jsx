//To display contact list

import React from "react";
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
const Display=()=>{
    const [list,setList]=React.useState([])
    const removeElement=(param)=>{
        const newList=list.filter((item)=>item.id!==param)
        setList(newList)
        
    }
    React.useEffect(()=>{
        fetch('/data/contact.json')
            .then(res=>res.json())
            .then(data=>{setList(data)})

    },[])
    return(
        <div className="hello">
            <div className="flex flex-row  sm:text-left m-20">
                {
                    list && list.map((items)=>{
                        return (
                            <div className="flex flex-col text-black m-12 ">
                            <span key={items.firstName} >{items.firstName}</span>
                             <span key={items.lastName}>{items.lastName}</span>
                            <span key={items.id}>{items.status}</span>  
                            <Link className="display-btn border-2 border-gray-400 green mb-5 mt-5 text-center rounded-md text-white" to='/createcontact'>Edit</Link>
                            <button onClick={()=>removeElement(items.id)} className=" display-btn red border-2 border-gray-400 red rounded-md text-white p-1">Delete</button>
                            </div>
                        )
                    })
                }
            
             </div>

        </div>
    )
}
export default Display;

/*const handleClick=()=>{
        var index = data.findIndex(function(item, i){
            return item.firstName === firstName
          });
    }*/

    //rounded-md
    //contact_details