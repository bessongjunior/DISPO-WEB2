import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import { Container, Form, Image, Col } from 'react-bootstrap';
import { useNavigate } from "react-router";
import {Form, Container, Button} from "react-bootstrap";
import AuthApi from '../../../api/auth';



const RegistrationPage = () => {
    //const [Reg, setReg] = useState();
  const history = useNavigate();
  const [agreement, setAgremment] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Sign up");
  const [error, setError] = useState(undefined);

  const handleSetAgremment = () => setAgremment(!agreement);
    useEffect(() => {   
    }, []);

    const register = async (event) => {
        if (event) {
          event.preventDefault();
        }
        if (fullName === "") {
          return setError("You must enter your first name.");
        }
        if (email === "") {
          return setError("You must enter your email.");
        }
        if (password === "") {
          return setError("You must enter a password.");
        }
        try {
          setButtonText("Signing up");
          let response = await AuthApi.Register({
            username: fullName,
            email,
            password,
          });
          if (response.data && response.data.success === false) {
            setButtonText("Sign up");
            return setError(response.data.msg);
          }
          return history.push("/authentication/sign-in");
        } catch (err) {
          console.log(err);
          setButtonText("Sign up");
          if (err.response) {
            return setError(err.response.data.msg);
          }
          return setError("There has been an error.");
        }
      };

    return ( 
        <>                    
            <main className="form-signin">
            <Container>
            <div className="align-item-center mx-5">
            <Form method="post" action="">
                <img className="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

                <div className="form-floating my-2">
                    <input type="name" className="form-control" id="floatingName" placeholder="name"
                    onChange={(event) => {
                        setFullName(event.target.value);
                        setError(undefined);
                      }}
                    />
                    <label for="floatingName">Full Name</label>
                </div>
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
                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"/>
                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
                <h6
              style={{
                fontSize: ".8em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h6>
                <Button className="w-100 btn btn-lg btn-primary" type="submit" 
                onClick={register}
                >
                  {buttonText}
                </Button>
            </Form>
{/* Add functionality to return to login page using react router dom LINK */}
            <hr/>
            <small className="text-muted">By clicking Sign up, you agree to our <a href="#"> terms and condition</a></small>
            </div>
            <p className="mt-2 text-muted">&copy; 2021-2022</p> 
            </Container>
            </main>

        </>
     );
}
 
export default RegistrationPage;