import { FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";

import { Card } from "./components/Card";

import { EN } from "assets/languages/en-US";

import { SocialNetworksLinks } from "config/social-networks-links";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

const techmmunityProductsCards = [
	{
		id: 1,
		url: SocialNetworksLinks.DISCORD,
		Icon: FaDiscord,
		title: EN.techmmunityProductsSection.cards.discord.title,
		description: EN.techmmunityProductsSection.cards.discord.description,
	},
	{
		id: 2,
		url: SocialNetworksLinks.YOUTUBE,
		Icon: FaYoutube,
		title: EN.techmmunityProductsSection.cards.youtube.title,
		description: EN.techmmunityProductsSection.cards.youtube.description,
	},
	{
		id: 3,
		url: SocialNetworksLinks.TWITCH,
		Icon: FaTwitch,
		title: EN.techmmunityProductsSection.cards.twitch.title,
		description: EN.techmmunityProductsSection.cards.twitch.description,
	},
];

export const TechmmunityProductsSection: React.FC = () => (
	<Container>
		<Description>
			<Title>{EN.techmmunityProductsSection.description.title}</Title>
			<Subtitle>{EN.techmmunityProductsSection.description.subtitle}</Subtitle>
		</Description>
		<Cards>
			{techmmunityProductsCards.map(({ id, ...props }) => (
				<Card key={id} {...props} />
			))}
		</Cards>
	</Container>
);
