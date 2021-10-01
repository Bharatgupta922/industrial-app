import React from "react";
import "./App.css";
import About from "./pages/About/About";
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
    <div className="app">
        <Navbar />
    <Switch>
      <Route path = "/">
        <LandingPage />
      </Route>
      <Route path = "/about">
      <About />
      </Route>
        </Switch>
        <Footer />
    </div>
	</Router>
	);
}

export default App;
