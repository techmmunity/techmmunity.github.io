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

export const Description = styled.div`
	text-align: center;
	padding: 3rem 2.5rem;
`;

export const Title = styled.h1`
	font-size: clamp(38px, 1rem + 5vw, 5.2rem);
`;

export const Subtitle = styled.h2`
	color: ${Colors.lightGray};
	font-size: 2rem;
	font-weight: normal;
	margin: 1rem 0;
`;

export const Links = styled.div`
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LinkCSS = css`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${Colors.white};
	font-weight: 500;
	text-align: center;
	text-decoration: none;
	border-radius: 3px;
	padding: 1.5rem 3.2rem;
	margin: 0 1rem;
	transition: background-color 0.2s ease-out;
`;

export const Community = styled.div`
	> a {
		${LinkCSS}
		background: ${Colors.primary};

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.darkPrimary};
		}
	}
`;

export const AboutUs = styled.div`
	> a {
		${LinkCSS}
		background: ${Colors.gray};

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.darkGray};
		}

		@media (max-width: 768px) {
			margin-bottom: 2rem;
		}
	}
`;
