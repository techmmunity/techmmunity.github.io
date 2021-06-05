import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 34.4rem;
	background: ${COLORS.gray500}80;
	border-radius: 3px;
	padding: 2.5rem;
	margin: 1rem;
`;

export const Content = styled.div`
	> svg {
		color: ${COLORS.primary};
		font-size: 3rem;
	}
`;

export const Feedback = styled.p`
	color: ${COLORS.gray100};
	font-size: 1.8rem;
	text-indent: 1.8rem;
	line-height: 2.8rem;
	margin: 1.5rem 0;
`;

export const Line = styled.span`
	display: block;
	height: 1px;
	background: ${COLORS.gray200}80;
	margin: 1.5rem 0 2rem 0;
`;

export const Author = styled.div`
	> a {
		font-size: 1.6rem;
		font-weight: bold;
		padding: 1rem 0;

		&:hover,
		&:focus,
		&:active {
			text-decoration: underline;
		}
	}
`;
