import Link from "next/link";

import { memo } from "react";

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
					<Link href={url}>
						<a rel="noopener noreferrer">
							Learn more <ArrowRight />
						</a>
					</Link>
				</LearnMore>
			</Content>
			<Image src={image} alt={alt} invertOrder={invertOrder} />
		</Container>
	),
);
