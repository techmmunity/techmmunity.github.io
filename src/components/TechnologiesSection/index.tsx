import {
	Docker,
	NestJs,
	NextJs,
	NodeJs,
	ReactJs,
	TypeScript,
} from "assets/images/svg";

import { Container, Line, Icons } from "./styles";

export const TechnologiesSection: React.FC = () => (
	<Container>
		<Line />
		<Icons>
			<NextJs />
			<NestJs />
			<NodeJs />
			<ReactJs />
			<TypeScript />
			<Docker />
		</Icons>
		<Line />
	</Container>
);
