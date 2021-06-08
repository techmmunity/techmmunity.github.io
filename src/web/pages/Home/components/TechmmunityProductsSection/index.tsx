import { useTranslation } from "next-i18next";

import { IconsType } from "web/components/Icon/assets/icons";

import { Card } from "./components/Card";

import { SOCIAL_NETWORKS_URL } from "config/social-networks-urls";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

interface TechmmunityProductsCard {
	id: number;
	name: string;
	url: string;
	icon: IconsType;
	title: string;
	description: string;
}

export const TechmmunityProductsSection: React.FC = () => {
	const { t } = useTranslation("home");

	const techmmunityProductsCards: Array<TechmmunityProductsCard> = [
		{
			id: 1,
			name: "Discord",
			url: SOCIAL_NETWORKS_URL.discord,
			icon: "discord",
			title: t("techmmunityProductsSection.cards.discord.title"),
			description: t("techmmunityProductsSection.cards.discord.description"),
		},
		{
			id: 2,
			name: "Youtube",
			url: SOCIAL_NETWORKS_URL.youtube,
			icon: "youtube",
			title: t("techmmunityProductsSection.cards.youtube.title"),
			description: t("techmmunityProductsSection.cards.youtube.description"),
		},
		{
			id: 3,
			name: "Twitch",
			url: SOCIAL_NETWORKS_URL.twitch,
			icon: "twitch",
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
