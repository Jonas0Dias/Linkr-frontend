import styled from "styled-components";
import Timeline from "../../components/Posts/Timeline";

function HomePage() {
	return (
		<Page>
			<Timeline />
		</Page>
	);
}

export default HomePage;

const Page = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #333333;
`;
