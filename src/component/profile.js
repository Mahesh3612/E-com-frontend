
import axios from "axios"
import { useEffect, useState } from "react"

// const axios = require("axios")


export const Profile = ()=>{

    const [data,setData] = useState({})

    const auth = JSON.parse(localStorage.getItem("login"))
const id = auth._id


useEffect(()=>{
    console.log("hi")
    getData()
},[])


async function getData(){
let result = await axios.get(`https://sunbonnet-pelican.cyclic.app/api/user/profile/${id}`)
setData(result.data)
}

return <div>
<h1>{data.name}</h1>
<h2>{data.email}</h2>
</div>
}