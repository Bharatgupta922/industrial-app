import React from "react";
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarLink,
	SideBarMenu,
	SideBarDetails,
	Detail,
	NavIcon,
} from "./DropdownElements";

const Dropdown = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink activeStyle to="/" exact>
						Home
					</SideBarLink>
					<SideBarLink activeStyle to="/about">
						About Us{" "}
					</SideBarLink>
					<SideBarLink activeStyle to="/products">
						Products
					</SideBarLink>
					<SideBarLink activeStyle to="/contact">
						Contact Us
					</SideBarLink>
				</SideBarMenu>
				<SideBarDetails>
					<Detail>
						<NavIcon className="bi bi-telephone-fill" /> +91 161 291 3021
					</Detail>
					<Detail>
						<NavIcon class="bi bi-envelope-fill" />
						info@neweraglobalpvtltd.com
					</Detail>
				</SideBarDetails>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default Dropdown;
