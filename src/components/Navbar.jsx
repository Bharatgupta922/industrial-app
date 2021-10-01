import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
	return (
		<div className="shadow-box">
			<div className="wrapper">
				<div className="rectangle">
					<figure className="logo-box">
					<Link to = "/">
						<img src={logo} alt="Logo" />
					</Link>
					</figure>
					<ul className="top-two">
						<li>
							<i class="bi bi-telephone-fill"></i> +91 161 291 3021
						</li>
						<li>
							<i class="bi bi-envelope-fill"></i> info@neweraglobalpvtltd.com
						</li>
					</ul>
				</div>
				<div className="group-6">
					<ul className="outer-list">
						<li className="nav-item">
						<Link to = "/">
							<a>Home</a>
						</Link >
						</li>
						<li className="nav-item">
							<Link to="/about">
							<a>About Us</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products">
							<a>Products</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact">
							<a>Contact Us </a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
