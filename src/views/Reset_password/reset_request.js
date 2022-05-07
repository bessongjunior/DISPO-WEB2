import React, { useState, useEffect } from 'react';
import {Container, Button} from 'react-bootstrap';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import AuthApi from '../../api/auth';

const ResetRequest = () => {

    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Recover Password");
    const [error, setError] = useState(undefined);
    // const handleSetAgremment = () => setAgremment(!agreement);
    
    const reqreset = async(event) => {
        if (event) {
            event.preventDefault();
        }
        if (email === "") {
            return setError("You must enter your email.");
        }
        try {
            setButtonText("Sending email");
            let response = await AuthApi.Resetrequest({
                email,
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
    };
     

    return ( 
        <>
            <main className="form-signin text-center">
                <Container  className="align-item-center mx-5 mt-5">
                    <form method="post" action="">
                        <h1 className="h3 mb-3 fw-normal">Reset Password</h1>
                        <p className="mb-4">Don't Panic! Just type in your email and we will send you a code to reset your password!</p>

                        <div className="form-floating my-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required 
                        onChange={(event) => {
                            setEmail(event.target.value);
                            setError(undefined);
                        }}                        
                        />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <Button className="w-100 btn btn-lg" variant='info' type="submit"
                        onclick={reqreset}
                        >{buttonText}</Button>

                    </form>
                </Container >
            </main>
        </>
     );
}
 
export default ResetRequest;