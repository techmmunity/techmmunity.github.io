import { useTranslation } from "next-i18next";

import { memo } from "react";

import { Container, Title, Subtitle } from "./styles";

export const Description: React.FC = memo(() => {
	const { t } = useTranslation();

	return(
		<Container>
			<Title>{t("techmmunityDivisionsSection.description.title")}</Title>
			<Subtitle>
				{t("techmmunityDivisionsSection.description.subtitle")}
			</Subtitle>
		</Container>
	);
});
