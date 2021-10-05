import React from "react";
import {
	Container,
	SingleElement,
	LinkWrapper,
	Button,
	Wrapper,
	Heading,
} from "./CarouselElements";

import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import "./Carousel.css";

const Carousel = () => {
	return (
		<Wrapper>
			<Container>
				<SingleElement id="1">
					<div className="left">
						<h1>ECO-FRIENDLY CHEMICAL SOLUTIONS</h1>
						<p>
							We provide best chemical
							<br /> solutions for textile
							<br /> industry
						</p>
					</div>
					<div className="right">
						<figure>
							<img src={c1} alt="" />
						</figure>
					</div>
				</SingleElement>
				<SingleElement id="2">
					<div className="left">
						<h1>STRATEGIC TEXTILE SOLUTIONS</h1>
						<p className="not-white">
							Every product is prepared
							<br />
							with utmost care and
							<br /> intense research.
						</p>
					</div>
					<div className="right">
						<figure>
							<img src={c2} alt="" />
						</figure>
					</div>
				</SingleElement>
				<SingleElement id="3">
					<div className="left">
						<h1>VARIETY OF CHEMICAL SOLUTIONS</h1>
						<p>
							Wide range of agents,
							<br /> lubricants, emulsifiers,
							<br /> enzymes, speciality
							<br />
							chemicals & more.
						</p>
					</div>
					<div className="right">
						<figure>
							<img src={c3} alt="" />
						</figure>
					</div>
				</SingleElement>
				<SingleElement id="4">
					<div className="left">
						<h1>WE USE BEST TECHNOLOGY</h1>
						<p className="not-white">
							Every chemical solution is
							<br /> tried and tested using
							<br /> cutting-edge technology.
						</p>
					</div>
					<div className="right">
						<figure>
							<img src={c4} alt="" />
						</figure>
					</div>
				</SingleElement>
			</Container>
			<Heading>
				<h1 className="landing-page-title">New Era Global</h1>
				<h2>One-stop solution for all your needs</h2>
			</Heading>
			<LinkWrapper>
				<Button as="a" href="#1" />
				<Button as="a" href="#2" />
				<Button as="a" href="#3" />
				<Button as="a" href="#4" />
			</LinkWrapper>
		</Wrapper>
	);
};

export default Carousel;
