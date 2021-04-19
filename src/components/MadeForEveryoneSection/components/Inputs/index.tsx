/*
 * All elements were described 1 by 1
 * instead of being rendered via .map()
 * due performance requirement.
 */

import { memo, Dispatch, SetStateAction } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { RiVolumeUpFill, RiSuitcaseFill } from "react-icons/ri";

import { Container, InputContainer, Input, Label, Text } from "./styles";

interface Props {
	setCurrentCard: Dispatch<SetStateAction<number>>;
}

export const Inputs: React.FC<Props> = memo(({ setCurrentCard }) => (
	<Container>
		<InputContainer>
			<Input
				type="radio"
				id="made-for-everyone-card-1"
				name="made-for-everyone"
				defaultChecked
				onClick={() => setCurrentCard(1)}
			/>
			<Label htmlFor="made-for-everyone-card-1">
				<BiCodeAlt />
				<Text>Programming</Text>
			</Label>
		</InputContainer>
		<InputContainer>
			<Input
				type="radio"
				id="made-for-everyone-card-2"
				name="made-for-everyone"
				onClick={() => setCurrentCard(2)}
			/>
			<Label htmlFor="made-for-everyone-card-2">
				<FaPencilAlt />
				<Text>Graphic Design</Text>
			</Label>
		</InputContainer>
		<InputContainer>
			<Input
				type="radio"
				id="made-for-everyone-card-3"
				name="made-for-everyone"
				onClick={() => setCurrentCard(3)}
			/>
			<Label htmlFor="made-for-everyone-card-3">
				<RiVolumeUpFill />
				<Text>Sound Design</Text>
			</Label>
		</InputContainer>
		<InputContainer>
			<Input
				type="radio"
				id="made-for-everyone-card-4"
				name="made-for-everyone"
				onClick={() => setCurrentCard(4)}
			/>
			<Label htmlFor="made-for-everyone-card-4">
				<BsGearFill />
				<Text>Robotic E.</Text>
			</Label>
		</InputContainer>
		<InputContainer>
			<Input
				type="radio"
				id="made-for-everyone-card-5"
				name="made-for-everyone"
				onClick={() => setCurrentCard(5)}
			/>
			<Label htmlFor="made-for-everyone-card-5">
				<RiSuitcaseFill />
				<Text>Management</Text>
			</Label>
		</InputContainer>
	</Container>
));
