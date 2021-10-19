import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import HomeMedicine from '../HomeMedicine/HomeMedicine';
import { Row, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../images/med1.jpg';
import image2 from '../../images/med2.jpg';
import image3 from '../../images/med3.jpg';
const Home = () => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMedicines(data)
            });
    }, [])
    return (
        <>
            <div className="home-carousel w-50 mx-auto mb-5">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Amphennic</h3>
                                <p>Chloramphenicol is a broad spectrum antibiotic indicated in both adults and children for the treatment of bacterial conjunctivitis caused by chloramphenicol susceptible organisms including: Escherichia coli, Haemophilus influenzae, Staphylococcus aureus, Streptococcus haemolyticus, Morax-axenfeld, Klebsiella/Enterobacter species and others</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Fenadinol</h3>
                                <p>Fenadinol Tablet is an effective and potent anti-allergic medicine consists of Fexofenadine. It is used to treat allergic symptoms like runny nose, watery eyes, sneezing, itching, hives, etc., associated with Rhinitis (hey fever) and Urticaria (skin allergy). Fenadinol g Tablet works by stopping the release of histamine (a chemical substance that causes allergic symptoms)</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Calcirate</h3>
                                <p>Calcium Orotate is a Calcium supplement with a functional amino acid chelating ligand-Orotic acid. Orotic acid assists the transport of Calcium through cellular membrane structures facilitating the intracellular uptake of Calcium, particularly in bone. Calcium Orotate also helps in the maintenance of healthy cartilage. Furthermore, Orotate is involved in the synthesis of DNA (deoxyribonucleic acid) and RNA (ribonucleic acid). Calcium Orotate has the high affinity to penetrate complex cell membrane</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <div className="home-container">
                <Container >
                    <Row xs={1} md={2} lg={3} className="">
                        {
                            medicines.map(medicine => <HomeMedicine
                                key={medicine.id}
                                medicine={medicine}
                            >
                            </HomeMedicine>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Home;






