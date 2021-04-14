import { ImQuotesLeft } from "react-icons/im";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 34.4rem;
	background: ${Colors.gray}80;
	border-radius: 3px;
	padding: 2.5rem;
	margin: 1.2rem;
`;

export const Content = styled.div``;

export const QuoteIcon = styled(ImQuotesLeft)`
	color: ${Colors.primary};
	font-size: 3rem;
`;

export const Feedback = styled.p`
	display: flex;
	flex-direction: column;
	color: ${Colors.lightGray};
	font-size: clamp(16px, 1rem + 1vw, 1.8rem);
	text-indent: 1.8rem;
	line-height: 1.5;
	margin: 1.5rem 0;
`;

export const Line = styled.span`
	display: block;
	height: 1px;
	background: ${Colors.halfLightGray}80;
	margin: 1.5rem 0 2rem 0;
`;

export const Author = styled.span`
	font-size: clamp(14px, 1rem + 1vw, 1.6rem);
	font-weight: bold;
`;
