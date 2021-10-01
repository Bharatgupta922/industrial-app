import React from "react";
import "./App.css";
import About from "./pages/About/About";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import OurProducts from "./pages/OurProducts/OurProducts";

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
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
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
