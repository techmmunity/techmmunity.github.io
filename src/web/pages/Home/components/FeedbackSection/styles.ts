import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Description = styled.header`
	text-align: center;
	padding: 1rem 0;
`;

export const Title = styled.h2`
	font-size: clamp(3.2rem, 1rem + 5vw, 4rem);
`;

export const Subtitle = styled.h3`
	color: ${COLORS.gray100};
	font-size: 2rem;
	font-weight: normal;
	margin: 1rem 0;
`;

export const Cards = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
