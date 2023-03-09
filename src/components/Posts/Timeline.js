import styled from "styled-components";
import NewPost from "./NewPost";
import Post from "./Post";

function Timeline() {
	return (
		<StyledSection>
			<SectionTitle>timeline</SectionTitle>
			<NewPost />
			<Post />
		</StyledSection>
	);
}

export default Timeline;

const StyledSection = styled.section`
	background-color: red;
	width: 55%;
	height: 100%;
	margin-top: 150px;
`;

const SectionTitle = styled.h1`
	font-family: "Oswald";
	font-style: normal;
	font-weight: 700;
	font-size: 43px;
	line-height: 64px;
	color: #ffffff;
`;
