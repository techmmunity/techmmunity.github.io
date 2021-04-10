import styled from "styled-components";

export const Container = styled.section`
	margin: 1rem;
`;

export const Line = styled.span``;

export const Icons = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	> svg {
		width: 100%;
		max-width: 124px;
		height: 100%;
		max-height: 64px;
		fill: #fff;
	}
`;

export const Icon = styled.img`
	width: 100%;
	max-width: 124px;
	height: 100%;
	max-height: 64px;
`;
