import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 3rem;
	margin: 0 auto 6rem auto;

	@media (max-width: 810px) {
		flex-direction: column;
	}
`;

export const CopyrightContainer = styled.div`
	text-align: center;
	margin: 1rem 0;
`;

export const Copyright = styled.p`
	color: ${Colors.gray100}ba;
	font-size: 1.8rem;
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
		font-size: clamp(22px, 1.6rem + 1.1vw, 2.6rem);
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
