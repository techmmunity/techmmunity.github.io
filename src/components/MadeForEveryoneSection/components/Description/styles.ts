import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div`
	text-align: center;
	padding: 3rem 2.5rem;
`;

export const Title = styled.h2`
	font-size: clamp(3.2rem, 1rem + 5vw, 4rem);
`;

export const Subtitle = styled.h3`
	color: ${Colors.lightGray};
	font-size: 2rem;
	font-weight: normal;
	margin: 1rem 0;
`;
