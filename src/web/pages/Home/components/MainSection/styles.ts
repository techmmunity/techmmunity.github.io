import styled, { css } from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
`;

export const Description = styled.header`
	text-align: center;
	padding: 3rem 2.5rem;
`;

export const Title = styled.h1`
	font-size: clamp(3.8rem, 1rem + 5vw, 5.2rem);
`;

export const Subtitle = styled.h2`
	color: ${Colors.gray100};
	font-size: 2rem;
	font-weight: normal;
	margin: 1rem 0;
`;

const RedirectCSS = css`
	display: block;
	color: ${Colors.white1000};
	font-size: 1.6rem;
	border-radius: 3px;
	padding: 1.5rem 3.2rem;
	margin: 0 1rem;
	transition: background-color 0.2s ease-out;
`;

export const Links = styled.div`
	display: flex;

	> a:first-child {
		${RedirectCSS}
		background: ${Colors.gray500};
		font-weight: 600;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.gray800};
		}

		@media (max-width: 768px) {
			margin-bottom: 2rem;
		}
	}

	> a:last-child {
		${RedirectCSS}
		background: ${Colors.primary};
		font-weight: 500;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.darkPrimary};
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
