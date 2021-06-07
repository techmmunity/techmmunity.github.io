import { useTranslation } from "next-i18next";

import { Icon } from "web/components/Icon";
import { IconsType } from "web/components/Icon/assets/icons";

import { SOCIAL_NETWORKS_URL } from "config/social-networks-urls";

import { Container, Copyright, SocialNetworks, SocialNetwork } from "./styles";

import { Line } from "../Line";
import { Link } from "../Link";

interface ISocialNetwork {
	id: number;
	name: string;
	url: string;
	icon: IconsType;
}

const socialNetworks: Array<ISocialNetwork> = [
	{
		id: 1,
		name: "Discord",
		url: SOCIAL_NETWORKS_URL.discord,
		icon: "discord",
	},
	{
		id: 2,
		name: "Twitch",
		url: SOCIAL_NETWORKS_URL.twitch,
		icon: "twitch",
	},
	{
		id: 3,
		name: "Youtube",
		url: SOCIAL_NETWORKS_URL.youtube,
		icon: "youtube",
	},
	{
		id: 4,
		name: "Facebook",
		url: SOCIAL_NETWORKS_URL.facebook,
		icon: "facebook",
	},
	{
		id: 5,
		name: "Twitter",
		url: SOCIAL_NETWORKS_URL.twitter,
		icon: "twitter",
	},
	{
		id: 6,
		name: "Linkedin",
		url: SOCIAL_NETWORKS_URL.linkedin,
		icon: "linkedin",
	},
	{
		id: 7,
		name: "Instagram",
		url: SOCIAL_NETWORKS_URL.instagram,
		icon: "instagram",
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
					{socialNetworks.map(({ id, name, url, icon }) => (
						<SocialNetwork key={id}>
							<Link href={url} blank aria-label={name}>
								<Icon icon={icon} />
							</Link>
						</SocialNetwork>
					))}
				</SocialNetworks>
			</Container>
		</>
	);
};
