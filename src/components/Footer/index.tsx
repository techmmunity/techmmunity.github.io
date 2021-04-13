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
} from "config/config";

import {
	Container,
	Content,
	RightsReserved,
	Description,
	SocialNetworks,
} from "./styles";

export const Footer: React.FC = () => (
	<Container>
		<Content>
			<RightsReserved>
				<Description>&copy; 2020 Techmmunity. All rights reserved.</Description>
			</RightsReserved>
			<SocialNetworks>
				<Link href={DISCORD_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaDiscord />
					</a>
				</Link>
				<Link href={TWITCH_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitch />
					</a>
				</Link>
				<Link href={YOUTUBE_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaYoutube />
					</a>
				</Link>
				<Link href={FACEBOOK_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</Link>
				<Link href={TWITTER_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</Link>
				<Link href={LINKEDIN_LINK}>
					<a target="_blank" rel="noopener noreferrer">
						<IoLogoLinkedin />
					</a>
				</Link>
			</SocialNetworks>
		</Content>
	</Container>
);
