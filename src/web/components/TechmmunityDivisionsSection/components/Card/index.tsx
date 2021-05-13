import { useTranslation } from "next-i18next";

import { memo } from "react";

import { Link } from "web/components/Link";

import { SocialNetworksUrls } from "config/social-networks-urls";

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
	image: string;
	alt: string;
}

export const Card: React.FC<Props> = memo(
	({ isCurrent, invertOrder, title, description, image, alt }) => {
		const { t } = useTranslation();

		return (
			<Container isCurrent={isCurrent} invertOrder={invertOrder}>
				<Content invertOrder={invertOrder}>
					<Title>{title}</Title>
					<Description>{description}</Description>
					<LearnMore>
						<Link href={SocialNetworksUrls.discord} blank>
							{t("techmmunityDivisionsSection.links.learnMore")} <ArrowRight />
						</Link>
					</LearnMore>
				</Content>
				<Image src={image} alt={alt} invertOrder={invertOrder} />
			</Container>
		);
	},
);
