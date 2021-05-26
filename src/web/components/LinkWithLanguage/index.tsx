import Link from "next/link";
import { useRouter } from "next/router";

import { LinkProps } from "types/interfaces/link";

export const LinkWithLanguage: React.FC<LinkProps> = ({
	href,
	blank,
	disabled,
	children,
	...props
}) => {
	const { query } = useRouter();
	const { language } = query;

	return (
		<Link href={`/${language}${href}`}>
			<a
				style={{ pointerEvents: disabled ? "none" : "auto" }}
				target={blank ? "_blank" : "_self"}
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</a>
		</Link>
	);
};
