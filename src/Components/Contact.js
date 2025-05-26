import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Contact() {

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        const dataCollected = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            number: userNumber
        }

        axios.post(`https://682ef9c8746f8ca4a47f37e3.mockapi.io/users`, dataCollected)
            .then((res) => {
                console.log(res);

                setUserFirstName('');
                setUserLastName('');
                setUserEmail('');
                setUserNumber('');

            })
            .catch((err) => {
                console.log(err);
            })



    }

    const navigate = useNavigate();

    return (
        <>
            <h1>Contact</h1>
            <div className="d-flex justify-content-end">
                {/* <button className="btn btn-dark" onClick={() => navigate("info")}>INFO</button> */}
                {/* <button className="btn btn-info m-2" onClick={() => navigate("form")}>Form</button> */}
                <button className="btn btn-secondary m-2" onClick={() => navigate("/user")}>User</button>
            </div>

             <div className="container mt-5">
                <h2>User Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input id="firstName" type="text" pattern="^[A-Za-z ]+$" className="form-control" value={userFirstName} onChange={(event) => setUserFirstName(event.target.value)}></input>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input id="lastName" type="text"  className="form-control" value={userLastName} onChange={(event) => setUserLastName(event.target.value)}></input>
                        </div>
                    </div>



                    <div className="mb-3">
                        <label htmlFor="email" className="form-lable">Email</label>
                        <input id="email" type="email"  className="form-control" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-lable">Number</label>
                        <input id="number" type="text"  pattern="[6-9][0-9]{9}" className="form-control" value={userNumber} onChange={(event) => setUserNumber(event.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>

        </>

    );

}

export default Contact;