import { Card } from "./components/Card";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

export const FeedbackSection: React.FC = () => {
	const feedbacks = [
		{
			id: 1,
			feedback:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, qui. Omnis illum assumenda voluptates corrupti fuga iste? Totam repellat exercitationem sint sit iusto laboriosam, asperiores ad temporibus, at voluptates suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, qui. Omnis illum assumenda voluptates corrupti fuga iste? Totam repellat exercitationem sint sit iusto laboriosam, asperiores ad temporibus, at voluptates suscipit.",
			author: "People 1",
		},
		{
			id: 2,
			feedback:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, qui. Omnis illum assumenda voluptates corrupti fuga iste? Totam repellat exercitationem sint sit iusto laboriosam, asperiores ad temporibus, at voluptates suscipit.",
			author: "People 2",
		},
		{
			id: 3,
			feedback:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, qui. Omnis illum assumenda voluptates corrupti fuga iste? Totam repellat exercitationem sint sit iusto laboriosam, asperiores ad temporibus, at voluptates suscipit.",
			author: "People 3",
		},
	];

	return (
		<Container>
			<Description>
				<Title>Don&apos;t take our word for it</Title>
				<Subtitle>See what our members have to talk about us.</Subtitle>
			</Description>
			<Cards>
				{feedbacks.map(({ id, feedback, author }) => (
					<Card key={id} feedback={feedback} author={author} />
				))}
			</Cards>
		</Container>
	);
};
