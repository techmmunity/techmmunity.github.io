import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.li`
	width: 100%;
	max-width: 42.4rem;
	margin: 2rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const IconContainer = styled.div`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${COLORS.primary};
		border-radius: 50%;
		padding: 1.5rem;
		margin-bottom: 2rem;
		transition: background-color 0.2s ease-out;

		> svg {
			font-size: 3rem;
		}

		&:hover,
		&:focus,
		&:active {
			background: ${COLORS.darkPrimary};
		}
	}
`;

export const DescriptionContainer = styled.div`
	text-align: center;
	padding: 0 2rem;
`;

export const Title = styled.div`
	> a {
		font-size: 2.4rem;
		font-weight: bold;

		&:hover,
		&:focus,
		&:active {
			text-decoration: underline;
		}
	}
`;

export const Description = styled.p`
	color: ${COLORS.gray100};
	font-size: 1.8rem;
	line-height: 2.8rem;
`;
