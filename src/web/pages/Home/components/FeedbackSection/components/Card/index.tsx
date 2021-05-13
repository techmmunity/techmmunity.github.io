import { Link } from "web/components/Link";

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
	url: string;
	author: string;
}

export const Card: React.FC<Props> = ({ feedback, url, author }) => (
	<Container>
		<Content>
			<QuoteIcon />
			<Feedback>{feedback}</Feedback>
		</Content>
		<Content>
			<Line />
			<Author>
				<Link href={url} blank>
					{author}
				</Link>
			</Author>
		</Content>
	</Container>
);
