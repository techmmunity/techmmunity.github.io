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

import { SOCIAL_NETWORKS_URL } from "config/social-networks-urls";

import { Container, Copyright, SocialNetworks, SocialNetwork } from "./styles";

import { Line } from "../Line";
import { Link } from "../Link";

const socialNetworks = [
	{
		id: 1,
		name: "Discord",
		url: SOCIAL_NETWORKS_URL.discord,
		icon: FaDiscord,
	},
	{
		id: 2,
		name: "Twitch",
		url: SOCIAL_NETWORKS_URL.twitch,
		icon: FaTwitch,
	},
	{
		id: 3,
		name: "Youtube",
		url: SOCIAL_NETWORKS_URL.youtube,
		icon: FaYoutube,
	},
	{
		id: 4,
		name: "Facebook",
		url: SOCIAL_NETWORKS_URL.facebook,
		icon: FaFacebookF,
	},
	{
		id: 5,
		name: "Twitter",
		url: SOCIAL_NETWORKS_URL.twitter,
		icon: FaTwitter,
	},
	{
		id: 6,
		name: "Linkedin",
		url: SOCIAL_NETWORKS_URL.linkedin,
		icon: IoLogoLinkedin,
	},
	{
		id: 7,
		name: "Instagram",
		url: SOCIAL_NETWORKS_URL.instagram,
		icon: GrInstagram,
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
					{socialNetworks.map(({ id, name, url, icon: Icon }) => (
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
