import React, { useState } from "react";
import "./ContactUs.css";
import dot1 from "../../images/dot-contact.png";
import dot2 from "../../images/dot-contact-2.png";
import bg from "../../images/banner-building.png";
import formbg from "../../images/form-bg.png";
import Map from "./Map";
const ContactUs = () => {
	const [address, setAddress] = useState(`#913, 11th Cross, Sangamesh\n
		 Nilay, Vidhymanya Nagar,\n
	Bangalore-560091`);

	const [index, setIndex] = useState(2);

	const addr = (idx) => {
		// let e =
		setIndex(idx);
		switch (idx) {
			case 1:
				setAddress(
					`Shree Parasnath Complex, KUD Business Avenue, Bhiwandi, Mumbai-421302`,
				);
				// e.target.className(`${classItalic}`);
				break;
			case 2:
				setAddress(`#913, 11th Cross, Sangamesh\n
				Nilay, Vidhymanya Nagar,\n
		   Bangalore-560091`);
				break;
			case 3:
				setAddress(`15/1/23, Jheel Road, Bank Plot, Kolkata, 700031`);
				break;
			case 4:
				setAddress(`#6, First Street, Gandhi Nagar, Tirupur - 641603`);
				break;
			case 5:
				setAddress(`CHauri Road, In front of CSC Block, Bhadohi - 221401`);
				break;
			default:
				break;
		}
	};
	return (
		<>
			<div className="container-fluid my-5 ">
				<div className="row g-0 visit-container">
					<div className="visit-text">
						<img src={dot1} alt="dot background" className="dot-1" />
						<h1 className="heading-contact mb-4">Come Visit Us</h1>
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
						<Map />
						<img src={dot2} alt="" className="dot2" />
					</div>
				</div>
			</div>
			<div className="row banner">
				<div className="banner-top">
					<div className="banner-cities">
						<h1
							className={`city py-2 ${index === 1 ? `italic` : ``}`}
							onClick={() => addr(1)}
						>
							MUMBAI
						</h1>
						<h1
							className={`city py-2 ${index === 2 ? `italic` : ``}`}
							onClick={() => addr(2)}
						>
							BANGALORE
						</h1>
						<h1
							className={`city py-2 ${index === 3 ? `italic` : ``}`}
							onClick={() => addr(3)}
						>
							KOLKATA
						</h1>
						<h1
							className={`city py-2 ${index === 4 ? `italic` : ``}`}
							onClick={() => addr(4)}
						>
							TIRUPUR
						</h1>
						<h1
							className={`city py-2 ${index === 5 ? `italic` : ``}`}
							onClick={() => addr(5)}
						>
							BHADOHI
						</h1>
					</div>
					<div className="banner-address">
						<span className="banner-right-text">
							{address}
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
							<div class="form-group m-3">
								<input
									type="text"
									class="form-control"
									id="firstname"
									placeholder="First Name"
								/>
							</div>
							<div class="form-group m-3">
								<input
									type="text"
									class="form-control"
									id="lastname"
									placeholder="Last Name"
								/>
							</div>
							<div className="form-group m-3">
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder="What's your email ?"
								/>
							</div>
							<div className="form-group m-3">
								<textarea
									class="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Your questions ?"
								></textarea>
							</div>
							<div className="form-group m-3">
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
