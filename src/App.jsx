import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";

//context
import { AuthProvider } from "./context/AuthContext";
import EditPost from "./pages/EditPost";

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
						<Route path="/search" element={<Search />} />
						<Route path="/post/:id" element={<Post />} />
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						/>
						<Route
							path="/register"
							element={!user ? <Register /> : <Navigate to="/" />}
						/>
						<Route
							path="/post/edit/:id"
							element={user ? <EditPost /> : <Navigate to="/login" />}
						/>
						<Route
							path="/post/create"
							element={user ? <CreatePost /> : <Navigate to="/login" />}
						/>
						<Route
							path="/dashboard"
							element={user ? <Dashboard /> : <Navigate to="/login" />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
