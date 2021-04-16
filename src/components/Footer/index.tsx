import Link from "next/link";

import {
	FaDiscord,
	FaTwitch,
	FaYoutube,
	FaFacebookF,
	FaTwitter,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import {
	DISCORD_LINK,
	TWITCH_LINK,
	YOUTUBE_LINK,
	FACEBOOK_LINK,
	TWITTER_LINK,
	LINKEDIN_LINK,
} from "config";

import {
	Container,
	RightsReserved,
	Description,
	SocialNetworks,
	SocialNetwork,
} from "./styles";

export const Footer: React.FC = () => (
	<Container>
		<RightsReserved>
			<Description>&copy; 2020 Techmmunity. All rights reserved.</Description>
		</RightsReserved>
		<SocialNetworks>
			<SocialNetwork>
				<Link href={DISCORD_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaDiscord />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={TWITCH_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitch />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={YOUTUBE_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaYoutube />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={FACEBOOK_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={TWITTER_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={LINKEDIN_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<IoLogoLinkedin />
					</a>
				</Link>
			</SocialNetwork>
		</SocialNetworks>
	</Container>
);
