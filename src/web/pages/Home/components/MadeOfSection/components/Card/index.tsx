import { IconType } from "react-icons";

import {
	Container,
	Content,
	IconContainer,
	Title,
	Description,
} from "./styles";

interface Props {
	icon: IconType;
	title: string;
	description: string;
}

export const Card: React.FC<Props> = ({ icon: Icon, title, description }) => (
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
