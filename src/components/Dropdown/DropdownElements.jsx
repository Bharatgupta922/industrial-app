import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	color: black;
	transition: 0.3s all ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: black;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SideBarWrapper = styled.div`
	color: black;
`;
export const SideBarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SideBarLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	transition: 0.2s ease-in-out;
	color: black;
	cursor: pointer;
	list-style: none;

	&::hover {
		color: red;
		transition: 0.2s ease-in-out;
	}
`;

export const SideBarDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Detail = styled.div`
	border-radius: 50px;
	/* background-color: yellow; */
	white-space: nowrap;
	padding: 16px 64px;
	color: black;
	font-size: 16px;
	outline: none;
	border: none;
`;

export const NavIcon = styled.i`
	color: black;
	width: 10px;
	height: 10px;
`;
