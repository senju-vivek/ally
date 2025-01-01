import React, { useEffect, useState } from "react";


function HealthCheck(){
    const[healthStatus,setHealthStatus] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/health')
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error status : ${response.status} `)
            }
            return response.json()
        } )
        .then((data) => {
            setHealthStatus(data.status)
        } )
        .catch((error) => {
            console.error('Error while fetching status',error)
            setHealthStatus('Error fetching HealthStatus')
        } )
    } ,[])
    return (
        <>
        
        <div>
            <h1 className="text-white" > Health Status </h1>
            <p className="text-white" > Status : {healthStatus || 'Loading ...' } </p>
        </div>

        </>
    )
}
export default HealthCheck