import React from 'react';
import { Container } from 'react-bootstrap';
import './TrendingOnMedscape.css';

const TrendingOnMedscape = () => {
    return (
        <div className="card-trending">
            <Container>
                <h2 className="mb-4">TRENDING ON MEDSCAPE</h2>
                <div class="row">
                    <div class="col-lg-4 ">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">1</h1>
                                <p class="card-text cardtext-color">Its Okay for Docs to Refuse to Treat Unvaccinated Patients</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">2</h1>
                                <p class="card-text cardtext-color">Family Herd Immunity: Study Shows Dramatic Protection</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">3</h1>
                                <p class="card-text cardtext-color">Failure to Communicate '' Blamed for Patient's Death</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-3">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">4</h1>
                                <p class="card-text cardtext-color">Many Scientists Face Serious Threats for Speaking About COVID</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-3">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">5</h1>
                                <p class="card-text cardtext-color">FDA Neutral on Moderna Bid for Booster Ahead of Decisive Meeting</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrendingOnMedscape;