import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="shadow-box">
			<div className="wrapper">
				<div className="rectangle">
					<figure className="logo-box">
						<img src={logo} alt="Logo" />
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
							<Link style={{ textDecoration: "none", color: "#343e41" }} to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								style={{ textDecoration: "none", color: "#343e41" }}
								to="/about"
							>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								style={{ textDecoration: "none", color: "#343e41" }}
								to="/products"
							>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link
								style={{ textDecoration: "none", color: "#343e41" }}
								to="contact"
							>
								Contact Us{" "}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
