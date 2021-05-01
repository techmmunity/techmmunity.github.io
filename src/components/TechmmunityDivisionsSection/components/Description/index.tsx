import { memo } from "react";

import { Container, Title, Subtitle } from "./styles";

export const Description: React.FC = memo(() => (
	<Container>
		<Title>Made for all types of people!</Title>
		<Subtitle>
			Whatever your goal, we can help you get the knowledge or find someone who
			has it!
		</Subtitle>
	</Container>
));
