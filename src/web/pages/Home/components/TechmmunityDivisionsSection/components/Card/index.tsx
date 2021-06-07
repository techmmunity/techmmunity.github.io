import { memo } from "react";

import { Icon } from "web/components/Icon";
import { Link } from "web/components/Link";

import { SOCIAL_NETWORKS_URL } from "config/social-networks-urls";

import { Container, Content, Title, Description, Image } from "./styles";

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
					href={SOCIAL_NETWORKS_URL.discord}
					aria-label={learnMore.ariaLabel}
					blank
				>
					{learnMore.text} <Icon icon="arrowRight" />
				</Link>
			</Content>
			<Image src={image} alt={alt} invertOrder={invertOrder} />
		</Container>
	),
);
