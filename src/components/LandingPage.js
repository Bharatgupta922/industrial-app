import React from 'react';
import "./LandingPage.css";
import image1 from "./../images/sideImage.jpg";
import image2 from "./../images/Levelling_agent.png";
import image3 from "./../images/Wetting_detergents_emulsifiers.png";
import image4 from "./../images/Speciality_chemicals.png";
import image5 from "./../images/WasteWaterTreatMentPlant.png";
import image6 from "./../images/sideBar.png";
import image7 from "./../images/water_Image.png";
import image8 from "./../images/Middle_Bar.png";
import image9 from "./../images/readmore.png";
import image10 from "./../images/Features.png";
import image11 from "./../images/DottedPattern.png";
import image12 from "./../images/Research_Development.png";

const LandingPage = () => {
    const data = {
        theory_1:'We are a strategic textile solution provider company that produces a broad range of eco-friendly products and speciality products for textile wet processing industry, with the purpose of enhancing the quality of life in optimistic way. We offer chemicals for pre-treatment, dyeing, printing, fixing, finishing of textiles and many more sustainable chemical solutions. We work with customers to deliver innovative products and solutions while maintaining a commitment to safety and sustainability.',
        theory_2:'The Effluent Treatment Plant (ETP) is designed to ensure the removal of present in waste water such as BOD, COD, TSS, AMMONIA, OIL & GREASE dissolved and suspended organic matter and many other contaminants which are generated from various industrial waste water processes.The environmental conditions are optimized in the ETP to encourage the growth of micro-organisms which consume these organic materials as their food for growth and mulplication which further help in providing water as per PCB norms. The ETP is also capable for removal of other contaminants present in waste water including suspended solids, nitrogen, phosphorous during various stages of treatment.',
        theory_3:'Our main strength lies in our Research & Development, where our team of technicians are working to develop new products, so that the production time and energy can be optimised, without any hazards to the environment. We always ensure the quality of product supplied to the customer is up-to notch and thus regular quality test reports are generated.',
    };
    return (
        <div className = "LandingPage">
            <div className = "main">
            <div className = "theory__section">
            <div className="theory__left">
            <img src = {image1} alt = "black_and_white photo" className = "Circular__image" />
            </div>
            <div className="theory__right">
            <p className = "theroy">{data.theory_1}</p>
            </div>
            </div>
            <div className = "Our__products">
            <h2 className="our__products__heading">Our Products</h2>
            <p className="our__products__subheading">high-quality chemicals for textile industry, backed by a century of expertise.</p>
            <div className="our__products__images">
            <img src = {image2} alt = "Levelling_agent" className= "image_product__2" />
            <img src = {image3} alt = "Wetting_detergents_emulsifiers" className= "image_product__3" />
            <img src = {image4} alt = "Speciality_chemicals" className= "image_product__4" />
            </div>
            <div className="explore__button">
            <button>Explore More</button>
            </div>
            </div>
            <div className = "water__treatment__section">
                <img src = {image5} alt = "Waste Water TreatMent Plant" className="art__water__treatment_plant" />
                <div className="content__water__treatment">
                    <img src = {image6} alt = "sidebar" className="sidebar__water__treatment" />
                    <div className = "Water__treatment__left">
                        <h3 className="water__treatment__heading">WASTE WATER TREATMENT</h3>
                        <img src = {image7} alt = "water image" className="water__image" />
                    </div>
                    <img src = {image8} alt = "middle bar" className = "middle__Bar" />
                    <div className = "Water__treatment__right">
                        <p className="water__treatment__theory">{data.theory_2}</p>
                        <img src={image9} alt = "read more image" className = "readmore" />
                        <img src = {image11} alt = "dotts" className = "dotted__pattern" />
                    </div>
                </div>
            </div>
            <div className = "features__section">
                <div className = "featureas__images">
                    <img src = {image10} alt = "features"/>
                </div>
            </div>
            <div className = "Research__development__section">
                <h2>Research and Development</h2>
                <div className="Research__development__content">
                    <p>{data.theory_3}</p>
                <img src = {image12} alt = "research and development image" />
                </div>
            </div>
        </div>
        </div>
    )
};

export default LandingPage;
