import { useState } from "react"

 export const AddProduct = () =>{

    const userId = JSON.parse(localStorage.getItem("login"))


    const [data,setData] = useState({
        userId:userId._id
    });
    const [error,setError] = useState(false)



    async function addProduct(){

        if(!data.name || !data.price || !data.category || !data.company){
            setError(true)
            return false
        }
        let result = await fetch("http://localhost:5000/api/product/addproduct",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        console.log(result)

    }





    function addProductt(e){
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    return(
        <div className="product">
            <h1>add product</h1>
            <input type="text" placeholder="Enter product name" className="inputBox" onChange={addProductt} name="name" />
            {error && !data.name && <span className="invalid-input">Enter valid name</span>}
            <input type="text" placeholder="Enter product price" className="inputBox" onChange={addProductt} name="price"/>
            {error && !data.price && <span className="invalid-input">Enter valid price</span>}
            <input type="text" placeholder="Enter product categoury" className="inputBox" onChange={addProductt} name="category"/>
            {error && !data.category && <span className="invalid-input">Enter valid category</span>}
            <input type="text" placeholder="Enter product company" className="inputBox" onChange={addProductt} name="company"/>
            {error && !data.company && <span className="invalid-input">Enter valid company</span>}
            <button className="appButton" onClick={addProduct}>Add Product</button>
        </div>
    )
}







