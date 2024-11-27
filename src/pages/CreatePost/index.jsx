import styles from "./index.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formErrors, setFormErrors] = useState("");

	const { insertDocument, response } = useInsertDocument("posts");

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

		insertDocument({
			title,
			image,
			body,
			tagArray,
			uid: user.uid,
			createBy: user.displayName,
		});

		navigate("/");
	};

	return (
		<div className={styles.create_post}>
			<h2>Criar post</h2>
			<p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>

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
						Cadastrar
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
		</div>
	);
};

export default CreatePost;
