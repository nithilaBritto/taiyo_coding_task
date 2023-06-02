import React from "react";
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import CreateContact from "./Components/CreateContact";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Graph from "./Components/Graph";
import MapComponent from "./Components/MapComponent";
import './index.css'
import './Style.css'
import ButtonToggle from "./Components/ButtonToggle";
import Display from "./Components/Display";
const App=()=>{
    function DropdownItem(){
        
        return(
            <li>
                <li><Link to="/chart" className="text-xl" >Chart</Link></li>
                    <li><Link to="/map" className="text-xl">Map</Link></li>
            </li>
        )
    }
    const [open,setOpen]=React.useState(false);
    let menuRef=React.useRef();
    React.useEffect(()=>{
        let handler=(e)=>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
        }
        }
        document.addEventListener('mousedown',handler)
        return()=>{
            document.removeEventListener("mousedown",handler)
        }
    })
    
    return (
        
            <BrowserRouter>
            <h1 className="text-center text-white font-bold text-3xl p-3">Contact Page</h1>
            <main className="grid grid-cols-5 flex-container ">
            <div className=" border-2  border-black bg-white text-blue-500 col-span-1 m-0">
                <ul>
                    <li><Link to="/contact" className="text-xl m-5" >Contact</Link></li>
                    <div ref={menuRef}>
                        <li><Link to="/chart" onClick={()=>{setOpen(!open)}} className="text-xl">Charts and Maps</Link></li>
                        <ul className={`${open?'active':'inactive'}`}>
                            <DropdownItem />
                        </ul>
                    </div>
                    </ul>
                </div>
                <div className="bg-gray-300 h-[80vh] col-span-4 m-0">
                <Link to="/" ></Link>
                <ButtonToggle>
                    <Contact />
                </ButtonToggle>
                
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chartandmap" />
                <Route path="/createcontact" element={<CreateContact/>}/>
                <Route path="/contact" element={<Display />}/> 
                <Route path="/chart" element={<Graph />}></Route>
                <Route path="/chart" element={<Graph />}></Route>
                <Route path="/map" element={<MapComponent />}></Route>
            </Routes>
                </div>
            </main>
            
            </BrowserRouter>
       
        
    )
}
export default App;