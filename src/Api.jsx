import axios from "axios"
import React from "react"

export default async function getList(username, password){
    console.log("getList")
    console.log(username)
    const data = await axios.post("http://localhost:4000/getList",{
        username: username,
        password: password
    })
    console.log(data)
    return data.data.allItems.rows
}