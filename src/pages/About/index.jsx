//CSS
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<h2>
				Sobre o Mini <span>Blog</span>
			</h2>
			<p>
				Este projeto consiste em um blog feito com{" "}
				<strong>React no front-end</strong> e{" "}
				<strong>firebase no back-end</strong>
			</p>

			<Link to="/posts/create" className="btn">
				Criar post
			</Link>
		</div>
	);
};

export default About;
