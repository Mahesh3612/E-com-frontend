import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = ()=>{
    const auth = JSON.parse(localStorage.getItem("login"))

const navigate = useNavigate()
    const [user,setUser] = useState({})

    useEffect(()=>{
        if(auth){
            navigate("/")
        }
    })


    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
            }

            async function handleLogin(){
                let result = await fetch("https://sunbonnet-pelican.cyclic.app/api/user/login",{
                    method:"post",
                    body:JSON.stringify(user),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }) 
                result = await result.json()
                console.log(result)
                console.log(result)

            if(result.auth){
                localStorage.setItem("login",JSON.stringify(result.result))
                localStorage.setItem("token",JSON.stringify(result.auth))

                navigate("/")
            }else{
                alert("enter valid data")
            }

            }
    

    return(
    <div className="login">
        <input type="text" className="inputBox" placeholder="enter email" onChange={handleChange} name="email"/>
        <input type="text" className="inputBox" placeholder="enter password" onChange={handleChange} name="password" />
        <button className="appButton" onClick={handleLogin}>Login</button>
    </div>
    )
}