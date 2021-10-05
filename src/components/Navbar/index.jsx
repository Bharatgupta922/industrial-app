import React from "react";
import {
	NavLink,
	Bars,
	NavMenu,
	NavData,
	NavContainer,
	NavLogoMobile,
	NavGreen,
	NavLogo,
	NavList,
	Icon,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = ({ isOpen, toggle }) => {
	return (
		<NavContainer isOpen={isOpen}>
			<NavLogoMobile src={logo} alt="logo" />
			<Bars onClick={toggle} />
			<NavGreen>
				<NavData>
					<Icon className="bi bi-telephone-fill"></Icon> +91 161 291 3021
				</NavData>
				<NavData>
					<Icon class="bi bi-envelope-fill"></Icon> info@neweraglobalpvtltd.com
				</NavData>
			</NavGreen>
			<NavMenu>
				<NavLogo src={logo} alt="logo" />
				<NavList>
					<NavLink to="/" exact activeClassName="selected">
						Home
					</NavLink>
					<NavLink to="/about" activeClassName="selected">
						About Us
					</NavLink>
					<NavLink to="/products" activeClassName="selected">
						Products
					</NavLink>
					<NavLink to="/contact" activeClassName="selected">
						Contact Us
					</NavLink>
				</NavList>
			</NavMenu>
		</NavContainer>
	);
};

export default Navbar;
