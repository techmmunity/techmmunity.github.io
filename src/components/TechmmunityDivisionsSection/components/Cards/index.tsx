import { useTranslation } from "next-i18next";

import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

export const Cards: React.FC<Props> = ({ currentCard }) => {
	const { t } = useTranslation();

	const techmmunityDivisionsCards = [
		{
			id: 1,
			title: t("techmmunityDivisionsSection.cards.dev.title"),
			description: t("techmmunityDivisionsSection.cards.dev.description"),
			url: "#",
			image: "pexels-programming.webp",
			alt: t("techmmunityDivisionsSection.cards.dev.title"),
		},
		{
			id: 2,
			title: t("techmmunityDivisionsSection.cards.graphic.title"),
			description: t("techmmunityDivisionsSection.cards.graphic.description"),
			url: "#",
			image: "pexels-graphic.webp",
			alt: t("techmmunityDivisionsSection.cards.graphic.title"),
		},
		{
			id: 3,
			title: t("techmmunityDivisionsSection.cards.song.title"),
			description: t("techmmunityDivisionsSection.cards.song.description"),
			url: "#",
			image: "pexels-sound.webp",
			alt: t("techmmunityDivisionsSection.cards.song.title"),
		},
		{
			id: 4,
			title: t("techmmunityDivisionsSection.cards.robotic.title"),
			description: t("techmmunityDivisionsSection.cards.robotic.description"),
			url: "#",
			image: "pexels-robotic.webp",
			alt: t("techmmunityDivisionsSection.cards.robotic.title"),
		},
		{
			id: 5,
			title: t("techmmunityDivisionsSection.cards.manager.title"),
			description: t("techmmunityDivisionsSection.cards.manager.description"),
			url: "#",
			image: "pexels-management.webp",
			alt: t("techmmunityDivisionsSection.cards.manager.title"),
		},
	];

	return (
		<Container>
			{techmmunityDivisionsCards.map(({ id, ...props }) => (
				<Card
					key={id}
					isCurrent={currentCard === id}
					invertOrder={id % 2 === 0}
					{...props}
				/>
			))}
		</Container>
	);
};
