import { AiFillLike } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsGearFill, BsArrowRight } from "react-icons/bs";
import {
	FaDiscord,
	FaTwitch,
	FaYoutube,
	FaFacebookF,
	FaTwitter,
	FaPencilAlt,
} from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { ImQuotesLeft } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import { RiVolumeUpFill, RiSuitcaseFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";

export const ICONS = {
	discord: FaDiscord,
	twitch: FaTwitch,
	youtube: FaYoutube,
	facebook: FaFacebookF,
	twitter: FaTwitter,
	instagram: GrInstagram,
	linkedin: IoLogoLinkedin,
	cpu: FiCpu,
	group: TiGroup,
	fillLike: AiFillLike,
	codeAlt: BiCodeAlt,
	gearFill: BsGearFill,
	pencilAlt: FaPencilAlt,
	volumeUpFill: RiVolumeUpFill,
	suitcaseFill: RiSuitcaseFill,
	quotesLeft: ImQuotesLeft,
	arrowRight: BsArrowRight,
};

export type IconsType = keyof typeof ICONS;
