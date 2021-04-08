import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 7.2rem;
	padding: 10rem 2.5rem;
`;

export const Description = styled.div`
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 4.8rem;
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: 2rem;
	margin: 1rem 0;
`;
