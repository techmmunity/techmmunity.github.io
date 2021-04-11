import {
	Container,
	Content,
	QuoteIcon,
	Feedback,
	Line,
	Author,
} from "./styles";

interface Props {
	feedback: string;
	author: string;
}

export const Card: React.FC<Props> = ({ feedback, author }) => (
	<Container>
		<Content>
			<QuoteIcon />
			<Feedback>{feedback}</Feedback>
		</Content>
		<Content>
			<Line />
			<Author>{author}</Author>
		</Content>
	</Container>
);
