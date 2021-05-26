import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	z-index: 1;
	overflow-y: hidden;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		content: "404";
		color: ${Colors.gray500};
		font-size: clamp(1.6rem, 1rem + 50vw, 50rem);
		font-weight: bold;
		z-index: -1;
	}
`;
