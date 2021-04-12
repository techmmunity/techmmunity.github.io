import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 7.5rem 2.5rem;
`;

export const Line = styled.span`
	display: flex;
	width: 100%;
	max-width: 1100px;
	border-bottom: 1px solid ${Colors.halfLightGray}80;
`;

export const Icons = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	> svg {
		width: 100%;
		max-width: 12.4rem;
		height: 100%;
		max-height: 6.4rem;
		color: ${Colors.halfLightGray};
		margin: 3rem 0;
	}
`;
