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

import { SocialNetworksUrls } from "config/social-networks-urls";

import { Container, Copyright, SocialNetworks, SocialNetwork } from "./styles";

import { Line } from "../Line";
import { Link } from "../Link";

const socialNetworks = [
	{
		id: 1,
		name: "Discord",
		url: SocialNetworksUrls.discord,
		Icon: FaDiscord,
	},
	{
		id: 2,
		name: "Twitch",
		url: SocialNetworksUrls.twitch,
		Icon: FaTwitch,
	},
	{
		id: 3,
		name: "Youtube",
		url: SocialNetworksUrls.youtube,
		Icon: FaYoutube,
	},
	{
		id: 4,
		name: "Facebook",
		url: SocialNetworksUrls.facebook,
		Icon: FaFacebookF,
	},
	{
		id: 5,
		name: "Twitter",
		url: SocialNetworksUrls.twitter,
		Icon: FaTwitter,
	},
	{
		id: 6,
		name: "Linkedin",
		url: SocialNetworksUrls.linkedin,
		Icon: IoLogoLinkedin,
	},
	{
		id: 7,
		name: "Instagram",
		url: SocialNetworksUrls.instagram,
		Icon: GrInstagram,
	},
];

export const Footer: React.FC = () => {
	const { t } = useTranslation("components");

	return (
		<>
			<Line />
			<Container>
				<Copyright>{t("footer.copyright")}</Copyright>
				<SocialNetworks>
					{socialNetworks.map(({ id, name, url, Icon }) => (
						<SocialNetwork key={id}>
							<Link href={url} blank aria-label={name}>
								<Icon />
							</Link>
						</SocialNetwork>
					))}
				</SocialNetworks>
			</Container>
		</>
	);
};
