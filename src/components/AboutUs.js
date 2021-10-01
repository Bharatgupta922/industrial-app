import React from "react";
import image from "./../images/sideImage.jpg";
import "./AboutUs.css";
const AboutUs = () => {
	return (
		<div className="About">
			<div className="About__left">
				<img src={image} />
			</div>
			<div className="About__right">
				<p>
					We are a strategic textile solution provider company that produces a
					broad range of eco-friendly products and speciality products for
					textile wet processing industry, with the purpose of enhancing the
					quality of life in optimistic way. We offer chemicals for
					pre-treatment, dyeing, printing, fixing, finishing of textiles and
					many more sustainable chemical solutions.
					<br />
					We work with customers to deliver innovative products and solutions
					while maintaining a commitment to safety and sustainability.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
