import { BsArrowRight } from "react-icons/bs";

import styled from "styled-components";

import { COLORS } from "assets/colors";

export const Container = styled.li<{
	isCurrent: boolean;
	invertOrder: boolean;
}>`
	display: ${({ isCurrent }) => (isCurrent ? "flex" : "none")};
	flex-direction: ${({ invertOrder }) => (invertOrder ? "row-reverse" : "row")};
	margin: 2rem;
	animation: ${({ isCurrent }) => (isCurrent ? "smooth 1s ease-out" : "unset")};

	@keyframes smooth {
		0% {
			opacity: 0%;
		}

		100% {
			opacity: 100%;
		}
	}

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		align-items: center;
		max-width: 45rem;
	}
`;

export const Content = styled.div<{ invertOrder: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 50%;
	max-height: 39.2rem;
	background: ${COLORS.gray500}80;
	border-radius: ${({ invertOrder }) =>
		invertOrder ? "0 5px 5px 0" : "5px 0 0 5px"};
	padding: 3rem 6.5rem 3rem 2.5rem;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 15rem;
		background: ${COLORS.primary};
		font-size: 1.4rem;
		font-weight: bold;
		border-radius: 3px;
		padding: 1rem;
		transition: background-color 0.2s ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${COLORS.darkPrimary};
		}

		@media (max-width: 360px) {
			max-width: unset;
		}
	}

	@media (max-width: 1000px) {
		width: 100%;
		max-height: unset;
		padding: 2rem;
		border-radius: 0 0 5px 5px;
	}
`;

export const Title = styled.h4`
	font-size: 2.4rem;
`;

export const Description = styled.p`
	color: ${COLORS.gray100};
	font-size: 1.8rem;
	line-height: 2.8rem;
	margin: 1rem 0 2.5rem 0;
`;

export const ArrowRight = styled(BsArrowRight)`
	margin-left: 1rem;
`;

export const Image = styled.img<{ invertOrder: boolean }>`
	width: 50%;
	min-height: 39.2rem;
	height: 39.2rem;
	max-height: 39.2rem;
	border-radius: ${({ invertOrder }) =>
		invertOrder ? "5px 0 0 5px" : "0 5px 5px 0"};
	filter: grayscale(40%);
	object-fit: cover;

	@media (max-width: 1000px) {
		width: 100%;
		min-height: unset;
		height: 100%;
		max-height: unset;
		border-radius: 5px 5px 0 0;
	}
`;
