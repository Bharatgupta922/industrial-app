import React from "react";
import "./App.css";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
