import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	margin-bottom: 5.5rem;

	@media (max-width: 810px) {
		flex-direction: column-reverse;
	}
`;

export const Copyright = styled.p`
	text-align: center;
	color: ${Colors.gray100};
	font-size: 1.8rem;
	margin: 2rem 0;
`;

export const SocialNetworks = styled.ul`
	display: grid;
	grid-template: 1fr / repeat(7, 1fr);
	align-items: center;
	justify-content: center;
	gap: 1.2rem;

	@media (max-width: 360px) {
		grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	}
`;

export const SocialNetwork = styled.li`
	&:last-child {
		@media (max-width: 360px) {
			justify-self: center;
			grid-column: 1 / 4;
			grid-row: 3 / 4;
		}
	}

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${Colors.gray500};
		color: ${Colors.primary};
		font-size: 2.6rem;
		border-radius: 50%;
		padding: 1rem;
		transition: background-color 0.2s ease-out, color 0.2s ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.primary};
			color: ${Colors.white1000};
		}
	}
`;
