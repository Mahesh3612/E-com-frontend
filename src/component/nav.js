import { Link, useNavigate } from "react-router-dom"

export const Nav = () => {

    let auth =JSON.parse(localStorage.getItem("login"))
    let navigate = useNavigate()
    let id = auth;


    function logOut(){
        localStorage.clear();
        navigate("/signup")
    }


    return (
        <div>
            <ul className="nav-ul">
                {auth ?<ul><li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to={`/profile/${id._id}`}>profile</Link></li>
                 <li><Link to="/logout" onClick={logOut}>logout</Link></li></ul>
                 : <ul className="nav-ul nav-right">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                </ul>}





            </ul>
        </div>
    )
}




