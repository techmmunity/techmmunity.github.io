import {
	Docker,
	NestJs,
	NextJs,
	NodeJs,
	ReactJs,
	TypeScript,
} from "assets/images/svg";

import { Container, Icons } from "./styles";

export const TechnologiesSection: React.FC = () => (
	<Container>
		<Icons>
			<NextJs />
			<NestJs />
			<NodeJs />
			<ReactJs />
			<TypeScript />
			<Docker />
		</Icons>
	</Container>
);
