import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

const NavBar = () => {
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
