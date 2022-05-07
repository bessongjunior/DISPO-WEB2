import React from 'react';
import {Col, Container, Footer, Row} from 'react-bootstrap';



const UserFooter = () => {
    return ( 
        <>
        
        {/* <!-- Footer start --> */}
                    
            <footer class="bg-dark text-white mt-3 overflow-hidden">
            <Container class="my-3">
                <Row class="justify-content-md-between">
                    <Col md={12} lg={4} class="mb-4 me-lg-auto">
                        <img class="mb-3" src="assets/img/logo-light.png" alt="Garbagge App" style={{width: 170}}/>
                        <p class="small font-weight-light mb-3">Garbagge app is a fully responsive platform with variety of  functional features and ready to use  for the purpose of disposed waist, collection and recycling.</p>
                    </Col>
                    <Col sm={4} lg={2} class="mb-2">
                        <h5>Company</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">About Us</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Services</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Community</a></li>
                        </ul>
                    </Col>
                    <Col sm={4} lg={2} class="mb-4">
                        <h5>Support</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">FAQ</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Policy</a></li>
                        </ul>
                    </Col>
                    <Col sm={4} lg={2} class="mb-4">
                        <h5>Contact</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">145 Malingo Junction</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">info@gaebacol.com</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">+237 6777-777-777</a></li>
                        </ul>
                    </Col>

                </Row>
                <hr class="my-1 opacity-5"/>

                <Row>
                    <Col md={7}>
                        <p class="small mb-md-0">&copy; 2021-2022 <a class="text-white" href="#">Design Project</a>. Under COT license.</p>
                    </Col>
                    <Col md={5}>
                        <div style={{float: "right"}}>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-1 me-xl-2">
                            <a class="list-unstyled" target="_blank" href="https://github.com/bessongjunir/">
                                <i class="fab fa-github"></i>5
                            </a>
                            </li>
                            <li class="list-inline-item mx-1 mx-xl-2">
                            <a class="list-unstyled" target="_blank" href="https://www.facebook.com/junior besong">
                                <i class="fab fa-facebook"></i>4
                            </a>
                            </li>
                            <li class="list-inline-item mx-1 mx-xl-2">
                            <a class="list-unstyled" target="_blank" href="https://www.instagram.com/junior besong">
                                <i class="fab fa-instagram"></i>3
                            </a>
                            </li>
                            <li class="list-inline-item mx-1 mx-xl-2">
                            <a class="list-unstyled" target="_blank" href="https://twitter.com/junior besong">
                                <i class="fab fa-twitter"></i>2
                            </a>
                            </li>
                            <li class="list-inline-item ms-1 ms-xl-2">
                            <a class="list-unstyled" target="_blank" href="https://dribbble.com/juniorbesong8">
                                <i class="fab fa-dribbble"></i>1
                            </a>
                            </li>
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
            {/* <!-- Footer end --> */}


        </>
     );
}
 
export default UserFooter;