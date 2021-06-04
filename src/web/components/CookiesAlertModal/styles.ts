import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.div<{ isCookiesAccepted: boolean }>`
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	display: ${({ isCookiesAccepted }) => (isCookiesAccepted ? "none" : "flex")};
	align-items: center;
	justify-content: space-between;
	background: ${COLORS.black800};
	border-radius: 5px;
	padding: 1.5rem 2rem;
	margin: 1.5rem 1rem;

	@media (max-width: 380px) {
		flex-direction: column;
		padding: 1.5rem;
	}
`;

export const Description = styled.p`
	width: 75%;
	font-size: 1.5rem;
	line-height: 2.8rem;

	@media (max-width: 380px) {
		width: 100%;
		margin-bottom: 1.5rem;
	}
`;

export const ConfirmationButton = styled.button`
	background: ${COLORS.primary};
	color: ${COLORS.white1000};
	border-radius: 3px;
	font-weight: bold;
	padding: 1rem 1.5rem;
	transition: background-color 0.2s ease-out;
	cursor: pointer;

	&:hover,
	&:focus {
		background: ${COLORS.darkPrimary};
	}

	@media (max-width: 380px) {
		align-self: flex-end;
	}
`;
