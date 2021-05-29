import { useTranslation } from "next-i18next";

import { Link } from "web/components/Link";
import { LinkWithLanguage } from "web/components/LinkWithLanguage";

import { RedirectLinks } from "./components/RedirectLinks";

import { SocialNetworksUrls } from "config/social-networks-urls";

import { Container, Description, Title, Subtitle, Links } from "./styles";

export const MainSection: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container id="main">
			<Description>
				<Title>{t("mainSection.description.title")}</Title>
				<Subtitle>{t("mainSection.description.subtitle")}</Subtitle>
			</Description>
			<Links>
				<LinkWithLanguage href="#made-of">
					{t("mainSection.links.aboutUs")}
				</LinkWithLanguage>
				<Link href={SocialNetworksUrls.discord} blank>
					{t("mainSection.links.community")}
				</Link>
			</Links>
			<RedirectLinks />
		</Container>
	);
};
