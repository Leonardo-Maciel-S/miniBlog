import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

<<<<<<< HEAD
const NavBar = () => {
=======
import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

const NavBar = () => {
	const { user } = useAuthValue();

>>>>>>> e24baea57d7e0a742861484b136a5617bd84fb8d
	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.brand}>
				Mine <span>Blog</span>
			</NavLink>

			<ul className={styles.links_list}>
				<li>
					<NavLink
						to="/home"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Home
					</NavLink>
				</li>
<<<<<<< HEAD
=======

				{!user && (
					<>
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) => (isActive ? styles.active : "")}
							>
								Entrar
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/register"
								className={({ isActive }) => (isActive ? styles.active : "")}
							>
								Cadastrar
							</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li>
							<NavLink
								to="/post/create"
								className={({ isActive }) => (isActive ? styles.active : "")}
							>
								Novo post
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/Dashboard"
								className={({ isActive }) => (isActive ? styles.active : "")}
							>
								Dashboard
							</NavLink>
						</li>
					</>
				)}

>>>>>>> e24baea57d7e0a742861484b136a5617bd84fb8d
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Sobre
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
