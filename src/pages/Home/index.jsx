import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//CSS
import styles from "./index.module.css";

//Components
import PostDetails from "../../components/PostDetails";

const Home = () => {
	const [query, setQuery] = useState("");
	const { documents: posts, loading } = useFetchDocuments("posts");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (query) return Navigate(`/search?1=${query}`);
	};
	return (
		<div className={styles.home}>
			<h1>Veja os nossos post mais recentes</h1>
			<form onSubmit={handleSubmit} className={styles.search_form}>
				<input
					type="text"
					placeholder="ou busque por tags..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="button" className="btn btn-dark">
					Pesquisar
				</button>
			</form>

			<div>
				<h2>Posts...</h2>
				{posts?.map((post) => {
					return <PostDetails key={post.id} post={post} />;
				})}
				{posts?.length === 0 && (
					<div className={styles.no_posts}>
						<p>Não foi encontrado nenhun post</p>
						<Link to="/post/create" className="btn">
							Criar primeiro post
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
