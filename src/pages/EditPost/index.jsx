import styles from "./index.module.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
	const { id } = useParams();
	const { document: post } = useFetchDocument("posts", id);

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formErrors, setFormErrors] = useState("");

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setBody(post.body);
			setImage(post.image);

			const textTags = post.tagArray.join(", ");

			setTags(textTags);
		}
	}, [post]);

	const { updateDocument, response } = useUpdateDocument("posts");

	const { user } = useAuthValue();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors("");

		try {
			new URL(image);
		} catch (error) {
			setFormErrors("A imagem precisa ser uma URL.");
		}

		const tagArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

		if (!title || !image || !body || !tags) {
			setFormErrors("Por favor, preencha todos os campos");
		}

		if (formErrors) return;

		const data = {
			title,
			image,
			body,
			tagArray,
			uid: user.uid,
			createBy: user.displayName,
		};

		updateDocument(id, data);

		navigate("/dashboard");
	};

	return (
		<div className={styles.edit_post}>
			{!post && <p>Carregando...</p>}
			{post && (
				<>
					<h2>Editando "{post.title}"</h2>
					<p>Alterer os dados do post como desejar</p>
					<form onSubmit={handleSubmit}>
						<label>
							<span>Título:</span>
							<input
								type="text"
								name="title"
								required
								placeholder="Pense em um bom título..."
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</label>

						<label>
							<span>URL da imagem:</span>
							<input
								type="text"
								name="image"
								required
								placeholder="Insira uma imagem que represente seu post"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
						</label>

						<p className={styles.preview_title}>Preview da imagem atual: </p>
						<img
							className={styles.image_preview}
							src={image}
							alt={post.title}
						/>

						<label>
							<span>Conteúdo:</span>
							<textarea
								name="body"
								required
								placeholder="Insira o conteúdo do post"
								value={body}
								onChange={(e) => setBody(e.target.value)}
							/>
						</label>

						<label>
							<span>Tags:</span>
							<input
								type="text"
								name="tags"
								required
								placeholder="Insira as tags separadas por virgulas"
								value={tags}
								onChange={(e) => setTags(e.target.value)}
							/>
						</label>

						{!response.loading && (
							<button type="submit" className="btn">
								Editar
							</button>
						)}

						{response.loading && (
							<button type="submit" disabled className="btn">
								Aguarde...
							</button>
						)}

						{response.error && <p className="error">{response.error}</p>}
						{formErrors && <p className="error">{formErrors}</p>}
					</form>
				</>
			)}
		</div>
	);
};

export default EditPost;
