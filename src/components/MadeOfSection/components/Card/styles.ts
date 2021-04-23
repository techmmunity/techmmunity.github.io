import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 32.5rem;
	margin: 1.5rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors.primary};
	color: ${Colors.white};
	border-radius: 50%;
	padding: 1.5rem;

	> svg {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
	}
`;

export const Title = styled.span`
	font-size: 2.4rem;
	font-weight: bold;
	margin: 1rem 0;
`;

export const Description = styled.p`
	color: ${Colors.gray100};
	font-size: 1.8rem;
	text-align: center;
`;
