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

import { SocialNetworksLinks } from "config/social-networks-links";

import {
	Container,
	RightsReserved,
	Description,
	SocialNetworks,
	SocialNetwork,
} from "./styles";

const socialNetworks = [
	{
		id: 1,
		url: SocialNetworksLinks.DISCORD,
		Icon: FaDiscord,
	},
	{
		id: 2,
		url: SocialNetworksLinks.TWITCH,
		Icon: FaTwitch,
	},
	{
		id: 3,
		url: SocialNetworksLinks.YOUTUBE,
		Icon: FaYoutube,
	},
	{
		id: 4,
		url: SocialNetworksLinks.FACEBOOK,
		Icon: FaFacebookF,
	},
	{
		id: 5,
		url: SocialNetworksLinks.TWITTER,
		Icon: FaTwitter,
	},
	{
		id: 6,
		url: SocialNetworksLinks.LINKEDIN,
		Icon: IoLogoLinkedin,
	},
	{
		id: 7,
		url: SocialNetworksLinks.INSTAGRAM,
		Icon: GrInstagram,
	},
];

export const Footer: React.FC = () => (
	<>
		<Line />
		<Container>
			<RightsReserved>
				<Description>&copy; 2020 Techmmunity. All rights reserved.</Description>
			</RightsReserved>
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
