import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';

const MethodNotAllowed = () => {
    return ( 
        <>
            <Container className='container-fluid py-5'>
                <div class="h-100 p-5 mb-4 text-white bg-dark rounded-3">
                    <h2 className='display-5 fw-bold align-item-center' >Method Not Allowed</h2>
                    <p className='col-md-10 fs-4 my-3'>You are not Authorized or Allowed to pursue, Authentication is required.</p>
                    <button class="btn btn-outline-light align-item-center" type="button">Return to Home</button>
                </div>
            </Container>
        </>
     );
}
 
export default MethodNotAllowed;