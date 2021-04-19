import Link from "next/link";

import { memo } from "react";

import {
	Container,
	Content,
	Title,
	Description,
	LearnMore,
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
	({ isCurrent, invertOrder, title, description, image, alt }) => (
		<Container isCurrent={isCurrent} invertOrder={invertOrder}>
			<Content invertOrder={invertOrder}>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<LearnMore>
					<Link href="#">
						<a rel="noopener noreferrer">Learn more</a>
					</Link>
				</LearnMore>
			</Content>
			<Image src={image} alt={alt} invertOrder={invertOrder} />
		</Container>
	),
);
