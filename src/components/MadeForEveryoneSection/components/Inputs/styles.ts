import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const InputContainer = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	display: none;
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors.gray}80;
	color: ${Colors.lightGray};
	border-radius: 50px;
	padding: 1rem 1.25rem;
	margin: 0.5rem;
	transition: color 0.2s ease-out, filter 0.2s ease-out;
	filter: opacity(50%);
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		color: ${Colors.almostWhite};
		filter: opacity(100%);
	}

	${Input}:checked + & {
		filter: opacity(100%);
	}

	> svg {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${Colors.primary};
		font-size: clamp(18px, 1rem + 1vw, 1.8rem);
		margin-right: 1rem;
	}

	@media (max-width: 800px) {
		border-radius: 50%;
		padding: 1.25rem;

		> svg {
			margin-right: 0;
		}
	}
`;

export const Text = styled.span`
	@media (max-width: 800px) {
		display: none;
	}
`;
