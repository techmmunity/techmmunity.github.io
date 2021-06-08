import { Icon } from "web/components/Icon";
import { IconsType } from "web/components/Icon/assets/icons";
import { Link } from "web/components/Link";

import {
	Container,
	Content,
	IconContainer,
	DescriptionContainer,
	Title,
	Description,
} from "./styles";

interface Props {
	name: string;
	url: string;
	icon: IconsType;
	title: string;
	description: string;
}

export const Card: React.FC<Props> = ({
	name,
	url,
	icon,
	title,
	description,
}) => (
	<Container>
		<Content>
			<IconContainer>
				<Link href={url} blank aria-label={name}>
					<Icon icon={icon} />
				</Link>
			</IconContainer>
			<DescriptionContainer>
				<Title>
					<Link href={url} blank>
						{title}
					</Link>
				</Title>
				<Description>{description}</Description>
			</DescriptionContainer>
		</Content>
	</Container>
);
