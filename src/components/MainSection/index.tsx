import { useTranslation } from "next-i18next";

import { RedirectLinks } from "./components/RedirectLinks";
import { Link } from "components/Link";

import { SocialNetworksUrls } from "config/social-networks-urls";

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

	const scrollToMadeOfSection = () =>
		document.querySelector("#made-of")?.scrollIntoView({
			behavior: "smooth",
		});

	return (
		<Container id="main">
			<Description>
				<Title>{t("mainSection.description.title")}</Title>
				<Subtitle>{t("mainSection.description.subtitle")}</Subtitle>
			</Description>
			<Links>
				<AboutUs onClick={scrollToMadeOfSection}>
					{t("mainSection.links.aboutUs")}
				</AboutUs>
				<Community>
					<Link href={SocialNetworksUrls.discord} blank>
						{t("mainSection.links.community")}
					</Link>
				</Community>
			</Links>
			<RedirectLinks />
		</Container>
	);
};
