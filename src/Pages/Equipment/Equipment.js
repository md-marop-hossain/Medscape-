import React from 'react';
import { useState, useEffect } from 'react';
import EquipmentProduct from '../EquipmentProduct/EquipmentProduct';
import { Row, Container, Col } from 'react-bootstrap';
import './Equipment.css';



const Equipment = () => {


    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-marop-hossain/fake-json-data/main/equipment.json')
            .then(res => res.json())
            .then(data => {
                console.log("eq: ", data);
                setEquipments(data);

            })

    }, [])

    return (
        <div className="home-container">

            <Container >
                <Row xs={1} md={2} lg={3} className="">

                    {
                        equipments.map(equipment => <EquipmentProduct
                            key={equipment.equipId}
                            equipment={equipment}
                        >

                        </EquipmentProduct>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Equipment;