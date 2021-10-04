import React from "react";
import "./LandingPage.css";
import image1 from "./../images/sideImage.png";
import image2 from "./../images/Levelling_agent.png";
import image3 from "./../images/Wetting_detergents_emulsifiers.png";
import image4 from "./../images/Speciality_chemicals.png";
import image5 from "./../images/WasteWaterTreatMentPlant.png";
import image7 from "./../images/water_Image.png";
import cf from "../images/cf-home.png";
import sus from "../images/sus-home.png";
import inn from "../images/innovative.png";
import rd from "../images/Research_Development.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const data = {
		theory_1:
			"We are a strategic textile solution provider company that produces a broad range of eco-friendly products and speciality products for textile wet processing industry, with the purpose of enhancing the quality of life in optimistic way. We offer chemicals for pre-treatment, dyeing, printing, fixing, finishing of textiles and many more sustainable chemical solutions. ",
		sub_1:
			"We work with customers to deliver innovative products and solutions while maintaining a commitment to safety and sustainability.",
		theory_2:
			"The Effluent Treatment Plant (ETP) is designed to ensure the removal of present in waste water such as BOD, COD, TSS, AMMONIA, OIL & GREASE dissolved and suspended organic matter and many other contaminants which are generated from various industrial waste water processes.The environmental conditions are optimized in the ETP to encourage the growth of micro-organisms which consume these organic materials as their food for growth and mulplication which further help in providing water as per PCB norms. The ETP is also capable for removal of other contaminants present in waste water including suspended solids, nitrogen, phosphorous during various stages of treatment.",
		theory_3:
			"Our main strength lies in our Research & Development, where our team of technicians are working to develop new products, so that the production time and energy can be optimised, without any hazards to the environment. We always ensure the quality of product supplied to the customer is up-to notch and thus regular quality test reports are generated.",
	};
	return (
		<>
			<div
				className="container-fluid landingPage"
				style={{ marginTop: "120px", padding: "0" }}
			>
				<div className="row p-5 about">
					<div className="col-md-5 col-12 aboutImage">
						<img
							src={image1}
							alt="black_and_white"
							className="circular__image"
							// style={{ height: "auto", width: "auto" }}
						/>
					</div>
					<div className="col-md-4 col-12 text-start aboutText">
						<p className="theory-1">{data.theory_1}</p>
						<p className="theory-1">{data.sub_1}</p>
					</div>
				</div>
				<div className="row g-0 mt-5">
					<div className="col-12 text-center">
						<span className="heading-1">Our Products</span>
					</div>
				</div>
				<div className="row g-0 mb-5" style={{ transform: "rotate(180deg)" }}>
					<div className="col-12 text-center">
						<span className="heading-1">______</span>
					</div>
				</div>

				<div
					className="row g-0 d-flex justify-content-center align-items-center products"
					// style={{ overflowX: "true" }}
					// style={{margin:"0"}}
				>
					<div className="col-3 g-1">
						<img
							src={image2}
							alt="Levelling_agent"
							className="image_product__2"
						/>
					</div>
					<div className="col-3 g-1">
						<img
							src={image3}
							alt="Wetting_detergents_emulsifiers"
							className="image_product__3"
						/>
					</div>
					<div className="col-3 g-1">
						<img
							src={image4}
							alt="Speciality_chemicals"
							className="image_product__4"
						/>
					</div>
				</div>
				<div className="row g-0 my-5 py-5">
					<div className="col-12 text-center">
						<span>
							<button className="explore-btn">Explore More</button>
						</span>
					</div>
				</div>
				<div className="row g-0">
					<div className="col-12 text-center" style={{ width: "100%" }}>
						<span>
							<img
								src={image5}
								alt="Waste Water TreatMent Plant"
								className="art__water__treatment_plant"
								style={{ width: "80%", height: "45vh" }}
							/>
						</span>
					</div>
				</div>
				<div className="container mb-5">
					<div className="row g-0 waste-water-card">
						<div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column ">
							<span className="waste-heading pb-2 pt-0 px-0 text-center">
								WASTE WATER TREATMENT
							</span>
							<img
								src={image7}
								alt="water"
								className="water__image col-10 mb-3"
							/>
						</div>
						<div className="col-md-6 col-12 d-flex justify-content-start align-items-start flex-column">
							<span className="waste-body mb-auto">{data.theory_2}</span>
							<span className="waste-body">
								<Link to="products" style={{ textDecoration: "none" }}>
									Read More{" "}
								</Link>
							</span>
						</div>
					</div>
				</div>
				<div className="row g-0 mb-5 p-5 special-background">
					<div className="col-md-3 col-12 d-flex justify-content-center align-items-center flex-column">
						<h2 className="special-text mb-5">CUSTOMER FOCUS</h2>
						<img src={cf} alt="cf" />
					</div>
					<div className="col-md-3 col-12 d-flex justify-content-center align-items-center flex-column">
						<h2 className="special-text mb-5">SUSTAINABLE</h2>
						<img src={sus} alt="cf" />
					</div>
					<div className="col-md-3 col-12 d-flex justify-content-start align-items-center flex-column">
						<h2 className="special-text mb-5">INNOVATIVE</h2>
						<img src={inn} alt="cf" />
					</div>
				</div>
				<div className="row g-0 mt-5">
					<div className="col-12 text-center">
						<span className="heading-1">Research and Development</span>
					</div>
				</div>
				<div className="row g-0 mb-5" style={{ transform: "rotate(180deg)" }}>
					<div className="col-12 text-center">
						<span className="heading-1">________________</span>
					</div>
				</div>
				<div className="row g-0 my-5 research">
					<div className="col-md-4 col-12 offset-md-2 d-flex justify-content-start">
						<span className="r-and-d">
							Our main strength lies in our Research & Development, where our
							team of technicians are working to develop new products, so that
							the production time and energy can be optimised, without any
							hazards to the environment.
							<br />
							<br />
							We always ensure the quality of product supplied to the customer
							is up-to notch and thus regular quality test reports are
							generated.
						</span>
					</div>
					<div className="col-md-4 col-12 text-center">
						<img src={rd} alt="research and development" />
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
