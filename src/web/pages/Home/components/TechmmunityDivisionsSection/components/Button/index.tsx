import { Dispatch, SetStateAction, memo } from "react";

import { Icon } from "web/components/Icon";
import { IconsType } from "web/components/Icon/assets/icons";

import { Li, Container, Text } from "./styles";

interface Props {
	id: number;
	currentCard: number;
	setCurrentCard: Dispatch<SetStateAction<number>>;
	icon: IconsType;
	text: string;
}

export const Button: React.FC<Props> = memo(
	({ id, currentCard, setCurrentCard, text, icon }) => (
		<Li>
			<Container
				active={id === currentCard}
				onClick={() => setCurrentCard(id)}
				aria-label={text}
			>
				<Icon icon={icon} />
				<Text>{text}</Text>
			</Container>
		</Li>
	),
);
