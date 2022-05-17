import axios from "axios";
import { useState, useEffect } from "react";
export default function Edu(){
    const[data,setdata]=useState("");

    const getApi=()=>{
        let url="https://kctreact.free.beeceptor.com/my/api/path"
        axios.get(url).then(
            (response)=>{
                setdata(response.data)
            },
            (error)=>{
                alert(error)
            }
        )

    }
    useEffect(()=>{
        alert("ddd")
        getApi()
    })
    return(
        <div className="Edu1">
        <h2>EDUCATION</h2>
        
        <p>{data}</p>
    </div>


    )

}