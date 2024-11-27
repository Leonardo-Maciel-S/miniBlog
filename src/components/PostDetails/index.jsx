import styles from "./index.module.css";

import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
	return (
		<div>
			<div>
				<img src={post.image} alt={post.title} width="900px" height="600px" />
			</div>
			<h2>{post.title}</h2>
			<p>{post.createBy}</p>
			<div>
				{post.tagArray.map((tag) => (
					<p key={tag}>
						<span>#</span>
						{tag}
					</p>
				))}
			</div>

			<Link to={`/post/${post.id}`} className="btn btn-outline">
				Ler
			</Link>
		</div>
	);
};

export default PostDetails;
