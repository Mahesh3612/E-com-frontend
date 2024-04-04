import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Signup = () =>{


    const navigate = useNavigate()

    const [user,setUser] = useState({})

    function handleChange(e){
const {name,value} = e.target;
setUser({...user,[name]:value})
    }

    async function handleRegister (){

        let result = await fetch("http://localhost:5000/api/user/register",{
            method:"post",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            },
        })

        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/login")
    }


    return(
        <div className="register">
        <h1>register</h1>
        <input className="inputBox" placeholder="enter your name" onChange={handleChange} name="name"/>
        <input className="inputBox" placeholder="enter your email" onChange={handleChange} name="email"/>
        <input className="inputBox" placeholder="enter your password" onChange={handleChange} name="password"/>
        <button className="appButton" onClick={handleRegister}>register</button>
        </div>
    )
}