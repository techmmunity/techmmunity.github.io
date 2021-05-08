import styled from "styled-components";

import { Colors } from "assets/colors";

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

export const RedirectButton = styled.div<{ active: boolean; position: string }>`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${Colors.white1000};
		font-weight: 500;
		text-align: center;
		text-decoration: none;
		padding: 1.5rem 3.2rem;
		transition: background-color 0.2s ease-out;
		background: ${({ active }) => (active ? Colors.primary : Colors.gray500)};
		border-radius: ${({ position }) =>
		position == "left" ? "5px 0 0 5px" : "0 5px 5px 0"};

		&:hover,
		&:focus,
		&:active {
			background: ${({ active }) =>
		active ? Colors.darkPrimary : Colors.gray800};
		}

		@media (max-width: 768px) {
			width: 50vw;
			border-radius: 0;
		}
	}
`;
