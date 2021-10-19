import React from 'react';
import './NotFound.css';
import { Container } from 'react-bootstrap';
const NotFound = () => {
    return (
        <Container>
            <div className="not-found-div">
                <p className="not-found-class"><span className="found-color">4<i class="far fa-frown "></i>4</span>  <span className="f-c">Error</span></p>
                <p className="page-p">Page not found</p>
                <div className="page-div">
                    <p className="page-p page-pp">We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at <span className="email">support@medscape.com</span></p>
                </div>
            </div>
        </Container>
    );
};
export default NotFound;
