import React from "react";
import Navbar from "../../components/Navbar";
import "./ContactUs.css";
import dot1 from "../../images/dot-contact.png";
import temp from "../../images/temp.png";
import dot2 from "../../images/dot-contact-2.png";
import bg from "../../images/banner-building.png";
import formbg from "../../images/form-bg.png";

const ContactUs = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid my-5">
				<div className="row">
					<div className="col-md-5 col-12 offset-md-1">
						<img src={dot1} alt="dot background" className="dot-1" />
						<h1 className="heading mb-5">Come Visit Us</h1>
						<div className="text-left">
							<p className="headquarters my-5">Headquarters</p>
							<p className="head-address">Ludhiana, Punjab</p>
							<p className="base-address">
								57A, Street No.R3, Premier Industrial <br /> Complex, Near Bonn
								Bread, CHD <br /> Road, Nichi Mangli, Ludhiana, Punjab <br />{" "}
								(India)141010.
							</p>
							<h4 className="sub-heading">Email</h4>
							<p className="base-address">info@neweraglobalpvtltd.com</p>
							<h4 className="sub-heading">Telephone</h4>
							<p className="base-address">+91 161 291 3021</p>
						</div>
					</div>
					<div className="col-md-6 col-12 pt-5 my-5">
						<img src={temp} alt="" className="iframe-map" />
						<img src={dot2} alt="" className="dot2" />
					</div>
				</div>
			</div>
			<div className="row mb-5 banner">
				<div className="col-2 offset-1">
					<h1 className="city py-2 ">MUMBAI</h1>
					<h1 className="city py-2 italic">BANGALORE</h1>
					<h1 className="city py-2 ">KOLKATA</h1>
					<h1 className="city py-2 ">TIRUPUR</h1>
					<h1 className="city py-2 ">BHADOHI</h1>
				</div>
				<div className="col-3 d-flex align-items-center justify-content-end">
					<span className="text-end banner-right-text">
						#913, 11th Cross, Sangamesh <br />
						Nilay, Vidhymanya Nagar,
						<br />
						Bangalore-560091
						<h4 className="sub-heading">Email</h4>
						<p className="base-address">info@neweraglobalpvtltd.com</p>
					</span>
				</div>
				<div className="col-md-6 col-12 mt-5">
					<img src={bg} alt="" className="banner-img" />
				</div>
			</div>
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col-12 text-center">
						<span>got some questions?</span>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-12 text-center">
						<span className="get-in-touch">Get in Touch!</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5 col-12 offset-md-1 mt-5">
						<img src={formbg} alt="" />
					</div>
					<div className="col-md-5 col-12 offset-md-1 mt-5">
						<img src={formbg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
