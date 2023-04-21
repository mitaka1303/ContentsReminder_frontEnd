import axios from "axios"
import React from "react"

export default function getList(username, password){
    console.log("getList")
    console.log(username)
    axios.post("http://localhost:4000/getList",{
        username: username,
        password: password
    }).then((response=>{
        console.log(response.data)
    }))
}