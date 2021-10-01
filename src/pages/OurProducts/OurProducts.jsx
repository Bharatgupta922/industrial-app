import React from 'react'
import image1 from "./../../images/waste_treatment_plant.png";
import "./OurProducts.css";
const OurProducts = () => {
    return (
        <div className="ourproducts">
            <div className = "waste__water__treatment__section">
                <p>Learn about our</p>
                <h1>Waste Water Treatment</h1>
                <p>(CETP/ETP/STP)</p>

                <div className="waste__water">
                <div className="waste__water__left">
                <ul className="waste__water__list list-group">
                <li className="list-group-item">Treatment concept for waste water with the help of ANAEROBIC followed by AEROBIC Biological Treatment </li>
                <li className="list-group-item">Speciality chemicals used in the process.</li>
                <li className="list-group-item">Quality Control</li>
                </ul>
                </div>
                <div className="waste__water__right">
                    <img src={image1} alt="water treating plant"/>
                    <button>Explore more</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts;