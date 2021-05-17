import { useTranslation } from "next-i18next";

import { isOdd } from "@techmmunity/easy-check";

import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

export const Cards: React.FC<Props> = ({ currentCard }) => {
	const { t } = useTranslation();

	const techmmunityDivisionsCards = [
		{
			order: 1,
			title: t("techmmunityDivisionsSection.cards.dev.title"),
			description: t("techmmunityDivisionsSection.cards.dev.description"),
			image: "pexels-programming.webp",
			alt: t("techmmunityDivisionsSection.cards.dev.title"),
		},
		{
			order: 2,
			title: t("techmmunityDivisionsSection.cards.graphic.title"),
			description: t("techmmunityDivisionsSection.cards.graphic.description"),
			image: "pexels-graphic.webp",
			alt: t("techmmunityDivisionsSection.cards.graphic.title"),
		},
		{
			order: 3,
			title: t("techmmunityDivisionsSection.cards.song.title"),
			description: t("techmmunityDivisionsSection.cards.song.description"),
			image: "pexels-sound.webp",
			alt: t("techmmunityDivisionsSection.cards.song.title"),
		},
		{
			order: 4,
			title: t("techmmunityDivisionsSection.cards.robotic.title"),
			description: t("techmmunityDivisionsSection.cards.robotic.description"),
			image: "pexels-robotic.webp",
			alt: t("techmmunityDivisionsSection.cards.robotic.title"),
		},
		{
			order: 5,
			title: t("techmmunityDivisionsSection.cards.manager.title"),
			description: t("techmmunityDivisionsSection.cards.manager.description"),
			image: "pexels-management.webp",
			alt: t("techmmunityDivisionsSection.cards.manager.title"),
		},
	];

	return (
		<Container>
			{techmmunityDivisionsCards.map(({ order, ...props }) => (
				<Card
					key={order}
					isCurrent={currentCard === order}
					invertOrder={isOdd(order)}
					{...props}
				/>
			))}
		</Container>
	);
};
