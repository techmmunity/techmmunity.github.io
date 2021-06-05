import { useTranslation } from "next-i18next";

import { IconsType } from "web/components/Icon/assets/icons";

import { Card } from "./components/Card";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

interface MadeOfCard {
	id: number;
	icon: IconsType;
	title: string;
	description: string;
}

export const MadeOfSection: React.FC = () => {
	const { t } = useTranslation("home");

	const madeOfCards: Array<MadeOfCard> = [
		{
			id: 1,
			icon: "cpu",
			title: t("madeOfSection.cards.technology.title"),
			description: t("madeOfSection.cards.technology.description"),
		},
		{
			id: 2,
			icon: "group",
			title: t("madeOfSection.cards.community.title"),
			description: t("madeOfSection.cards.community.description"),
		},
		{
			id: 3,
			icon: "fillLike",
			title: t("madeOfSection.cards.diversity.title"),
			description: t("madeOfSection.cards.diversity.description"),
		},
	];

	const getSubtitle = () => {
		const text = t("madeOfSection.description.subtitle");

		const [firstPart, lastPart] = text.split("Techmmunity");

		return (
			<>
				{firstPart}
				<strong>Techmmunity</strong>
				{lastPart}
			</>
		);
	};

	return (
		<Container id="made-of">
			<Description>
				<Title>{t("madeOfSection.description.title")}</Title>
				<Subtitle>{getSubtitle()}</Subtitle>
			</Description>
			<Cards>
				{madeOfCards.map(({ id, ...props }) => (
					<Card key={id} {...props} />
				))}
			</Cards>
		</Container>
	);
};
