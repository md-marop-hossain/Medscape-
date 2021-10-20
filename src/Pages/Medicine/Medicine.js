import React from 'react';
import './Medicine.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
const Medicine = () => {
    const { medicineId } = useParams();
    const [medicineProduct, setMedicineProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-marop-hossain/fake-json-data/main/medicine.json')
            .then(res => res.json())
            .then(data => {

                setMedicineProduct(data)
            });
    }, [medicineId]);
    const md = medicineProduct.find(m => m.id == medicineId);
    const { name, category, precaution, sideEffect, storage, use, unit, ManufacturedBy, detail } = md || {};
    const history = useHistory();
    const handleBackHomebutton = () => {
        history.push('/home');
    }
    return (
        <div className="medicine-container">
            <h2 className="medci-h">{name}</h2>
            <h5 className="medci-h">{unit}</h5>
            <h5 className="medci-h"> <i>{category}</i></h5>
            <h5 className="m-h">Manufactured By : <span className="medicine-p"><i>{ManufacturedBy}</i></span></h5>
            <h5 className="m-h">Description : <span className="medicine-p"><i>{detail}</i></span></h5>
            <h5 className="m-h">Use : <span className="medicine-p"><i>{use}</i></span></h5>
            <h5 className="m-h">Precaution : <span className="medicine-p"><i>{precaution}</i></span></h5>
            <h5 className="m-h">SideEffect : <span className="medicine-p"><i>{sideEffect}</i></span></h5>
            <h5 className="m-h">Storage : <span className="medicine-p"><i>{storage}</i></span></h5>

            <div className="button-container">

                <button className="btn-medicine" onClick={handleBackHomebutton}>Go Home</button>
            </div>

        </div>
    );
};

export default Medicine;