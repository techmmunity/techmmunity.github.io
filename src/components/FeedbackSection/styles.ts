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

export const Title = styled.h2`
	font-size: clamp(28px, 1rem + 5vw, 3.8rem);
`;

export const Subtitle = styled.h3`
	color: ${Colors.lightGray};
	font-size: clamp(16px, 1rem + 1vw, 2rem);
	font-weight: normal;
`;

export const Cards = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
