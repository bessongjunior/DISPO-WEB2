import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import Servim from '../../assets/500.svg';


const InternalSeverError = () => {
    return ( 
        <>
        <div className='server-error'>
            <Container className='align-item-center justify-content-center' >
                <Row>
                    <Col md={5} className='mx-3 mt-2 justify-content-md-between'>
                        <div class="h-100 p-5 bg-white">
                            <h2>Internal Server Error</h2>
                            <p>TWe are experiencing trouble on our side, Please try again later contact us if any doubt.</p>
                            <Button variant='danger' class="btn-outline-danger align-item-center col-md-6" type="button">Return to Home</Button>
                            <Button variant='danger' class="btn-outline-danger align-item-center col-md-6" type="button">Contact Us Now</Button>
                        </div>
                    </Col>
                    <Col md={7} className='Justify-content-center mx-3 mt-2'>
                    <img src={Servim} alt='SERVER ERROR IMAGE' />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}
 
export default InternalSeverError;