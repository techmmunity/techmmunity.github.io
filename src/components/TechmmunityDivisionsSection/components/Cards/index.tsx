import { EN } from "assets/languages/en-US";

import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

const techmmunityDivisionsCards = [
	{
		id: 1,
		title: EN.techmmunityDivisionsSection.cards.dev.title,
		description: EN.techmmunityDivisionsSection.cards.dev.description,
		url: "#",
		image: "pexels-programming.webp",
		alt: EN.techmmunityDivisionsSection.cards.dev.title,
	},
	{
		id: 2,
		title: EN.techmmunityDivisionsSection.cards.graphic.title,
		description: EN.techmmunityDivisionsSection.cards.graphic.description,
		url: "#",
		image: "pexels-graphic.webp",
		alt: EN.techmmunityDivisionsSection.cards.graphic.title,
	},
	{
		id: 3,
		title: EN.techmmunityDivisionsSection.cards.song.title,
		description: EN.techmmunityDivisionsSection.cards.song.description,
		url: "#",
		image: "pexels-sound.webp",
		alt: EN.techmmunityDivisionsSection.cards.song.title,
	},
	{
		id: 4,
		title: EN.techmmunityDivisionsSection.cards.robotic.title,
		description: EN.techmmunityDivisionsSection.cards.robotic.description,
		url: "#",
		image: "pexels-robotic.webp",
		alt: EN.techmmunityDivisionsSection.cards.robotic.title,
	},
	{
		id: 5,
		title: EN.techmmunityDivisionsSection.cards.manager.title,
		description: EN.techmmunityDivisionsSection.cards.manager.description,
		url: "#",
		image: "pexels-management.webp",
		alt: EN.techmmunityDivisionsSection.cards.manager.title,
	},
];

export const Cards: React.FC<Props> = ({ currentCard }) => (
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
