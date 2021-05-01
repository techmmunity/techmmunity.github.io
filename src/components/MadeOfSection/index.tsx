import { AiFillLike } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { TiGroup } from "react-icons/ti";

import { Card } from "./components/Card";

import { EN } from "assets/languages/en-US";

import {
	Container,
	Description,
	Title,
	Subtitle,
	Strong,
	Cards,
} from "./styles";

const madeOfCards = [
	{
		id: 1,
		Icon: FiCpu,
		title: EN.madeOfSection.cards.technology.title,
		description: EN.madeOfSection.cards.technology.description,
	},
	{
		id: 2,
		Icon: TiGroup,
		title: EN.madeOfSection.cards.community.title,
		description: EN.madeOfSection.cards.community.description,
	},
	{
		id: 3,
		Icon: AiFillLike,
		title: EN.madeOfSection.cards.diversity.title,
		description: EN.madeOfSection.cards.diversity.description,
	},
];

export const MadeOfSection: React.FC = () => (
	<Container>
		<Description>
			<Title>With space for everyone hungry for knowledge</Title>
			<Subtitle>
				What is <Strong>Techmmunity</Strong> made of?
			</Subtitle>
		</Description>
		<Cards>
			{madeOfCards.map(({ id, ...props }) => (
				<Card key={id} {...props} />
			))}
		</Cards>
	</Container>
);
