import { useTranslation } from "next-i18next";

import { Card } from "./components/Card";

import { Container, Description, Title, Subtitle, Cards } from "./styles";

export const FeedbackSection: React.FC = () => {
	const { t } = useTranslation();

	const feedbacksCards = [
		{
			id: 1,
			feedback: t("feedbackSection.feedbacks.alessandroRamos"),
			url: "https://github.com/alessandrohenriqueramos/",
			author: "Alessandro Ramos",
		},
		{
			id: 2,
			feedback: t("feedbackSection.feedbacks.diegoPinheiro"),
			url: "https://github.com/Ch1ron",
			author: "Diego Pinheiro",
		},
		{
			id: 3,
			feedback: t("feedbackSection.feedbacks.plactronic"),
			url: "https://www.youtube.com/channel/UCbPFdBr51_a_P_vM8z6Vu4w",
			author: "Plactronic",
		},
	];

	return (
		<Container>
			<Description>
				<Title>Don&apos;t take our word for it</Title>
				<Subtitle>See what our members have to say about us.</Subtitle>
			</Description>
			<Cards>
				{feedbacksCards.map(({ id, ...props }) => (
					<Card key={id} {...props} />
				))}
			</Cards>
		</Container>
	);
};
