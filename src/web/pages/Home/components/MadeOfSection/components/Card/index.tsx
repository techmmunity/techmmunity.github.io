import { Icon } from "web/components/Icon";
import { IconsType } from "web/components/Icon/assets/icons";

import {
	Container,
	Content,
	IconContainer,
	Title,
	Description,
} from "./styles";

interface Props {
	icon: IconsType;
	title: string;
	description: string;
}

export const Card: React.FC<Props> = ({ icon, title, description }) => (
	<Container>
		<Content>
			<IconContainer>
				<Icon icon={icon} />
			</IconContainer>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Content>
	</Container>
);
