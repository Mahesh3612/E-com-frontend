import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"




export const Update = () =>{


const {id} = useParams();
const [name,setName] = useState()
const [price,setPrice] = useState()
const [category,setCategory] = useState()
const [company,setCompany] = useState()



useEffect(()=>{
    console.log("hi")
    getData()
},[])


async function getData(){
    let result = await fetch(`https://sunbonnet-pelican.cyclic.app/api/product/product/${id}`) 
    result = await result.json();
    setName(result.name)
    setCategory(result.category)
    setCompany(result.company)
    setPrice(result.price)
}


    async function updateProduct(){
        let result = await fetch(`https://sunbonnet-pelican.cyclic.app/api/product/product/${id}`,{
            method:"put",
            body:JSON.stringify({name,category,company,price}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(result)
    }

        return(
            <div className="product">
                <h1>Update product</h1>
                <input type="text" placeholder="Enter product name" className="inputBox" onChange={(e)=>setName(e.target.value)}  value={name} />
    
                <input type="text" placeholder="Enter product price" className="inputBox" onChange={(e)=>setPrice(e.target.value)}   value={price}/>
    
                <input type="text" placeholder="Enter product categoury" className="inputBox" onChange={(e)=>setCategory(e.target.value)}   value={category}/>
    
                <input type="text" placeholder="Enter product company" className="inputBox" onChange={(e)=>setCompany(e.target.value)}   value={company}/>
    
                <button className="appButton" onClick={updateProduct}>Update Product</button>
            </div>
        )
    
}