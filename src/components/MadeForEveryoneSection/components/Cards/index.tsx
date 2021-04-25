import { EN } from "assets/languages/en-US";

import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

const madeForEveryoneCards = [
	{
		id: 1,
		title: EN.madeForEveryoneSection.cards.dev.title,
		description: EN.madeForEveryoneSection.cards.dev.description,
		url: "#",
		image: "pexels-programming.webp",
		alt: EN.madeForEveryoneSection.cards.dev.title,
	},
	{
		id: 2,
		title: EN.madeForEveryoneSection.cards.graphic.title,
		description: EN.madeForEveryoneSection.cards.graphic.description,
		url: "#",
		image: "pexels-graphic.webp",
		alt: EN.madeForEveryoneSection.cards.graphic.title,
	},
	{
		id: 3,
		title: EN.madeForEveryoneSection.cards.song.title,
		description: EN.madeForEveryoneSection.cards.song.description,
		url: "#",
		image: "pexels-sound.webp",
		alt: EN.madeForEveryoneSection.cards.song.title,
	},
	{
		id: 4,
		title: EN.madeForEveryoneSection.cards.robotic.title,
		description: EN.madeForEveryoneSection.cards.robotic.description,
		url: "#",
		image: "pexels-robotic.webp",
		alt: EN.madeForEveryoneSection.cards.robotic.title,
	},
	{
		id: 5,
		title: EN.madeForEveryoneSection.cards.manager.title,
		description: EN.madeForEveryoneSection.cards.manager.description,
		url: "#",
		image: "pexels-management.webp",
		alt: EN.madeForEveryoneSection.cards.manager.title,
	},
];

export const Cards: React.FC<Props> = ({ currentCard }) => (
	<Container>
		{madeForEveryoneCards.map(({ id, ...props }) => (
			<Card
				key={id}
				isCurrent={currentCard === id}
				invertOrder={id % 2 === 0}
				{...props}
			/>
		))}
	</Container>
);
