import { useTranslation } from "next-i18next";

import {
	FaDiscord,
	FaTwitch,
	FaYoutube,
	FaFacebookF,
	FaTwitter,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";

import { Line } from "components/Line";
import { Link } from "components/Link";

import { SocialNetworksUrls } from "config/social-networks-urls";

import {
	Container,
	CopyrightContainer,
	Copyright,
	SocialNetworks,
	SocialNetwork,
} from "./styles";

const socialNetworks = [
	{
		id: 1,
		url: SocialNetworksUrls.discord,
		Icon: FaDiscord,
	},
	{
		id: 2,
		url: SocialNetworksUrls.twitch,
		Icon: FaTwitch,
	},
	{
		id: 3,
		url: SocialNetworksUrls.youtube,
		Icon: FaYoutube,
	},
	{
		id: 4,
		url: SocialNetworksUrls.facebook,
		Icon: FaFacebookF,
	},
	{
		id: 5,
		url: SocialNetworksUrls.twitter,
		Icon: FaTwitter,
	},
	{
		id: 6,
		url: SocialNetworksUrls.linkedin,
		Icon: IoLogoLinkedin,
	},
	{
		id: 7,
		url: SocialNetworksUrls.instagram,
		Icon: GrInstagram,
	},
];

export const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Line />
			<Container>
				<CopyrightContainer>
					<Copyright>{t("footer.copyright")}</Copyright>
				</CopyrightContainer>
				<SocialNetworks>
					{socialNetworks.map(({ id, url, Icon }) => (
						<SocialNetwork key={id}>
							<Link href={url} blank>
								<Icon />
							</Link>
						</SocialNetwork>
					))}
				</SocialNetworks>
			</Container>
		</>
	);
};
