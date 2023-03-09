import styled from "styled-components";
import LinkData from "./LinkData";

export default function Post() {
	return (
		<StyledDiv>
			<LeftBox>
				<ProfilePicture src="" alt="" />
			</LeftBox>
			<RightBox>
				<UserName>Joao</UserName>
				<Text>
					Muito maneiro esse tutorial de Material UI com React, deem
					uma olhada! #react #material
				</Text>

				<LinkData />
			</RightBox>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	width: 100%;
	background: #171717;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	box-sizing: border-box;
	padding: 18px;
	display: flex;
`;

const ProfilePicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	background-color: brown;
`;

const LeftBox = styled.div`
	margin-right: 25px;
`;

const RightBox = styled.div`
	width: 100%;
	height: 100%;
`;

const InputModel = styled.input`
	width: 100%;
	background: #efefef;
	border-radius: 5px;
	border: none;
`;

const UserName = styled.h3`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 19px;
	line-height: 23px;
	color: #ffffff;
	margin-bottom: 10px;
`;

const Text = styled.p`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	color: #b7b7b7;
	margin-bottom: 20px;
`;
