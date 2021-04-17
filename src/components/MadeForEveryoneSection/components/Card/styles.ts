import { BsArrowRight } from "react-icons/bs";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div<{ current: boolean; invertOrder: boolean }>`
	display: ${({ current }) => (current ? "flex" : "none")};
	flex-direction: ${({ invertOrder }) => (invertOrder ? "row-reverse" : "row")};
	margin: 2rem;
	opacity: ${({ current }) => (current ? "100%" : "0%")};
	animation: ${({ current }) => (current ? "smooth 1s ease-out" : "unset")};

	@keyframes smooth {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}

	@media (max-width: 1100px) {
		flex-direction: column-reverse;
		align-items: center;
		width: 100%;
		max-width: 552px;
		padding: 0 5rem;
	}
`;

export const Content = styled.div<{ invertOrder: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${Colors.gray}80;
	border-radius: ${({ invertOrder }) =>
		invertOrder ? "0 5px 5px 0" : "5px 0 0 5px"};
	padding: 4rem 6.5rem 2rem 2.5rem;

	@media (max-width: 1100px) {
		padding: 4rem 2.5rem 2rem 2.5rem;
		border-radius: 0 0 5px 5px;
	}
`;

export const Title = styled.h4`
	font-size: 2.4rem;
`;

export const Description = styled.p`
	color: ${Colors.lightGray};
	font-size: 1.8rem;
	line-height: 1.5;
	margin: 1rem 0 2.5rem 0;
`;

export const LearnMore = styled.div`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 12.5rem;
		background: ${Colors.primary};
		font-size: 1.4rem;
		font-weight: bold;
		border-radius: 3px;
		padding: 1rem;
		transition: background-color 0.2s ease-out;

		&:hover,
		&:focus,
		&:active {
			background: ${Colors.darkPrimary};
		}
	}
`;

export const ArrowRight = styled(BsArrowRight)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.4rem;
	margin-left: 1rem;
`;

export const Image = styled.img<{ invertOrder: boolean }>`
	width: 100%;
	max-width: 552px;
	height: 100%;
	max-height: 392px;
	border-radius: ${({ invertOrder }) =>
		invertOrder ? "5px 0 0 5px" : "0 5px 5px 0"};
	filter: grayscale(40%);

	@media (max-width: 1100px) {
		border-radius: 5px 5px 0 0;
	}
`;
