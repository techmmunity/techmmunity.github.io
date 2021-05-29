import { useTranslation } from "next-i18next";

import { Dispatch, SetStateAction, memo, useMemo } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiVolumeUpFill, RiSuitcaseFill } from "react-icons/ri";

import { Container } from "./styles";

import { Button } from "../Button";

interface Props {
	currentCard: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
}

export const Buttons: React.FC<Props> = memo(
	({ currentCard, setCurrentCard }) => {
		const { t } = useTranslation("home");

		const techmmunityDivisionsButtons = useMemo(
			() => [
				{
					id: 1,
					Icon: BiCodeAlt,
					text: t("techmmunityDivisionsSection.inputs.dev"),
				},
				{
					id: 2,
					Icon: FaPencilAlt,
					text: t("techmmunityDivisionsSection.inputs.graphic"),
				},
				{
					id: 3,
					Icon: RiVolumeUpFill,
					text: t("techmmunityDivisionsSection.inputs.song"),
				},
				{
					id: 4,
					Icon: BsGearFill,
					text: t("techmmunityDivisionsSection.inputs.robotic"),
				},
				{
					id: 5,
					Icon: RiSuitcaseFill,
					text: t("techmmunityDivisionsSection.inputs.manager"),
				},
			],
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
