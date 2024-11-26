import styles from "./index.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formErrors, setFormErrors] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
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

				<button type="submit" className="btn">
					Cadastrar
				</button>

				{/* {!loading && (
					<button type="submit" className="btn">
						Cadastrar
					</button>
				)}

				{loading && (
					<button type="submit" disabled className="btn">
						Aguarde...
					</button>
				)}

				{error && <p className="error">{error}</p>} */}
			</form>
		</div>
	);
};

export default CreatePost;
