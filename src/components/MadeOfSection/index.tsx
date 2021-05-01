import { useTranslation } from "next-i18next";

import { AiFillLike } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { TiGroup } from "react-icons/ti";

import { Card } from "./components/Card";

import {
	Container,
	Description,
	Title,
	Subtitle,
	Strong,
	Cards,
} from "./styles";

export const MadeOfSection: React.FC = () => {
	const { t } = useTranslation();

	const madeOfCards = [
		{
			id: 1,
			Icon: FiCpu,
			title: t("madeOfSection.cards.technology.title"),
			description: t("madeOfSection.cards.technology.description"),
		},
		{
			id: 2,
			Icon: TiGroup,
			title: t("madeOfSection.cards.community.title"),
			description: t("madeOfSection.cards.community.description"),
		},
		{
			id: 3,
			Icon: AiFillLike,
			title: t("madeOfSection.cards.diversity.title"),
			description: t("madeOfSection.cards.diversity.description"),
		},
	];

	return (
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
};
