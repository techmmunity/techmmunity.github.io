import styled, { css } from "styled-components";

import { COLORS } from "assets/colors";

const RedirectCSS = css`
	display: block;
	color: ${COLORS.white1000};
	font-size: 1.6rem;
	border-radius: 3px;
	text-align: center;
	padding: 1.5rem 3.2rem;
	margin: 0 1rem;
	transition: background-color 0.2s ease-out;
`;

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
	padding: 1rem 0;
`;

export const Title = styled.h1`
	font-size: clamp(3.6rem, 1rem + 5vw, 5rem);
`;

export const Subtitle = styled.h2`
	color: ${COLORS.gray100};
	font-size: 2rem;
	font-weight: normal;
	margin: 1rem 0;
`;

export const Links = styled.div`
	display: flex;

	> a:first-child {
		${RedirectCSS}
		background: ${COLORS.gray500};
		font-weight: 600;

		&:hover,
		&:focus,
		&:active {
			background: ${COLORS.gray800};
		}

		@media (max-width: 768px) {
			margin-bottom: 2rem;
		}
	}

	> a:last-child {
		${RedirectCSS}
		background: ${COLORS.primary};
		font-weight: 500;

		&:hover,
		&:focus,
		&:active {
			background: ${COLORS.darkPrimary};
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
