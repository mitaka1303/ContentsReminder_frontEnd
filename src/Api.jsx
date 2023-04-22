import axios from "axios"
import React from "react"

export async function getList(username, password){
    console.log("getList")
    console.log(username)
    const data = await axios.post("http://localhost:4000/getList",{
        username: username,
        password: password
    })
    console.log(data)
    return data.data.allItems.rows
}

export async function deleteRow(username, password, id){
    console.log("delete row")
    console.log(username)
    const data = await axios.post("http://localhost:4000/deleteRow",{
        username: username,
        password: password,
        id: id
    })
    console.log(data)
    //return data.data.allItems.rows
}