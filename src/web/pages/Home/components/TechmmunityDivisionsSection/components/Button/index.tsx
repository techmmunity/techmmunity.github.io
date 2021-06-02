import { Dispatch, SetStateAction, memo } from "react";
import { IconType } from "react-icons";

import { Li, Container, Text } from "./styles";

interface Props {
	id: number;
	currentCard: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
	icon: IconType;
	text: string;
}

export const Button: React.FC<Props> = memo(
	({ id, currentCard, setCurrentCard, text, icon: Icon }) => (
		<Li>
			<Container
				active={id === currentCard}
				onClick={() => setCurrentCard(id)}
				aria-label={text}
			>
				<Icon />
				<Text>{text}</Text>
			</Container>
		</Li>
	),
);
