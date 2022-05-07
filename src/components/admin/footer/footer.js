import {Col, Container, Row} from 'react-bootstrap'



const AdminFooter = () => {
    return ( 
        <>
            <footer className=" footer bg-dark py-3 mt-auto">
                <Container>
                    <Row>
                        <Col md={8} className="text-center text-md-left mb-3 mb-md-0">
                          <small className="text-white">&copy; 2021 - 2022 <a className="text-white" href="#">Garbagge app</a>. All Rights Reserved.</small>
                        </Col>

                        <Col md={4} className="align-self-center">
                            <ul className="list-inline text-center text-md-right mb-0">
                                <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Facebook">
                                <a className="text-white" target="_blank" href="#">
                                    <i className="fab fa-facebook"></i>1
                                </a>
                                </li>
                                <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Instagram">
                                <a className="text-white" target="_blank" href="#">
                                    <i className="fab fa-instagram"></i>2
                                </a>
                                </li>
                                <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Twitter">
                                <a className="text-white" target="_blank" href="#">
                                    <i className="fab fa-twitter"></i>3
                                </a>
                                </li>
                                <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="Dribbble">
                                <a className="text-white" target="_blank" href="#">
                                    <i className="fab fa-dribbble"></i>4
                                </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}
 
export default AdminFooter;