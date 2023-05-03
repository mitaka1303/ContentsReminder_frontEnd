import axios from "axios"
import React from "react"

export async function getList(username, password){
    console.log("getList")
    console.log(username)
    console.log("URL"+`${import.meta.VITE_SERVER_URL}`)
    const data = await axios.post(`${import.meta.env.VITE_SERVER_URL}/getList`,{
        username: username,
        password: password
    })
    console.log(data)
    return data.data.updateData
}

export async function deleteRow(username, password, id){
    console.log("delete row")
    console.log(username)
    const data = await axios.post(`${import.meta.env.VITE_SERVER_URL}/deleteRow`,{
        username: username,
        password: password,
        id: id
    })
    console.log(data)
    //return data.data.allItems.rows
}

export async function addRow(username, password, title){
    console.log("add row")
    console.log(title)
    const data = await axios.post(`${import.meta.env.VITE_SERVER_URL}/addRow`,{
        username: username,
        password: password,
        title: title
    })
    console.log(data)
    //return data.data.allItems.rows
}