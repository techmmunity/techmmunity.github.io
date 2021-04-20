import { Card } from "./components/Card";

import { EN } from "assets/languages/en-US";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

export const FeedbackSection: React.FC = () => (
	<Container>
		<Description>
			<Title>Don&apos;t take our word for it</Title>
			<Subtitle>See what our members have to talk about us.</Subtitle>
		</Description>
		<Cards>
			{EN.feedbacks.map(({ id, feedback, url, author }) => (
				<Card key={id} feedback={feedback} url={url} author={author} />
			))}
		</Cards>
	</Container>
);
