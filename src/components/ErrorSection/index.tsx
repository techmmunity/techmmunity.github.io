import { Link } from "components/Link";

import { Container, Title, Subtitle, RedirectToHomeButton } from "./styles";

export const ErrorSection: React.FC = () => (
	<Container>
		<Title>Oh no, no one is here!</Title>
		<Subtitle>Come on, click here to see if we find more people:</Subtitle>
		<RedirectToHomeButton>
			<Link href="/" blank>
				Go to home page
			</Link>
		</RedirectToHomeButton>
	</Container>
);
