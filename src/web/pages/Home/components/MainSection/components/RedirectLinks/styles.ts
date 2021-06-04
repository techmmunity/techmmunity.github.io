import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.div`
	display: flex;
	position: absolute;
	top: 2rem;
	right: 2rem;

	@media (max-width: 768px) {
		top: 0;
		right: 0;
	}
`;

export const RedirectLink = styled.div<{ active: boolean; position: string }>`
	> a {
		display: block;
		color: ${COLORS.white1000};
		font-weight: 500;
		text-align: center;
		padding: 1.5rem 3.2rem;
		transition: background-color 0.2s ease-out;
		background: ${({ active }) => (active ? COLORS.primary : COLORS.gray500)};
		border-radius: ${({ position }) =>
			position === "left" ? "5px 0 0 5px" : "0 5px 5px 0"};

		&:hover,
		&:focus,
		&:active {
			background: ${({ active }) =>
				active ? COLORS.darkPrimary : COLORS.gray800};
		}

		@media (max-width: 768px) {
			width: 50vw;
			border-radius: 0;
		}
	}
`;
