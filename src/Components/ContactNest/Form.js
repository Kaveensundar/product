import { useState } from "react";
import axios from 'axios'

function Form({ }) {
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


    return (
        <>
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

export default Form;



















// <div className="container mt-5">
//         <h2>Form</h2>
//         <form action="#" className="was-validated">

//             <div className="row">
//                 <div className=" mb-2 col">
//                     <label for="email">Email</label>
//                     <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email"
//                         required/>
//                     <div className="vaild-feedback"></div>
//                     <div className="invalid-feedback">please fill this</div>
//                 </div>

//                 <div className="mb-2 col">
//                     <label for="password">Password</label>
//                     <input type="password" className="form-control" name="password" id="password"
//                         placeholder="Enter your password" required/>
//                     <div className="vaild-feedback"></div>
//                     <div className="invalid-feedback">please fill this</div>
//                 </div>
//             </div>

//             <div className="  mb-2">
//                 <label for="rememberMe">
//                     <input type="checkbox" name="remember" id="rememberMe"/>
//                     Remember me
//                 </label>

//             </div>


//             <div>
//                 <label for="message"></label>
//                 <textarea name="message" className="form-control" rows="5" id="message"></textarea>
//             </div>

//             <div>
//                 <label for="singleSelect">select 1</label>
//                 <select name="singleSelect" className="form-select" id="singleSelect">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="mulSelect">select multiple</label>
//                 <select name="mulSelect" multiple className="form-select" id="mulSelect">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select>
//             </div>

//             <div className="mb-2 form-check form-switch">
//                 <label for="switch" className="form-check-label">
//                     <input type="checkbox" className="form-check-input" name="switch" id="switch"/>
//                     switch
//                 </label>

//             </div>

//             <div className="alert alert-dark">
//                 You Should <a href="#" className="alert-link">read this</a>
//             </div>

//             <div className="alert alert-dark alert-dismissible fade show">
//                 Ingnore This
//                 <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
//             </div>


//             <div className="container mt-3 d-flex justify-content-center" >
//                 <div className="card" style={{width:"300px"}}>
//                     <div className="card-img-top">
//                         <img src="/tree.avif" alt="tree" width="100%"/>
//                         <div className="card-body">
//                             <h3 className="card-img-title">Tree</h3>
//                             <p className="card-text">someaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...</p>
//                             <a href="#" className="btn btn-primary">see profile</a>
//                         </div>
//                     </div>


//                 </div>
//             </div>





//             <div className="text-center">
//                 <div>
//                     <button type="submit" className="btn btn-primary mt-3">Submit</button>
//                 </div>
//                 <div>
//                     <button type="reset" className="btn btn-outline-dark mt-3">reset</button>
//                 </div>
//             </div>





//             <br/>
//             <div className="progress">
//                 <div className="progress-bar bg-primary" style={{width:"10%"}}></div>
//             </div>


//         </form>
//     </div>