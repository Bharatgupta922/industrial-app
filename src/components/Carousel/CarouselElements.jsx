import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #416d7a;
	/* border: 5px solid red; */
	flex-direction: column;
`;

export const Container = styled.div`
	width: 90vw;
	overflow-y: hidden;
	/* border: 5px solid blue; */
	height: 80vh;
	/* overflow-x: scroll; */
	overflow-x: auto;
	scroll-behavior: smooth;
	display: flex;
	scroll-snap-type: x mandatory;
	box-sizing: border-box;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SingleElement = styled.div`
	animation: carousel 20s cubic-bezier(0.4, 0, 0.34, 0.9) infinite;
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
	z-index: 500;
	width: 100vw;
	height: 35vw;
	scroll-snap-align: start;
	box-sizing: border-box !important;
	color: white;

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
	/* margin: 2rem; */
	height: 20vh;
	/* border: 1px solid yellow; */
	justify-content: center;
	align-items: center;
`;
