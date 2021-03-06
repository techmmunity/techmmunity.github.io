import { Link } from "web/components/Link";

import {
	Container,
	Description,
	Title,
	Subtitle,
	RedirectToHomeButton,
} from "./styles";

export const ErrorSection: React.FC = () => (
	<Container>
		<Description>
			<Title>Oh no, no one is here!</Title>
			<Subtitle>Come on, click here to see if we find more people:</Subtitle>
		</Description>
		<RedirectToHomeButton>
			<Link href="/">Go to home page</Link>
		</RedirectToHomeButton>
	</Container>
);
