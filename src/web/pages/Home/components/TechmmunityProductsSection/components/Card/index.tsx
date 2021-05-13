import { IconType } from "react-icons";

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
	url: string;
	Icon: IconType;
	title: string;
	description: string;
}

export const Card: React.FC<Props> = ({ url, Icon, title, description }) => (
	<Container>
		<Content>
			<IconContainer>
				<Link href={url} blank>
					<Icon />
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
