import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Li = styled.li``;

export const Container = styled.button<{ active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${COLORS.gray500}80;
	color: ${({ active }) => (active ? COLORS.gray50 : COLORS.gray100)};
	border-radius: 50px;
	padding: 1rem 1.5rem;
	margin: 0.5rem;
	transition: color 0.2s ease-out, filter 0.2s ease-out;
	filter: ${({ active }) => (active ? "opacity(100%)" : "opacity(50%)")};
	cursor: ${({ active }) => (active ? "default" : "pointer")};

	&:hover,
	&:focus {
		color: ${COLORS.gray50};
		filter: opacity(100%);
	}

	> svg {
		color: ${COLORS.primary};
		font-size: clamp(18px, 1rem + 1vw, 1.8rem);
	}

	@media (max-width: 800px) {
		border-radius: 50%;
		padding: 1.25rem;
	}
`;

export const Text = styled.span`
	margin: 0 1rem;

	@media (max-width: 800px) {
		display: none;
	}
`;
