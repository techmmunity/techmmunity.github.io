import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 4rem;
	filter: grayscale(50%);

	> div {
		> img {
			border-radius: 3px;
		}
	}
`;
