import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5rem 2.5rem;
`;

export const Description = styled.div`
	text-align: center;
`;

export const Title = styled.h1`
	font-size: clamp(38px, 1rem + 5vw, 5.2rem);
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: clamp(20px, 1rem + 1vw, 2rem);
	margin: 1rem 0;
`;
