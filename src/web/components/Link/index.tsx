import LinkNext from "next/link";

interface Props {
	href: string;
	blank?: boolean;
	disabled?: boolean;
}

export const Link: React.FC<Props> = ({ href, children, blank, disabled }) => (
	<LinkNext href={href}>
		<a
			target={blank ? "_blank" : "_self"}
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			rel="noopener noreferrer"
		>
			{children}
		</a>
	</LinkNext>
);
