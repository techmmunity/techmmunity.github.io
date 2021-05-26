import styled from "styled-components";

import { Colors } from "assets/colors";

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

export const Title = styled.h1`
	font-size: clamp(3.8rem, 1rem + 5vw, 5.2rem);
`;

export const Subtitle = styled.p`
	color: ${Colors.gray100};
	font-size: 2rem;
	margin: 1rem 0;
`;

export const RedirectToHomeButton = styled.div`
	> a {
		display: block;
		background: ${Colors.primary};
		color: ${Colors.white1000};
		font-weight: 500;
		border-radius: 3px;
		padding: 1.25rem 1.5rem;
		margin: 1rem 0;
		transition: background-color 0.2s ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.darkPrimary};
		}
	}
`;
