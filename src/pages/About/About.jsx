import React from "react";
import company from "../../images/about-company.png";
import banner from "../../images/logo-banner.png";
import person from "../../images/person.png";
import dot from "../../images/dot-background.png";
import dot2 from "../../images/dot-2.png";
import mission from "../../images/mission-bg.png";
import "./About.css";
import AboutCard from "../../components/AboutCard";

const About = () => {
	return (
		<>
			<div className="container-fluid mt-5 pt-5">
				<div className="row">
					<div className="col-12 hero-banner d-flex align-items-center justify-content-center">
						<img src={company} alt="company img" className="banner-img" />
					</div>
				</div>

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
						<div className="col-md-6 col-12 mx-auto mb-5">
							<p className="text-center mb-3">
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
			<div className="row section-partition">
				{/* <div className="col-12 mx-auto my-2">
					<div className="row d-flex justify-content-center "> */}
				<div className="col-md-12 col-lg-7 col-12 my-4 py-2">
					<p className="text-center">
						<span className="first-line"> We are ASSOCIATED with </span> <br />{" "}
						<span className="second-line"> METSA</span> <br />{" "}
						<span className="third-line">
							{" "}
							for dyeing machineries and Technical Services.
						</span>
					</p>
				</div>
				<div className="col-md-12 col-lg-5 col-11 offset-0 mt-4 logo-banner  d-flex justify-content-center align-items-center ">
					<img src={banner} alt="logo banner" />
				</div>
				{/* </div>
				</div> */}
			</div>
			<div className="container-fluid check-small">
				<div className="row mt-5">
					<div className="col-md-4 col-12 offset-md-4 d-flex justify-content-center my-5">
						<h1 className="heading-about">Our Vision</h1>
					</div>
				</div>
				<div className="row justify-content-center mt-2 special-background">
					<div className="col-md-4 col-10 order-md-0 order-0 py-5 offset-md-0 offset-2">
						<img src={person} alt="" className="person-img" />
					</div>
					<div className="quotation-text col-md-6 col-12 order-md-1 order-1 d-flex align-items-center">
						<span className="text-center">
							To be a competitive leader in the textile processing sector
							locally and globally by constantly developing and upgrading our
							products as well as providing in-depth textile solutions while
							remaining true to our core values and sustainability.
						</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-12 offset-md-3 mx-auto">
						<div className="dot-background">
							<img src={dot} alt="" />
						</div>
						<span className="heading">OUR VALUES</span>
					</div>
				</div>
				<div className="container">
					<div class="row row-cols-1 row-cols-md-3 offset-md-1 g-5">
						<AboutCard />
					</div>
					<div className="col-md-2 offset-md-10 dot2">
						<img src={dot2} alt="" />
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-4 col-12 offset-md-4 d-flex justify-content-center my-5">
						<h1 className="heading-about">Our Mission</h1>
					</div>
				</div>
				<div className="row justify-content-center mt-2 mb-5 pb-3 special-background">
					<div className="quotation-text col-md-6 col-12 offset-md-1 order-md-0 order-0 d-flex align-items-center">
						<span className="text-center">
							To produce, distribute, and sell the innovative quality chemicals
							and to provide textile solutions with a continued commitment to
							meet the industry needs & standards while promoting business
							practices that respect our customers, our employees, our suppliers
							and the environment.
						</span>
					</div>
					<div className="col-md-4 col-10 offset-2 order-md-1 order-1 offset-md-1  p-5 ml-5">
						<img src={mission} alt="" className="person-img" />
					</div>
				</div>
				{/* </div> */}
			</div>
		</>
	);
};

export default About;
