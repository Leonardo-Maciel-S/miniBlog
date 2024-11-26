import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
>>>>>>> e24baea57d7e0a742861484b136a5617bd84fb8d

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD

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
=======
import Login from "./pages/Login";
import Register from "./pages/Register";

//context
import { AuthProvider } from "./context/AuthContext";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";

function App() {
	const [user, setUser] = useState(undefined);
	const { auth } = useAuthentication();

	const loadingUser = user === undefined;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, [auth]);

	if (loadingUser) {
		return <p>Carregando...</p>;
	}

	return (
		<AuthProvider value={{ user }}>
			<BrowserRouter>
				<NavBar />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/post/create" element={<CreatePost />} />
						<Route path="/Dashboard" element={<Dashboard />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
>>>>>>> e24baea57d7e0a742861484b136a5617bd84fb8d
	);
}

export default App;
