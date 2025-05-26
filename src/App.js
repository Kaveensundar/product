import NavBar from "./Components/navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Login from "./Components/Login";
import Info from "./Components/ContactNest/Info";
import Form from "./Components/ContactNest/Form";
import User from "./Components/ContactNest/User";
import { Routes, Route } from "react-router-dom"
import ContactLayout from "./Components/layouts/ContactLayout";
import ProductSingle from "./Components/ProductSingle";
import Edituser from "./Components/ContactNest/EditUser";

function App() {

    return (
        <>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductSingle />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactLayout />}>
                        {/* <Route path="info" element={<Info />} /> */}
                        {/* <Route path="form" element={<Form />} /> */}
                        {/* <Route path="user" element={<User />} />
                        <Route path="user/edituser/:id" element={<Edituser />} /> */}
                    </Route>
                     <Route path="user" element={<User />} />
                      <Route path="user/edituser/:id" element={<Edituser />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </>
    );


}

export default App;
