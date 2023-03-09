import styled from "styled-components";

export default function NewPost() {
	return (
		<StyledDiv>
			<LeftBox>
				<ProfilePicture src="" alt="" />
			</LeftBox>
			<RightBox>
				<Title>What are you going to share today?</Title>

				<form>
					<URLInput />
					<TextInput />
					<StyledButton>Publish</StyledButton>
				</form>
			</RightBox>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	width: 100%;
	height: 209px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	box-sizing: border-box;
	padding: 18px;
	display: flex;
	margin-bottom: 30px;
`;

const ProfilePicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	background-color: brown;
`;

const Title = styled.h2`
	font-family: "Lato";
	font-style: normal;
	font-weight: 300;
	font-size: 20px;
	line-height: 24px;
	color: #707070;
	margin-bottom: 15px;
`;

const LeftBox = styled.div`
	margin-right: 25px;
`;

const RightBox = styled.div`
	width: 100%;
`;

const InputModel = styled.input`
	width: 100%;
	background: #efefef;
	border-radius: 5px;
	border: none;
`;

const URLInput = styled(InputModel)`
	height: 30px;
	margin-bottom: 15px;
`;
const TextInput = styled(InputModel)`
	height: 65px;
`;

const StyledButton = styled.button`
	width: 112px;
	height: 31px;

	background: #1877f2;
	border-radius: 5px;

	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	border: none;
	float: left;
`;
