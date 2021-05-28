import { useTranslation } from "next-i18next";

import { useMemo } from "react";

import { isOdd } from "@techmmunity/easy-check";

import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

export const Cards: React.FC<Props> = ({ currentCard }) => {
	const { t } = useTranslation("home");

	const techmmunityDivisionsCards = useMemo(
		() => [
			{
				order: 1,
				title: t("techmmunityDivisionsSection.cards.dev.title"),
				description: t("techmmunityDivisionsSection.cards.dev.description"),
				learnMore: {
					text: t("techmmunityDivisionsSection.cards.dev.links.learnMore.text"),
					ariaLabel: t(
						"techmmunityDivisionsSection.cards.dev.links.learnMore.ariaLabel",
					),
				},
				image: "pexels-programming.webp",
				alt: t("techmmunityDivisionsSection.cards.dev.title"),
			},
			{
				order: 2,
				title: t("techmmunityDivisionsSection.cards.graphic.title"),
				description: t("techmmunityDivisionsSection.cards.graphic.description"),
				learnMore: {
					text: t(
						"techmmunityDivisionsSection.cards.graphic.links.learnMore.text",
					),
					ariaLabel: t(
						"techmmunityDivisionsSection.cards.graphic.links.learnMore.ariaLabel",
					),
				},
				image: "pexels-graphic.webp",
				alt: t("techmmunityDivisionsSection.cards.graphic.title"),
			},
			{
				order: 3,
				title: t("techmmunityDivisionsSection.cards.song.title"),
				description: t("techmmunityDivisionsSection.cards.song.description"),
				learnMore: {
					text: t(
						"techmmunityDivisionsSection.cards.song.links.learnMore.text",
					),
					ariaLabel: t(
						"techmmunityDivisionsSection.cards.song.links.learnMore.ariaLabel",
					),
				},
				image: "pexels-sound.webp",
				alt: t("techmmunityDivisionsSection.cards.song.title"),
			},
			{
				order: 4,
				title: t("techmmunityDivisionsSection.cards.robotic.title"),
				description: t("techmmunityDivisionsSection.cards.robotic.description"),
				learnMore: {
					text: t(
						"techmmunityDivisionsSection.cards.robotic.links.learnMore.text",
					),
					ariaLabel: t(
						"techmmunityDivisionsSection.cards.robotic.links.learnMore.ariaLabel",
					),
				},
				image: "pexels-robotic.webp",
				alt: t("techmmunityDivisionsSection.cards.robotic.title"),
			},
			{
				order: 5,
				title: t("techmmunityDivisionsSection.cards.manager.title"),
				description: t("techmmunityDivisionsSection.cards.manager.description"),
				learnMore: {
					text: t(
						"techmmunityDivisionsSection.cards.manager.links.learnMore.text",
					),
					ariaLabel: t(
						"techmmunityDivisionsSection.cards.dev.links.learnMore.ariaLabel",
					),
				},
				image: "pexels-management.webp",
				alt: t("techmmunityDivisionsSection.cards.manager.title"),
			},
		],
		[t],
	);

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
