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

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 2.5rem;
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
`;

export const Community = styled.div`
	> a {
		${LinkCSS}
		background: ${Colors.primary};

		@media (max-width: 768px) {
			margin-bottom: 1rem;
		}
	}
`;

export const AboutUs = styled.div`
	> a {
		${LinkCSS}
		background: ${Colors.gray};
	}
`;
