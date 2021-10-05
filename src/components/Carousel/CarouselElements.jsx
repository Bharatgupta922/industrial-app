import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #416d7a;
	// border:5px solid red;
	flex-direction: column;
`;

export const Container = styled.div`
	width: 100%;
	overflow-y: hidden;
	/* border: 5px solid blue; */

	overflow-x: auto;
	/* height: 70vh; */
	scroll-behavior: smooth;
	display: flex;
	scroll-snap-type: x mandatory;
	box-sizing: border-box;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	/* animation: carousel 20s linear infinite; */
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SingleElement = styled.div`
	flex: 0 0 auto;
	display: flex;
	/* border: 5px solid black; */
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
	width: 100%;
	height: 35vw;
	scroll-snap-align: start;
	box-sizing: border-box !important;
	color: white;

	&:nth-child() {
		background-color: yellow;
	}

	@media only screen and (max-width: 650px) {
		flex-direction: column;
		height: 80vw;
	}

	@media only screen and (max-width: 450px) {
		height: 90vw;
	}

	@media only screen and (max-width: 350px) {
		flex-direction: column;
		height: 120vw;
	}
`;

export const LinkWrapper = styled.div`
	display: flex;
`;

export const Button = styled.button`
	height: 5px;
	width: 20px;
	margin: 1rem;
	background-color: rgba(0, 0, 0, 0.4);
	display: inline-block;
`;

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
