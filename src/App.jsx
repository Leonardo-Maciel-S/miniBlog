import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
