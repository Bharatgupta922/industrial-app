import React from "react";
import "./Footer.css";
import image1 from "./../images/FooterLogo.jpg";
import { Link } from "react-router-dom";
import Map from "./../pages/ContactUs/Map";
const Footer = () => {
	return (
		<footer class="webintern-footer footer">
			<div class="webintern-footer-inner">
				<div class="container-fluid px-5">
					<div class="row">
						<div class="col-sm-4 col-md-3 ">
							<figure>
								<img
									class="Footer__image"
									src={image1}
									style={{ width: "200px" }}
									alt="Simply Go Green"
								/>
							</figure>
							<div class="empty-space xs-25 sm-25"></div>
						</div>
						<div class="col-sm-4 col-md-2 footer-2">
							<h4 class="webintern_footer_title h5">
								<small>Quick Links</small>
							</h4>
							<ul class="webintern-footer-list offices">
								<li>
									<Link style={{ textDecoration: "none" }} to="/">
										Home
									</Link>
								</li>
								<li>
									<Link style={{ textDecoration: "none" }} to="/about">
										About Us
									</Link>
								</li>
								<li>
									<Link style={{ textDecoration: "none" }} to="/products">
										Products
									</Link>
								</li>
								<li>
									<Link style={{ textDecoration: "none" }} to="/contact">
										Contact Us
									</Link>
								</li>
							</ul>
							<br />
							<h4 class="webintern_footer_title h5">
								<small>Offices</small>
							</h4>
							<ul class="webintern-footer-list">
								<li>Mumbai Kolkata</li>
								<li>Bangalore Tirupur</li>
								<li>Bhadohi</li>
							</ul>
							<div class="empty-space xs-25 sm-25"></div>
						</div>
						<div class="col-sm-4 col-md-3 footer-3">
							<h4 class="webintern_footer_title h5">
								<small> Address </small>
							</h4>
							<h5 id="Address_footer_h5">Ludhiana, Punjab</h5>
							<div className="Address__full">
								<span>57A,Street NoR3</span>
								<br />
								<span>Primier Industrial</span>
								<br />
								<span>Complex,Near Bonn</span>
								<br />
								<span>Bread, CHD Road, Nichi</span>
								<br />
								<span>Mangli, Ludhiana, Punjab</span>
								<br />
								<span>(India)141010</span>
							</div>
							<br />
							<h4 class="webintern_footer_title h5">
								<small> Email </small>
							</h4>
							<div className="Address__full">
								<span>info@neweraglobalpvtltd.com</span>
								<br />
							</div>
							<br />
							<h4 class="webintern_footer_title h5">
								<small> Telephone </small>
							</h4>
							<div className="Address__full">
								<span>+91 161 291 3021</span>
								<br />
							</div>

							<div class="empty-space xs-25"></div>
						</div>
						<div class="col-xs-12 col-md-4 col-sm-6">
							<div class="marg-sm-b30"></div>
							<h4 class="webintern_footer_title h5">
								<small>Locate Us</small>
							</h4>
							<div class="empty-space marg-lg-b20"></div>
							<div class="empty-space marg-lg-b15"></div>

							<div class="empty-space marg-lg-b30"></div>
							<Map height="250px" width="200px" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
