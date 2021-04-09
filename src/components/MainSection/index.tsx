import Link from "next/link";

import { DISCORD_LINK } from "config/config";

import {
	Container,
	Header,
	Description,
	Title,
	Subtitle,
	Links,
	Community,
	AboutUs,
} from "./styles";

export const MainSection: React.FC = () => (
	<Container id="main">
		<Header>
			<Description>
				<Title>Techmmunity - A Tech Community</Title>
				<Subtitle>
					Here we share knowledge, free of charge and accessible.
				</Subtitle>
			</Description>
		</Header>
		<Links>
			<Community>
				<Link href={DISCORD_LINK}>
					<a target="_blank">Join our community</a>
				</Link>
			</Community>
			<AboutUs>
				<Link href="#about-us">
					<a>Learn more about us</a>
				</Link>
			</AboutUs>
		</Links>
	</Container>
);
