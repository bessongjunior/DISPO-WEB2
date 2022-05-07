import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';

import Notfound from '../../assets/404.svg';

const PageNotFound = () => {
    return ( 
        <>
        <div className='page-not-found'>
            <Container className='align-item-center justify-content-center' >
                <Row>
                    <Col md={5} className='justify-content-md-between mx-3 mt-2'>
                        <div class="h-100 p-5 bg-white">
                            <h2>Page Not Found</h2>
                            <p>The page you are trying to access is not found, Please contact us if any doubt.</p>
                            <Button variant='danger' class="btn-outline-danger align-item-center col-md-6" type="button">Return to Home</Button>
                            <Button variant='danger' class="btn-outline-danger align-item-center col-md-6" type="button">Contact Us Now</Button>
                        </div>
                    </Col>
                    <Col md={7} className='align-item-center mx-3 mt-2 shrink-to-fit'>
                    <img src={Notfound} alt='PAGE NOT FOUND ERROR IMAGE' />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}
 
export default PageNotFound;