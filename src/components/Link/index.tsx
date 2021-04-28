import LinkNext from "next/link";

interface Props {
	href: string;
	blank?: boolean;
}

export const Link: React.FC<Props> = ({ href, children, blank }) => (
	<LinkNext href={href}>
		<a target={blank ? "_blank" : "_self"} rel="noopener noreferrer">
			{children}
		</a>
	</LinkNext>
);
