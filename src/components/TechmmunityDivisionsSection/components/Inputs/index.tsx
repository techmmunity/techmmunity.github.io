import { useTranslation } from "next-i18next";

import { memo, Dispatch, SetStateAction } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiVolumeUpFill, RiSuitcaseFill } from "react-icons/ri";

import { Container, InputContainer, Input, Label, Text } from "./styles";

interface Props {
	defaultCheckedCardId: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
}

export const Inputs: React.FC<Props> = memo(
	({ defaultCheckedCardId, setCurrentCard }) => {
		const { t } = useTranslation();

		const techmmunityDivisionsInput = [
			{
				id: 1,
				Icon: BiCodeAlt,
				textLabel: t("techmmunityDivisionsSection.inputs.dev"),
			},
			{
				id: 2,
				Icon: FaPencilAlt,
				textLabel: t("techmmunityDivisionsSection.inputs.graphic"),
			},
			{
				id: 3,
				Icon: RiVolumeUpFill,
				textLabel: t("techmmunityDivisionsSection.inputs.song"),
			},
			{
				id: 4,
				Icon: BsGearFill,
				textLabel: t("techmmunityDivisionsSection.inputs.robotic"),
			},
			{
				id: 5,
				Icon: RiSuitcaseFill,
				textLabel: t("techmmunityDivisionsSection.inputs.manager"),
			},
		];

		return (
			<Container>
				{techmmunityDivisionsInput.map(({ id, Icon, textLabel }) => (
					<InputContainer key={id}>
						<Input
							type="radio"
							id={`techmmunity-divisions-card-${id}`}
							name="techmmunity-divisions-card"
							defaultChecked={id === defaultCheckedCardId}
							onClick={() => setCurrentCard(id)}
						/>
						<Label htmlFor={`techmmunity-divisions-card-${id}`}>
							<Icon />
							<Text>{textLabel}</Text>
						</Label>
					</InputContainer>
				))}
			</Container>
		);
	},
);
