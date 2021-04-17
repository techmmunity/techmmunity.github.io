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
	font-size: clamp(32px, 1rem + 5vw, 4rem);
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: clamp(20px, 1rem + 1vw, 2rem);
	margin: 1rem 0;
`;

export const Strong = styled.strong``;

export const Cards = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
