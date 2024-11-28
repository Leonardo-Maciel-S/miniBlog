import styles from "./index.module.css";

//hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

function Post() {
	const { id } = useParams();
	const { document: post, loading } = useFetchDocument("posts", id);

	return (
		<div>
			{loading && <p>Carregando post...</p>}

			{post && (
				<>
					<h1>{post.title}</h1>
					<img src={post.image} alt={post.title} />
					<p>{post.body}</p>
				</>
			)}
		</div>
	);
}

export default Post;
