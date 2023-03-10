import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
	const [postsData, setPostsData] = useState(null);
	const token = "3be9b83e-8bd1-4da6-8a57-a6a48f9d54a7";

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/posts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((answer) => setPostsData(answer.data))
			.catch((error) => console.log(error));
	}, []);

	if (!postsData) {
		return (
			<>
				<h4>No posts...</h4>
			</>
		);
	}

	console.log(postsData);

	return (
		<>
			{postsData.map((post) => (
				<Post
					userName={post.name}
					text={post.texto}
					userImg={post.userImage}
					url={post.url}
				/>
			))}
		</>
	);
}

export default Posts;
