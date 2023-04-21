import axios from "axios"
import React from "react"

export default function getList(){
    console.log("getList")
    axios.post("http://localhost:4000/getList",{
        title: "testPost",
        body:"testPostBody"
    }).then((response=>{
        console.log("response")
    }))
}