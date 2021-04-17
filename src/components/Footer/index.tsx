import Link from "next/link";

import {
	FaDiscord,
	FaTwitch,
	FaYoutube,
	FaFacebookF,
	FaTwitter,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";

import { SocialNetworksLinks } from "config/social-networks-links";

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
				<Link href={SocialNetworksLinks.DISCORD}>
					<a target="_blank" rel="noopener noreferrer">
						<FaDiscord />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.TWITCH}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitch />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.YOUTUBE}>
					<a target="_blank" rel="noopener noreferrer">
						<FaYoutube />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.FACEBOOK}>
					<a target="_blank" rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.TWITTER}>
					<a target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.LINKEDIN}>
					<a target="_blank" rel="noopener noreferrer">
						<IoLogoLinkedin />
					</a>
				</Link>
			</SocialNetwork>
			<SocialNetwork>
				<Link href={SocialNetworksLinks.INSTAGRAM}>
					<a target="_blank" rel="noopener noreferrer">
						<GrInstagram />
					</a>
				</Link>
			</SocialNetwork>
		</SocialNetworks>
	</Container>
);
