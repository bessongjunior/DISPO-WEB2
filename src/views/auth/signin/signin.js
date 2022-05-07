import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import { Container, Form, Image, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Form, Container, Button} from "react-bootstrap";
import { useAuth } from "../../../auth-context/auth.context";
import AuthApi from '../../../api/auth';



const LoginPage = () => {
    
    const history = useNavigate();
    const { setUser } = useAuth();
    const { user } = useAuth();
  
    const [rememberMe, setRememberMe] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(undefined);
    const [buttonText, setButtonText] = useState("Sign in");
    const handleSetRememberMe = () => setRememberMe(!rememberMe);


    // const [Reg, setReg] = useState();
    // useEffect(() => {
        
    // }, []);

    const login = async (event) => {
        if (event) {
          event.preventDefault();
        }
        if (user && user.token) {
          return history.push("/dashboard");
        }
        if (email === "") {
          return setError("You must enter your email.");
        }
        if (password === "") {
          return setError("You must enter your password");
        }
        setButtonText("Signing in");
        try {
          let response = await AuthApi.Login({
            email,
            password,
          });
          if (response.data && response.data.success === false) {
            return setError(response.data.msg);
          }
          return setProfile(response);
        } catch (err) {
          console.log(err);
          setButtonText("Sign in");
          if (err.response) {
            return setError(err.response.data.msg);
          }
          return setError("There has been an error.");
        }
      };
    
      const setProfile = async (response) => {
        let user = { ...response.data.user };
        user.token = response.data.token;
        user = JSON.stringify(user);
        setUser(user);
        localStorage.setItem("user", user);
        return history.push("/admin/dashboard");
      };


    return ( 
        <>
        <main className="form-signin">
        <Container className="">
            <div className="align-item-center mx-5">
                <Form method="post" action="">
                    <img className="mb-4 " src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating my-2">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                    //  onChange={(event) => {
                    //     setEmail(event.target.value);
                    //     setError(undefined);
                    //   }}
                    />
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    // onChange={(event) => {
                    //     setPassword(event.target.value);
                    //     setError(undefined);
                    //   }}
                    />
                    <label for="floatingInputGroup, FormControl,Password">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label className="me-5" style={{float: "left"}}
                    // onChange={handleSetRememberMe}
                    >
                        <input type="checkbox" value="remember-me" className="" 
                        // onClick={handleSetRememberMe}
                        /> Remember me
                    </label>
                    <p class="text-muted small ms-5" style={{float: "right", listStyle: "none"}}> <a href="#" className="">Forgot Password</a></p>
                    </div>
                    <Button className="w-100" type="submit" variant='primary' size='lg' 
                    //onClick={login}
                    >
                        {/* {buttonText} */}
                        Sign in</Button>
                      
                    <div className='mb-2'>
                        <a href='#' className='col my-2 small' style={{float: "right"}}>Do not have an account?</a>
                        {/* <a href='#' className='col my-2' style={{float: "left"}}>Sign Up Here</a>  add sign up link here */}
                    </div>

                </Form>
            </div>
                {/* <div className='mt-3'><hr className='my-3'/></div> */}
                <p class="mt-5 mb-3 text-muted me-5 pe-5">&copy; 2021-2022</p> 
        </Container>
    </main>
    </>
     );
}
 
export default LoginPage;