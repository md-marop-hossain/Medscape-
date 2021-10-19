import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="about-section-container">
            <h4 className="about-h4">
                <i> Our mission is to improve patient care with comprehensive clinical information and resources essential to physicians and healthcare professionals.</i>
            </h4>
            <h2 className="who-we-are">Who We Are</h2>
            <p className="about-p"><i>Medscape is the leading online global destination for physicians and healthcare professionals worldwide, offering the latest medical news and expert perspectives; essential point-of-care drug and disease information; and relevant professional education and CME.</i></p>
            <p className="about-p"><i>Medscape membership is free and gives you unlimited access to the entire network of sites and services.</i></p>
        </div>
    );
};
export default AboutUs;