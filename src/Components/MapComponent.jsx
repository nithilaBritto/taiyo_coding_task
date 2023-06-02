import React from "react";
// import "../Styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


import { Icon, divIcon, point } from "leaflet";

const customIcon = new Icon({
 iconUrl: "/icons/location.png",
   iconSize: [20, 20] // size of the icon
});




export default function MapComponent() {
    const [coordinates,setCoordinates]=React.useState([9,10])
    const [countries,setCountries]=React.useState([])
React.useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res=>res.json())
    .then(data=>{
            setCoordinates(data.map((item)=>({
              coordinates: [item.countryInfo.lat,item.countryInfo.long],
              country: item.country,
              death:item.deaths
            })))
            setCountries(data.map((item)=>(item.country)))
        })
    },[])         
    console.log(countries)
  return (
    <MapContainer center={[-13.3, -176.2]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       
        {coordinates && coordinates.map((marker) => (
          // console.log(marker)
           marker && marker.coordinates 
           && marker.coordinates.length && marker.coordinates.length==2 
           && <Marker position={marker.coordinates} icon={customIcon} >
              <Popup><h2>Country:{marker.country}, Death:{marker.death}</h2></Popup>
            </Marker>
            
        )
        )}

        
    </MapContainer>
  );
}
