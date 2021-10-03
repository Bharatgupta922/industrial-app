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
			<div className="container-fluid my-5">
				<div className="row g-0 visit-container">
					<div className="visit-text">
						<img src={dot1} alt="dot background" className="dot-1" />
						<h1 className="heading mb-4">Come Visit Us</h1>
						<div className="text-left">
							<p className="headquarters my-3">Headquarters</p>
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
					<div className="visit-map">
						<img src={temp} alt="" className="iframe-map" />
						<img src={dot2} alt="" className="dot2" />
					</div>
				</div>
			</div>
			<div className="row banner">
				<div className="banner-top">
					<div className="banner-cities">
						<h1 className="city py-2 ">MUMBAI</h1>
						<h1 className="city py-2 italic">BANGALORE</h1>
						<h1 className="city py-2 ">KOLKATA</h1>
						<h1 className="city py-2 ">TIRUPUR</h1>
						<h1 className="city py-2 ">BHADOHI</h1>
					</div>
					<div className="banner-address">
						<span className="banner-right-text">
							#913, 11th Cross, Sangamesh <br />
							Nilay, Vidhymanya Nagar,
							<br />
							Bangalore-560091
							<h4 className="sub-heading">Email</h4>
							<span className="base-address" style={{ wordWrap: "break-word" }}>
								info@neweraglobalpvtltd.com
							</span>
						</span>
					</div>
				</div>

				<div className="banner-img-container">
					<img src={bg} alt="" className="banner-img" />
				</div>
			</div>
			<div className="container-fluid mt-5">
				<div className="row g-0">
					<div className="col-12 text-center">
						<span>got some questions?</span>
					</div>
				</div>
				<div className="row g-0 mb-3">
					<div className="col-12 text-center">
						<span className="get-in-touch">Get in Touch!</span>
					</div>
					<div className="row g-0 mb-5" style={{ transform: "rotate(180deg)" }}>
						"
						<div className="col-12 text-center">
							<span className="heading-1">______</span>
						</div>
					</div>
				</div>

				<div className="row g-0 getInTouchForm">
					<div className="col-md-5 col-7">
						<img src={formbg} alt="form bg" />
					</div>
					<div className="col-md-5 col-8 mb-3">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small id="emailHelp" class="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input
									type="password"
									class="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<div class="form-group form-check">
								<input
									type="checkbox"
									class="form-check-input"
									id="exampleCheck1"
								/>
								<label class="form-check-label" for="exampleCheck1">
									Check me out
								</label>
							</div>
							<button type="submit" class="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					{/* <div className="col-md-5 col-12 offset-md-1 mt-5">
						<img src={formbg} alt="" />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default ContactUs;
