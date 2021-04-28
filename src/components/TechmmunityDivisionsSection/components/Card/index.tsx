import { memo } from "react";

import { LinkWithLanguage } from "components/LinkWithLanguage";

import {
	Container,
	Content,
	Title,
	Description,
	LearnMore,
	ArrowRight,
	Image,
} from "./styles";

interface Props {
	isCurrent: boolean;
	invertOrder: boolean;
	title: string;
	description: string;
	url: string;
	image: string;
	alt: string;
}

export const Card: React.FC<Props> = memo(
	({ isCurrent, invertOrder, title, description, url, image, alt }) => (
		<Container isCurrent={isCurrent} invertOrder={invertOrder}>
			<Content invertOrder={invertOrder}>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<LearnMore>
					<LinkWithLanguage href={url}>
						Learn more <ArrowRight />
					</LinkWithLanguage>
				</LearnMore>
			</Content>
			<Image src={image} alt={alt} invertOrder={invertOrder} />
		</Container>
	),
);
