//To display Line graph

import React from "react";
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS} from 'chart.js/auto'; 
const Graph=()=>{
const [chart,setChart]=React.useState({})
const [data,setData]=React.useState({})
 
React.useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then(res=>res.json())
    .then(data=>{
            setChart(data)
        }
        
)         
},[])

React.useEffect(()=>{
    if(chart && chart.cases){
        console.log("inside chart useeffect",chart)

    setData({
        labels:Object.keys(chart.cases),
        datasets: [
            {
              label: 'Covid Cases',
              data:Object.values(chart.cases)
            }
        ]
        })
        
    }
    else {
        // setData({})
        setData({
            labels:["0"],
            datasets: [
                {
                  label: 'Covid Cases',
                  data:[0]
                }
            ]
            })
    }
},[chart])

    
    return ( 
        data && data.datasets ?
    <Line data={data} /> : "No Data available"
        
    )

}
export default Graph;