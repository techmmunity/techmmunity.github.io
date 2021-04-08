import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem 2.5rem;
`;

export const Description = styled.div`
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 5.2rem;

	@media (max-width: 768px) {
		font-size: 4rem;
	}
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: 2rem;
	margin: 1rem 0;
`;
