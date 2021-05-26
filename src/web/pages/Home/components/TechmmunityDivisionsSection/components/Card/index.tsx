import { memo } from "react";

import { Link } from "web/components/Link";

import { SocialNetworksUrls } from "config/social-networks-urls";

import {
	Container,
	Content,
	Title,
	Description,
	ArrowRight,
	Image,
} from "./styles";

interface Props {
	isCurrent: boolean;
	invertOrder: boolean;
	title: string;
	description: string;
	learnMore: {
		text: string;
		ariaLabel: string;
	};
	image: string;
	alt: string;
}

export const Card: React.FC<Props> = memo(
	({ isCurrent, invertOrder, title, description, learnMore, image, alt }) => (
		<Container isCurrent={isCurrent} invertOrder={invertOrder}>
			<Content invertOrder={invertOrder}>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Link
					href={SocialNetworksUrls.discord}
					aria-label={learnMore.ariaLabel}
					blank
				>
					{learnMore.text} <ArrowRight />
				</Link>
			</Content>
			<Image src={image} alt={alt} invertOrder={invertOrder} />
		</Container>
	),
);
