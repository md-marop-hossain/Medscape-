import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-div">
                            <h2>Address</h2>
                            <p><i class="fas fa-map-marker-alt"></i> American Pharmacists Association
                                2215 Constitution Avenue NW
                                Washington, DC 20037</p>
                            <p><i class="fas fa-phone-alt"></i> 1-800-237-APhA (2562)</p>
                            <p><i class="fas fa-envelope"></i> nfocenter@aphanet.org</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-div">
                            <h2>AFFILIATES AND SUBSIDIARIES</h2>
                            <p>APhA Foundation</p>
                            <p>ADVANCE </p>
                            <p> Pharmacy Profiles</p>
                            <p> Board of Pharmacy Specialties
                            </p>
                            <p>Pharmacy Technician Certification Board </p>
                            <p> Potomac View Terrace</p>
                        </div>
                    </Col>
                    <Col className="footer-div">
                        <p>Contact Us</p>
                        <p>Corporate Supporters</p>
                        <h5 className="follow-us">FOLLOW US @</h5>
                        <div className="iconn">
                            <p> <i className="icon-i fab fa-facebook-square"></i></p>
                            <p>  <i className="icon-i fab fa-linkedin"></i></p>
                            <p> <i className="icon-i fab fa-twitter-square"></i></p>
                            <p>  <i className="icon-i fab fa-youtube"></i></p>
                            <p> <i className="icon-i fab fa-instagram-square"></i></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Footer;