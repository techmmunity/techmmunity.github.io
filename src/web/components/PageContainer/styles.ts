import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 0 2rem;
	}
`;

export const Content = styled.div`
	width: 100%;
	max-width: 1128px;
`;
