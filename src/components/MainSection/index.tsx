import { Link } from "components/Link";
import { LinkWithLanguage } from "components/LinkWithLanguage";

import { SocialNetworksLinks } from "config/social-networks-links";

import {
	Container,
	Description,
	Title,
	Subtitle,
	Links,
	AboutUs,
	Community,
} from "./styles";

export const MainSection: React.FC = () => (
	<Container id="main">
		<Description>
			<Title>Techmmunity - A Tech Community</Title>
			<Subtitle>
				Here we share knowledge, free of charge and accessible.
			</Subtitle>
		</Description>
		<Links>
			<AboutUs>
				<LinkWithLanguage href="#about-us">
					Learn more about us
				</LinkWithLanguage>
			</AboutUs>
			<Community>
				<Link href={SocialNetworksLinks.DISCORD} blank>
					Join our community
				</Link>
			</Community>
		</Links>
	</Container>
);
