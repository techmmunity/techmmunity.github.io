import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	href: string;
	blank?: boolean;
}

export const LinkWithLanguage: React.FC<Props> = ({
	href,
	children,
	blank,
}) => {
	const { query } = useRouter();
	const { language } = query;

	return (
		<Link href={`/${language}${href}`}>
			<a target={blank ? "_blank" : "_self"} rel="noopener noreferrer">
				{children}
			</a>
		</Link>
	);
};
