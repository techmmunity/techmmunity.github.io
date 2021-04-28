import { memo, Dispatch, SetStateAction } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiVolumeUpFill, RiSuitcaseFill } from "react-icons/ri";

import { EN } from "assets/languages/en-US";

import { Container, InputContainer, Input, Label, Text } from "./styles";

interface Props {
	defaultCheckedCardId: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
}

const techmmunityDivisionsInput = [
	{
		id: 1,
		Icon: BiCodeAlt,
		textLabel: EN.techmmunityDivisionsSection.inputs.dev.textLabel,
	},
	{
		id: 2,
		Icon: FaPencilAlt,
		textLabel: EN.techmmunityDivisionsSection.inputs.graphic.textLabel,
	},
	{
		id: 3,
		Icon: RiVolumeUpFill,
		textLabel: EN.techmmunityDivisionsSection.inputs.song.textLabel,
	},
	{
		id: 4,
		Icon: BsGearFill,
		textLabel: EN.techmmunityDivisionsSection.inputs.robotic.textLabel,
	},
	{
		id: 5,
		Icon: RiSuitcaseFill,
		textLabel: EN.techmmunityDivisionsSection.inputs.manager.textLabel,
	},
];

export const Inputs: React.FC<Props> = memo(
	({ defaultCheckedCardId, setCurrentCard }) => (
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
	),
);