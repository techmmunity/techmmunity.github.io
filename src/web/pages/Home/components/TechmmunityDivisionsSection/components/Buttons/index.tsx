import { useTranslation } from "next-i18next";

import { Dispatch, SetStateAction, memo, useMemo } from "react";

import { IconsType } from "web/components/Icon/assets/icons";

import { Container } from "./styles";

import { Button } from "../Button";

interface Props {
	currentCard: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
}

interface TechmmunityDivisionsButton {
	id: number;
	icon: IconsType;
	text: string;
}

export const Buttons: React.FC<Props> = memo(
	({ currentCard, setCurrentCard }) => {
		const { t } = useTranslation("home");

		const techmmunityDivisionsButtons = useMemo(
			() =>
				[
					{
						id: 1,
						icon: "codeAlt",
						text: t("techmmunityDivisionsSection.inputs.dev"),
					},
					{
						id: 2,
						icon: "pencilAlt",
						text: t("techmmunityDivisionsSection.inputs.graphic"),
					},
					{
						id: 3,
						icon: "volumeUpFill",
						text: t("techmmunityDivisionsSection.inputs.song"),
					},
					{
						id: 4,
						icon: "gearFill",
						text: t("techmmunityDivisionsSection.inputs.robotic"),
					},
					{
						id: 5,
						icon: "suitcaseFill",
						text: t("techmmunityDivisionsSection.inputs.manager"),
					},
				] as Array<TechmmunityDivisionsButton>,
			[t],
		);

		return (
			<Container>
				{techmmunityDivisionsButtons.map(({ id, ...props }) => (
					<Button
						key={id}
						id={id}
						currentCard={currentCard}
						setCurrentCard={setCurrentCard}
						{...props}
					/>
				))}
			</Container>
		);
	},
);
