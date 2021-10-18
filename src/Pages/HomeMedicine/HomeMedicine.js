import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeMedicine.css';
import { Link } from 'react-router-dom';

const HomeMedicine = (props) => {
    const { ManufacturedBy, category, detail, id, medicineImage, name, precaution, price, sideEffect, storage, type, use, unit } = props.medicine;
    console.log("from home: ", props.medicine);
    return (
        <div>


            <Card className="home-card ">
                <Card.Img variant="top" src={medicineImage} />
                <Card.Body>
                    <Card.Title>{name} {unit} </Card.Title>
                    <Card.Text>

                        <div className="card-div">
                            <p className="medicine-p">Category: {category}</p>
                            <p className="medicine-p">Type: {type}</p>

                            <p className="medicine-p">Price: {price}</p>
                            <p className="medicine-p">Manufactured By: {ManufacturedBy}</p>
                        </div>



                        <Link to={`/medicine/${id}`}>

                            <button>Show Details</button>

                        </Link>



                    </Card.Text>
                </Card.Body>
            </Card >



        </div>
    );
};

export default HomeMedicine;