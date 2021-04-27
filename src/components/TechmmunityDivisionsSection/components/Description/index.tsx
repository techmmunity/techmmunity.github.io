import { memo } from "react";

import { Container, Title, Subtitle } from "./styles";

export const Description: React.FC = memo(() => (
	<Container>
		<Title>Made for all types of people!</Title>
		<Subtitle>
			Whatever your goal, we can help you get the knowledge to do it, or to find
			someone to make your dream come true!
		</Subtitle>
	</Container>
));
