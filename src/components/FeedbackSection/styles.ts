import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Description = styled.div`
	text-align: center;
	padding: 3rem 2.5rem;
`;

export const Title = styled.h1`
	font-size: clamp(28px, 1rem + 5vw, 3.8rem);
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: clamp(16px, 1rem + 1vw, 2rem);
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
