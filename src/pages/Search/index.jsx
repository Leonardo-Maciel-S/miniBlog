import styles from "./index.module.css";
import { Link } from "react-router-dom";

//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

//Components
import PostDetails from "../../components/PostDetails";

const Search = () => {
	const query = useQuery();
	const search = query.get("q");

	const { documents: posts } = useFetchDocuments("posts", search);

	return (
		<div className={styles.search_container}>
			<h1>Resultados</h1>
			<div>
				{posts?.length === 0 && (
					<div className={styles.no_post}>
						<p>Não foi encontrado nenhum resultado!</p>
						<Link to="/" className="btn btn-dark">
							Voltar
						</Link>
					</div>
				)}
				{posts?.map((post) => (
					<PostDetails key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Search;
