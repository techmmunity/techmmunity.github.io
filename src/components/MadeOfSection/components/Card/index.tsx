import { IconType } from "react-icons";

import {
	Container,
	Content,
	IconContainer,
	Title,
	Description,
} from "./styles";

interface Props {
	Icon: IconType;
	title: string;
	description: string;
}

export const Card: React.FC<Props> = ({ Icon, title, description }) => (
	<Container>
		<Content>
			<IconContainer>
				<Icon />
			</IconContainer>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Content>
	</Container>
);
