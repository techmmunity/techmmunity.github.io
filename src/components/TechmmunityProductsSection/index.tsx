import { useTranslation } from "next-i18next";

import { FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";

import { Card } from "./components/Card";

import { SocialNetworksLinks } from "config/social-networks-links";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

export const TechmmunityProductsSection: React.FC = () => {
	const { t } = useTranslation();

	const techmmunityProductsCards = [
		{
			id: 1,
			url: SocialNetworksLinks.DISCORD,
			Icon: FaDiscord,
			title: t("techmmunityProductsSection.cards.discord.title"),
			description: t("techmmunityProductsSection.cards.discord.description"),
		},
		{
			id: 2,
			url: SocialNetworksLinks.YOUTUBE,
			Icon: FaYoutube,
			title: t("techmmunityProductsSection.cards.youtube.title"),
			description: t("techmmunityProductsSection.cards.youtube.description"),
		},
		{
			id: 3,
			url: SocialNetworksLinks.TWITCH,
			Icon: FaTwitch,
			title: t("techmmunityProductsSection.cards.twitch.title"),
			description: t("techmmunityProductsSection.cards.twitch.description"),
		},
	];

	return (
		<Container>
			<Description>
				<Title>{t("techmmunityProductsSection.description.title")}</Title>
				<Subtitle>
					{t("techmmunityProductsSection.description.subtitle")}
				</Subtitle>
			</Description>
			<Cards>
				{techmmunityProductsCards.map(({ id, ...props }) => (
					<Card key={id} {...props} />
				))}
			</Cards>
		</Container>
	);
};
