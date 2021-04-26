import Link from "next/link";

import { IconType } from "react-icons";

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
				<Link href={url}>
					<a target="_blank" rel="noopener noreferrer">
						<Icon />
					</a>
				</Link>
			</IconContainer>
			<DescriptionContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</DescriptionContainer>
		</Content>
	</Container>
);
