import { Card } from "./components/Card";

import { EN } from "assets/languages/en-US";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

const feedbacksCards = [
	{
		id: 1,
		feedback: EN.feedbackSection.feedbacks.alessandroRamos.feedback,
		url: "https://github.com/alessandrohenriqueramos/",
		author: "Alessandro Ramos",
	},
	{
		id: 2,
		feedback: EN.feedbackSection.feedbacks.diegoPinheiro.feedback,
		url: "https://github.com/Ch1ron",
		author: "Diego Pinheiro",
	},
	{
		id: 3,
		feedback: EN.feedbackSection.feedbacks.plactronic.feedback,
		url: "https://www.youtube.com/channel/UCbPFdBr51_a_P_vM8z6Vu4w",
		author: "Plactronic",
	},
];

export const FeedbackSection: React.FC = () => (
	<Container>
		<Description>
			<Title>Don&apos;t take our word for it</Title>
			<Subtitle>See what our members have to talk about us.</Subtitle>
		</Description>
		<Cards>
			{feedbacksCards.map(({ id, ...props }) => (
				<Card key={id} {...props} />
			))}
		</Cards>
	</Container>
);
