import tree from "../Assets/tree.avif"
import { Link, NavLink, useNavigate } from "react-router-dom";


// use navLink not Link for active


export function NavBar() {

    const navigate = useNavigate();

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <NavLink to={"/"} className="navbar-brand">
                        <img className="rounded-pill" src={tree} alt="logo" style={{ width: "40px" }} />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBar">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item"><NavLink to={"/"} className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink to={"/products"} className="nav-link">Products</NavLink></li>
                            <li className="nav-item"><NavLink to={"/about"} className="nav-link">About</NavLink></li>
                            <li className="nav-item"><NavLink to={"/contact"} className="nav-link">Contact</NavLink></li>
                        </ul>
                        <Link to={"/login"} className="btn btn-Light text-decoration-none text-white">Login</Link>
                    </div>
                </div>
            </nav>



        </>
    );
}

export default NavBar;