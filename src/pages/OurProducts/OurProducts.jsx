import React from "react";
import image14 from "./../../images/waste_treatment_plant.png";
import "./OurProducts.css";
import data from "./../../assets/information.json";
import image1 from "./../../images/products/image1.png";
import image2 from "./../../images/products/image2.png";
import image3 from "./../../images/products/image3.png";
import image4 from "./../../images/products/image4.png";
import image5 from "./../../images/products/image5.png";
import image6 from "./../../images/products/image6.png";
import image7 from "./../../images/products/image7.png";
import image8 from "./../../images/products/image8.png";
import image9 from "./../../images/products/image9.png";
import image10 from "./../../images/products/image10.png";
import image11 from "./../../images/products/image11.png";
import image12 from "./../../images/products/image12.png";
import image13 from "./../../images/products/image13.png";
import icon1 from "./../../images/TechnicalServicesIcon/icon1.png";
import icon2 from "./../../images/TechnicalServicesIcon/icon2.png";
import icon3 from "./../../images/TechnicalServicesIcon/icon3.png";
import icon4 from "./../../images/TechnicalServicesIcon/icon4.png";
import icon5 from "./../../images/TechnicalServicesIcon/icon5.png";
import icon6 from "./../../images/TechnicalServicesIcon/icon6.png";
import icon7 from "./../../images/TechnicalServicesIcon/icon7.png";
import icon8 from "./../../images/TechnicalServicesIcon/icon8.png";
import icon9 from "./../../images/TechnicalServicesIcon/icon9.png";
import { Link } from "react-router-dom";
const OurProducts = () => {
	return (
		<div className="ourproducts">
			<div className="container heading">
				<div className="row">
					<div className="col-sm ">
						<h1>
							{" "}
							<span>Our</span> Products
						</h1>
					</div>
					<div className="col-sm">
						<p>
							high-quality chemicals for textile industry, backed by a century
							of expertise.
						</p>
					</div>
				</div>
			</div>
			<div className="list__of__products">
				<div className="container">
					<div className="row">
						<div className="col-sm package">
							<img src={image1} alt="Wetting Detergent & emulsifiers" />
							<div className="package__description">
								<h4>Wetting Detergent & emulsifiers</h4>
								<p> ● 15 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image2} alt="Levelling Agent" />
							<div className="package__description">
								<h4>Levelling Agent</h4>
								<p> ● 12 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image3} alt="Washing Off / Soaping Agent" />
							<div className="package__description">
								<h4>Washing Off / Soaping Agent</h4>
								<p> ● 5 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image4} alt="Finishing Agents" />
							<div className="package__description">
								<h4>Finishing Agents</h4>
								<p> ● 9 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image5} alt="Substitute" />
							<div className="package__description">
								<h4>Substitute</h4>
								<p> ● 4 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image6} alt="Printing Series" />
							<div className="package__description">
								<h4>Printing Series</h4>
								<p> ● 15 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image7} alt="Knitting" />
							<div className="package__description">
								<h4>Knitting</h4>
								<p> ● 2 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image8} alt="Sequestering Agents" />
							<div className="package__description">
								<h4>Sequestering Agents</h4>
								<p> ● 3 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image9} alt="Lubricants / Anti-crease" />
							<div className="package__description">
								<h4>Lubricants / Anti-crease</h4>
								<p> ● 2 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image10} alt="Fixing Agent" />
							<div className="package__description">
								<h4>Fixing Agent</h4>
								<p> ● 3 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image11} alt="Enzymes" />
							<div className="package__description">
								<h4>Enzymes</h4>
								<p> ● 4 products</p>
							</div>
						</div>
						<div className="col-sm package">
							<img src={image12} alt="Speciality Chemicals" />
							<div className="package__description">
								<h4>Speciality Chemicals</h4>
								<p> ● 6 products</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm package">
							<img src={image13} alt="Spinning" />
							<div className="package__description">
								<h4>Spinning</h4>
								<p> ● 4 products</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="waste__water__treatment__section">
				<p>Learn about our</p>
				<p className="caption">Waste Water Treatment</p>
				<p>(CETP/ETP/STP)</p>

				<div className="waste__water">
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<div className="container points">
									<div className="row">
										{" "}
										● Treatment concept for waste water with the help of
										ANAEROBIC followed by AEROBIC Biological Treatment{" "}
									</div>
									<div className="row">
										{" "}
										● Speciality chemicals used in the process.
									</div>
									<div className="row"> ● Quality Control</div>
								</div>
							</div>
							<div className="col-sm">
								<div className="container">
									<div className="row">
										<img src={image14} alt="water treating plant" />
									</div>
									<div className="row">
										<Link to="/explore">
											<button className="explore__button">Explore more</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="Technical__services">
				<h2>Technical Services</h2>
				<div className="container">
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								{" "}
								<img src={icon1} alt="icon1" />
							</div>
							<p>
								Shop floor investigation for any kind of problems in the process
								house
							</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon2} alt="icon2" />
							</div>
							<p>
								Problem of inconsistent fabric quality and conservation of water
								in a wet processing unit{" "}
							</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon3} alt="icon3" />
							</div>
							<p>Cost saving studies in a modern process house</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon4} alt="icon4" />
							</div>
							<p>
								Machinery maintenance audit in a modern process house to improve
								fabric quality{" "}
							</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon5} alt="icon5" />
							</div>
							<p>
								Maintenance practices and stores consumption based on present
								processing machinery{" "}
							</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon6} alt="icon6" />
							</div>
							<p>Technical training for operators </p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon7} alt="icon7" />
							</div>
							<p>SOP preparation</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon8} alt="icon8" />
							</div>
							<p>
								Online Process control and water conservation audit in a process
								house{" "}
							</p>
						</div>
					</div>
					<div className="row">
						<div>
							<div className="Technical__services__logos">
								<img src={icon9} alt="icon9" />
							</div>
							<p>Process house audit for detailed shop-floor studies </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurProducts;
