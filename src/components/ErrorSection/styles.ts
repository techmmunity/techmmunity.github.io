import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 3rem 2.5rem;
`;

export const Title = styled.h1`
	font-size: clamp(3.8rem, 1rem + 5vw, 5.2rem);
`;

export const Subtitle = styled.p`
	color: ${Colors.lightGray};
	font-size: 2rem;
	margin: 1rem 0;
`;

export const RedirectToHomeButton = styled.div`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${Colors.primary};
		color: ${Colors.white};
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
