import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.span`
	width: 100%;
	height: 1px;
	background: ${Colors.halfLightGray}80;
	margin: 2rem;
`;
