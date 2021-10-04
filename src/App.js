import React, { useState } from "react";
import "./App.css";
import About from "./pages/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import OurProducts from "./pages/OurProducts/OurProducts";
import Explore from "./pages/OurProducts/Explore";
import Dropdown from "./components/Dropdown";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Router>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Navbar isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
				<Route path="/products">
					<OurProducts />
				</Route>
				<Route path="/explore">
					<Explore />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
