import Link from "next/link";

import { DISCORD_LINK } from "config";

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
				<Link href="#about-us">
					<a rel="noopener noreferrer">Learn more about us</a>
				</Link>
			</AboutUs>
			<Community>
				<Link href={DISCORD_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						Join our community
					</a>
				</Link>
			</Community>
		</Links>
	</Container>
);
