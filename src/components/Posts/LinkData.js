import styled from "styled-components";
import img from "../../img1.jpg";

function LinkData() {
	return (
		<StyledDiv>
			<LeftBox>
				<Title>Como aplicar o Material UI em um projeto React</Title>
				<Text>
					Hey! I have moved this tutorial to my personal blog. Same
					content, new location. Sorry about making you click through
					to another page.Hey! I have moved this tutorial to my
					personal blog. Same content, new location. Sorry about
					making you click through to another page.
				</Text>
				<Link>https://medium.com/@pshrmn/a-simple-react-router</Link>
			</LeftBox>

			<RightBox>
				<img src={img} alt="" />
			</RightBox>
		</StyledDiv>
	);
}

export default LinkData;

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;

	border: 1px solid #4d4d4d;
	border-radius: 11px;
	display: flex;
	overflow: hidden;
	cursor: pointer;
`;

const Title = styled.h4`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #cecece;
	margin-bottom: 10px;
`;

const Text = styled.h5`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 13px;
	color: #9b9595;
	margin-bottom: 13px;
`;

const Link = styled.h5`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 13px;
	color: #cecece;
`;

const LeftBox = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 25px;
`;

const RightBox = styled.div`
	width: 100%;
	max-width: 185px;
	height: auto;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
