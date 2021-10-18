import React from 'react';

import './Medicine.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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

    return (
        <div className="medicine-container">
            <h2 className="medci-h">{name}</h2>
            <h5 className="medci-h">{unit}</h5>
            <h5 className="medci-h"> <i>{category}</i></h5>
            <h5 className="m-h">Manufactured By : {ManufacturedBy}</h5>
            <h5 className="m-h">Description : {detail}</h5>
            <h5 className="m-h">Use : {use}</h5>
            <h5 className="m-h">Precaution : {precaution}</h5>
            <h5 className="m-h">SideEffect : {sideEffect}</h5>
            <h5 className="m-h">Storage : {storage}</h5>

        </div>
    );
};

export default Medicine;