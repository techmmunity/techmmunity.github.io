import { useTranslation } from "next-i18next";

import { RedirectButtons } from "./components/RedirectButtons";
import { Link } from "components/Link";
import { LinkWithLanguage } from "components/LinkWithLanguage";

import { SocialNetworksLinks } from "config/social-networks-links";

import {
	Container,
	Description,
	Title,
	Subtitle,
	Links,
	AboutUs,
	Community,
} from "./styles";

export const MainSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Container id="main">
			<RedirectButtons />
			<Description>
				<Title>{t("mainSection.description.title")}</Title>
				<Subtitle>{t("mainSection.description.subtitle")}</Subtitle>
			</Description>
			<Links>
				<AboutUs>
					<LinkWithLanguage href="#about-us">
						{t("mainSection.links.aboutUs")}
					</LinkWithLanguage>
				</AboutUs>
				<Community>
					<Link href={SocialNetworksLinks.DISCORD} blank>
						{t("mainSection.links.community")}
					</Link>
				</Community>
			</Links>
		</Container>
	);
};
