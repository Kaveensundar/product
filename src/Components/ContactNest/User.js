import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User({ }) {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate()



    const getUsers = () => {
        axios.get(`https://682ef9c8746f8ca4a47f37e3.mockapi.io/users`)
            .then((res) => { setUsers(res.data) })
            .catch((err) => {
                console.log("error", err);
            })

    }

    useEffect(() => {
        getUsers();
    }, [])


    const handleEdit = (id) => {
        console.log("Navigating to user:", id);
        navigate(`/user/edituser/${id}`);

    }

    const handleDelete = (id) => {
        axios.delete(`https://682ef9c8746f8ca4a47f37e3.mockapi.io/users/${id}`)
            .then(() => getUsers())
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className="container ">
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="col">First Name</th>
                        <th className="col">Last Name</th>
                        <th className="col">Email</th>
                        <th className="col">Number</th>
                        <th className="col">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>
                                <button className="btn btn-secondary m-1" onClick={() => handleEdit(user.id)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}

export default User;
