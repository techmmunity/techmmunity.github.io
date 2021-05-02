import { useTranslation } from "next-i18next";

import { Link } from "components/Link";

import { Container, Title, Subtitle, RedirectToHomeButton } from "./styles";

export const ErrorSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Title>{t("errorSection.title")}</Title>
			<Subtitle>{t("errorSection.subtitle")}</Subtitle>
			<RedirectToHomeButton>
				<Link href="/" blank>
					{t("errorSection.redirectToHome")}
				</Link>
			</RedirectToHomeButton>
		</Container>
	);
};
