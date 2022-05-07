import React, { useState, useEffect } from 'react';
import {Container, Form} from 'react-bootstrap';
import './reset.css';
import AuthApi from '../../api/auth';
import {useNavigate}   from 'react-router-dom';


const ResetToken = () => {

    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Recover Password");
    const [error, setError] = useState(undefined);
    // const handleSetAgremment = () => setAgremment(!agreement);

    const reqtoken = async(event) => {
        if (event) {
            event.preventDefault();
        }
        if (email === "") {
            return setError("You must enter your email.");
        }
        if (password === "") {
            return setError("You must enter a password.");
        }
        try {
            setButtonText("Sending email");
            let response = await AuthApi.Resetrequest({
                email,
                password,
            });
        if (response.data && response.data.success === false) {
            setButtonText("Recover Password");
            return setError(response.data.msg);
        }return history.push("/reset_password/reset_token");
        }catch (err) {
              console.log(err);
              setButtonText("");
              if (err.response) {
                return setError(err.response.data.msg);
              }
              return setError("There has been an error.");
            }
    }

    return ( 
        <>
              
            <main className="form-signin text-center">
                <Container className="align-item-center mx-5">
                    <Form method="post" action="">
                        <h1 className="h3 mb-3 fw-normal">Reset Password </h1>
                        <p>Please make sure your password is secure!</p>

                        <div className="form-floating my-2">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(event) => {
                                setEmail(event.target.value);
                                setError(undefined);
                            }}
                            />
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating my-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setError(undefined);
                            }}
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        {/* <div className="form-floating my-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="ConfirmPassword"/>
                            <label for="floatingPassword">Confirm Password</label>
                        </div> */}
                        <div><h1 classNameName='align-item-center bg-danger'> </h1></div>
                        <button className="w-100 btn btn-lg btn-info" type="submit">Change Password</button>

                    </Form>
                </Container > 
            </main>

        </>
     );
}
 
export default ResetToken;