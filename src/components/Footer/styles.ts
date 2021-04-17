import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2.5rem 2.5rem 4.5rem 2.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const RightsReserved = styled.div`
	text-align: center;
	margin: 1rem 0;
`;

export const Description = styled.p`
	color: ${Colors.lightGray}80;
	font-size: clamp(14px, 1rem + 1vw, 1.4rem);
`;

export const SocialNetworks = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const SocialNetwork = styled.li`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${Colors.gray};
		color: ${Colors.primary};
		font-size: clamp(18px, 1rem + 1vw, 1.8rem);
		text-decoration: none;
		border-radius: 50%;
		padding: 0.8rem;
		margin: 0.5rem;
		transition: background-color 0.2s ease-out, color 0.2s ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.primary};
			color: ${Colors.white};
		}
	}
`;
