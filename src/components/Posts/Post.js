import styled from "styled-components";
import LinkData from "./LinkData";
import { FaRegHeart as LikeIcon, FaHeart as LikedIcon } from "react-icons/fa";
import {
	RiEdit2Fill as EditIcon,
	RiDeleteBin6Line as DeleteIcon,
} from "react-icons/ri";
import { useState } from "react";

export default function Post({ userName, text, userImg }) {
	const [liked, setLiked] = useState(false);
	const likeCounts = 10;

	return (
		<StyledDiv>
			<LeftBox>
				<ProfilePicture src={`${userImg}`} alt="" />

				{liked ? (
					<LikedIcon onClick={toogleLike} className="icon liked" />
				) : (
					<LikeIcon onClick={toogleLike} className="icon" />
				)}

				<LikesCount>{likeCounts} likes</LikesCount>
			</LeftBox>

			<RightBox>
				<TopLine>
					<UserName>{userName}</UserName>
					<div className="div">
						<EditIcon className="icon" />
						<DeleteIcon className="icon" />
					</div>
				</TopLine>

				<Text>{text}</Text>

				<LinkData />
			</RightBox>
		</StyledDiv>
	);

	function toogleLike() {
		setLiked(!liked);
	}
}

const StyledDiv = styled.div`
	width: 100%;
	background: #171717;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	box-sizing: border-box;
	padding: 18px 22px 20px 18px;
	display: flex;
	margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	margin-bottom: 25px;
`;

const TopLine = styled.div`
	display: flex;
	justify-content: space-between;

	.icon {
		color: white;
		font-size: 20px;
		margin-left: 10px;
		cursor: pointer;
	}
`;

const LeftBox = styled.div`
	margin-right: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.icon {
		font-size: 25px;
		color: white;
		cursor: pointer;
		margin-bottom: 10px;
	}

	.liked {
		color: red;
	}
`;

const RightBox = styled.div`
	width: 100%;
	height: 100%;
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

const LikesCount = styled.h5`
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 13px;
	text-align: center;

	color: #ffffff;
`;
