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
					<NavLink to="/" exact activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About Us
					</NavLink>
					<NavLink to="/products" activeStyle>
						Products
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
				</NavList>
			</NavMenu>
		</NavContainer>
	);
};

export default Navbar;
