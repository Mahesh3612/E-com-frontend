import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export const ProductList = () => {

    const [data, setData] = useState([]);
   
  

    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        let result = await fetch("https://sunbonnet-pelican.cyclic.app/api/product/product",{
            headers : {
                authorization : JSON.parse(localStorage.getItem("token"))
            }
        })
        result = await result.json()
        setData(result)
    }

    async function handleDelete(id){
   await fetch(`http://localhost:5000/api/product/product/${id}`,{
         method:"Delete"
     })
     getData()
   
    }

    async function handleSearch(e){
      let text = e.target.value
      if(text){
      let result = await fetch(`http://localhost:5000/api/product/search/${text}`)
      result = await result.json();
      console.log(result)
      setData(result)
    }else{
       getData()
    }
  
    }

    async function sortAsc(){
        let result = await fetch("http://localhost:5000/api/product/sortAsc")
        result = await result.json();
        setData(result)
    }

    async function sortDsc(){
        let result = await fetch("http://localhost:5000/api/product/sortDsc")
        result = await result.json();
        setData(result)
    }



    return (

        <>
        {data.result ? <h1>You are not Authenticated</h1> : <div className="product-list" >
        <input placeholder="search" onChange={handleSearch}/>
        <button onClick={sortAsc}>sortAsc</button>
        <button onClick={sortDsc}>sortDsc</button>
            <ul>
                <li>Sr.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Delete</li>
                <li>Edit</li>
            </ul>

            {data.map((el,i)=>{
              return  <ul key={i}>
                <li>{i+1}</li>
                <li>{el.name}</li>
                <li>{el.price}</li>
                <li>{el.category}</li>
                <li>{el.company}</li>
                <li><button onClick={()=>handleDelete(el._id)}>Delete</button></li>
                <li><Link to={`/update/${el._id}`}><button>Edit</button></Link></li>
            </ul>

            })}



        </div>}
        
        </>
    )
}