import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
	color: black;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #15cdfc;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: black;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	width: 90%;
	justify-content: flex-start;
	font-weight: 600;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavData = styled.span`
	margin-right: 60px !important;
	color: white;
`;

export const NavContainer = styled.nav`
	box-shadow: -1px 10px 19px 0px rgba(65, 109, 122, 0.19);
	-webkit-box-shadow: -1px 10px 19px 0px rgba(65, 109, 122, 0.19);
	-moz-box-shadow: -1px 10px 19px 0px rgba(65, 109, 122, 0.19);
	height: 130px;
	display: flex;
	flex-direction: column;
	width: 100vw !important;
	z-index: 10;
	justify-content: center;
	align-items: center;
	opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};

	@media screen and (max-width: 950px) {
		width: 100vw;
	}

	@media screen and (max-width: 768px) {
		transition: 0.3s all ease-in-out;
		height: 100px;
	}
`;

export const NavGreen = styled.div`
	background-color: #416d7a;
	margin-top: 10px;
	height: 40px !important;
	z-index: 12;
	border-radius: 7px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 95vw;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavLogo = styled.img`
	margin: -20px 0 0 40px;
	z-index: 15;
	width: auto;
`;

export const NavList = styled.div`
	display: flex;
	width: 85%;
	padding-top: 25px;
	justify-content: space-evenly;
	align-items: center;
`;

export const Icon = styled.i`
	color: white;
	width: 10px;
	height: 10px;
`;

export const NavLogoMobile = styled.img`
	display: none;
	@media screen and (max-width: 768px) {
		z-index: 15;
		right: 38%;
		display: flex;
		position: relative;
	}
	@media screen and (max-width: 675px) {
		z-index: 15;
		right: 35%;
		display: flex;
		position: relative;
	}
	@media screen and (max-width: 490px) {
		z-index: 15;
		right: 32%;
		display: flex;
		position: relative;
	}
	@media screen and (max-width: 392px) {
		z-index: 15;
		right: 30%;
		display: flex;
		position: relative;
	}
	@media screen and (max-width: 330px) {
		z-index: 15;
		right: 27%;
		display: flex;
		position: relative;
	}
`;
