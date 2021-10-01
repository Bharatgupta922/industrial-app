import React from "react";

const AboutCard = () => {
	const data = [
		{
			image: "cf.png",
			heading: "Customer Focus",
			body: "We concentrate our efforts on the individual requirements of our customers and helpthem strengthen their competitive position and performance.",
		},
		{
			image: "cf.png",
			heading: "Personal Engagement",
			body: "We achieve results through individual commitment, continual skills development and entrepreneurial behaviour.",
		},
		{
			image: "cf.png",
			heading: "Team Orientation",
			body: "We rely on the strength of teamwork to achieve synergies and realize our full potential.",
		},
		{
			image: "cf.png",
			heading: "Innovation",
			body: "We utilize our extensive know-how and experience throughout the company to continuously bring new services, applications and products to the market.",
		},
		{
			image: "cf.png",
			heading: "Integrity",
			body: "We are a trustworthy and respectful partner in all our internal and external relationships.",
		},
		{
			image: "cf.png",
			heading: "Sustainability",
			body: "We contribute towards sustainable development by finding the best balance between environmental, social, economic and customer needs.",
		},
	];
	return (
		<>
			{data.map((item, idx) => {
				// const {}
				return (
					<div class="col">
						<div class="card h-100">
							<img
								src={`/images/${item.image}`}
								class="card-img-top"
								alt="card img"
							/>
							<div class="card-body">
								<h3 class="card-title">{item.heading}</h3>
								<p class="card-text">{item.body}</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default AboutCard;
