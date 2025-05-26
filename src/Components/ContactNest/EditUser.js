import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edituser() {
    const { id } = useParams();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', number: '' })

    const navigate = useNavigate();





    useEffect(() => {

        axios.get(`https://682ef9c8746f8ca4a47f37e3.mockapi.io/users/${id}`)
            .then((res) => { setFormData(res.data) })
            .catch((err) => {
                console.log("error", err);
            })
    }, [id])


    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value })
    }
    const handleUpdate = (event) => {
        event.preventDefault();

        axios.put(`https://682ef9c8746f8ca4a47f37e3.mockapi.io/users/${id}`, formData)
            .then((res) => {
                console.log("success" + res);
                navigate("/user");
            })
            .catch((err) => {
                console.log("err" + err);
            })
    }





    return (
        <>
            <div className="container mt-5">
                <h2>User Form</h2>
                <form onSubmit={handleUpdate}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input id="firstName" type="text" className="form-control" value={formData.firstName} onChange={handleChange}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input id="lastName" type="text" className="form-control" value={formData.lastName} onChange={handleChange}></input>
                        </div>
                    </div>



                    <div className="mb-3">
                        <label htmlFor="email" className="form-lable">Email</label>
                        <input id="email" type="email" className="form-control" value={formData.email} onChange={handleChange}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-lable">Number</label>
                        <input id="number" type="number" className="form-control" value={formData.number} onChange={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>

                </form>
            </div>

        </>
    )
}

export default Edituser;