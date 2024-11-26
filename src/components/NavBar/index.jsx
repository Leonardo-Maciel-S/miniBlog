import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

const NavBar = () => {
	const { user } = useAuthValue();
	const { logout } = useAuthentication();

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
								to="/dashboard"
								className={({ isActive }) => (isActive ? styles.active : "")}
							>
								Dashboard
							</NavLink>
						</li>
					</>
				)}

				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Sobre
					</NavLink>
				</li>

				{user && (
					<li>
						<button type="button" onClick={logout}>
							Sair
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
