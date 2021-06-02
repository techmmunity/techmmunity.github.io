import { useTranslation } from "next-i18next";

import { FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";

import { Card } from "./components/Card";

import { SOCIAL_NETWORKS_URL } from "config/social-networks-urls";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

export const TechmmunityProductsSection: React.FC = () => {
	const { t } = useTranslation("home");

	const techmmunityProductsCards = [
		{
			id: 1,
			url: SOCIAL_NETWORKS_URL.discord,
			icon: FaDiscord,
			title: t("techmmunityProductsSection.cards.discord.title"),
			description: t("techmmunityProductsSection.cards.discord.description"),
		},
		{
			id: 2,
			url: SOCIAL_NETWORKS_URL.youtube,
			icon: FaYoutube,
			title: t("techmmunityProductsSection.cards.youtube.title"),
			description: t("techmmunityProductsSection.cards.youtube.description"),
		},
		{
			id: 3,
			url: SOCIAL_NETWORKS_URL.twitch,
			icon: FaTwitch,
			title: t("techmmunityProductsSection.cards.twitch.title"),
			description: t("techmmunityProductsSection.cards.twitch.description"),
		},
	];

	return (
		<Container id="products">
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
