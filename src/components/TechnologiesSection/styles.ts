import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.section`
	margin: 0 2.5rem;
`;

export const Icons = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	> a > svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 12.4rem;
		height: 100%;
		max-height: 6.4rem;
		color: ${Colors.halfLightGray};
		margin: 2rem 0;
		transition: color 0.2s ease-out;

		&:hover {
			color: ${Colors.white};
		}
	}
`;
