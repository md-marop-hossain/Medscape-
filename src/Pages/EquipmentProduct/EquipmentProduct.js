import React from 'react';
import './EquipmentProduct.css';
import { Card } from 'react-bootstrap';
import './EquipmentProduct.css';
const EquipmentProduct = (props) => {
    const { ManufacturedBy, detail, equipImage, material, name, price, use } = props.equipment || {};
    return (
        <div>
            <Card className="equipment-product-container">
                <Card.Img variant="top" src={equipImage} />
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>
                        <div className="card-div">
                            <p className="medicine-p">Detail : {detail.slice(0, 50)}</p>
                            <p className="medicine-p">Material : {material}</p>
                            <p className="medicine-p">Use : {use.slice(0, 160)}</p>
                            <p className="medicine-p">Price : {price}</p>
                            <p className="medicine-p">Manufactured By : {ManufacturedBy}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    );
};
export default EquipmentProduct;