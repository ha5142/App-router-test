import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//run data through optimization bt use loaderData
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ha5142')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
            
    //     })
    // }, [])
    
    
    return (
        <div className="text-center m-4 bg-black text-white p-4 text-3xl"> Your Github Followers: {data.followers}
        <img className="text-center" src={data.avatar_url} alt="Git Picture" width={200}/>


        </div>
        
    
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ha5142')
    return response.json()
}