import Link from "next/link";

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
	current: boolean;
	invertOrder: boolean;
	title: string;
	description: string;
	url: string;
	image: string;
}

export const Card: React.FC<Props> = ({
	current,
	invertOrder,
	title,
	description,
	url,
	image,
}) => (
	<Container current={current} invertOrder={invertOrder}>
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
		<Image src={image} invertOrder={invertOrder} />
	</Container>
);
