import React from "react";
import Navbar from "../../components/Navbar";
import company from "../../images/about-company.png";
import "./About.css";

const About = () => {
	return (
		<>
			{/* <h1>About Page</h1> */}
			<Navbar />
			<div className="container-fluid mt-5 pt-5">
				{/* <figure> */}
				<div className="row">
					<div className="col-md-10 col-12 mx-auto">
						<img src={company} alt="company img" className="banner-img" />
					</div>
				</div>
				{/* </figure> */}

				<div className="content-1 mt-5">
					<div className="row">
						<div className="col-md-6 col-12 mx-auto">
							<p className="text-center">
								<b>New Era Global</b> is an organisation of people who has
								passion for textiles that develops produces and sells chemicals
								for the textile industry. We are science lovers and develop
								products as per the trends of textile industry, and add value to
								your fabrics and help you to optimise your production process.
								With the changing trends of textile industry, we create products
								that exceeds expectations. In New Era Global, we set our own
								standards instead of following others.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-12 mx-auto my-5 p-3 content-1-heading">
							<h3 className="text-center">
								In today's market we follow the concept of One-stop solutions
								for all your needs.
							</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-12 mx-auto">
							<p className="text-center">
								<b>New Era Global</b> is a strategic textile solution provider
								company that produces a broad range of ecofriendly products and
								speciality products for textile wet processing industry, with
								the purpose of enhancing the quality of life in optimistic way,
								we work with customers to deliver innovative products and
								solutions while maintaining a commitment to safety and
								sustainability. The company's customer oriented growth model
								takes advantage of world-class technology platforms,
								distinguished application development and deep customer
								engagement to grow its leading positions in textile industry.
								With the manufacturing of innovative quality products at
								competitive prices and industry oriented technical services for
								the wide range of textile solutions, NEW ERA GLOBAL, has gained
								new heights of appreciation and recognition in domestic and
								international market.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
