import styles from "./index.module.css";
import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
	const { user } = useAuthValue();
	const uid = user.uid;

	const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

	const { deleteDocument } = useDeleteDocument("posts");

	if (loading) <p>Carregand...</p>;

	return (
		<div className={styles.dashboard}>
			<h2>Dashboard</h2>
			<p>Gerencia o seus posts</p>
			{posts?.length === 0 ? (
				<div className={styles.no_posts}>
					<p>Não foi encontrado nenhum post.</p>
					<Link to="/post/create" className="btn">
						Criar post
					</Link>
				</div>
			) : (
				<>
					<div className={styles.post_header}>
						<span>Título</span>
						<span>Ação</span>
					</div>

					{posts?.map((post) => (
						<div key={post.id} className={styles.post_row}>
							<p>{post.title}</p>
							<div>
								<Link to={`/post/${post.id}`} className="btn btn-outline">
									Ver
								</Link>
								<Link to={`/post/edit/${post.id}`} className="btn btn-outline">
									Editar
								</Link>
								<button
									type="button"
									onClick={() => deleteDocument(post.id)}
									className="btn btn-outline btn-danger"
								>
									Excluir
								</button>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default Dashboard;
