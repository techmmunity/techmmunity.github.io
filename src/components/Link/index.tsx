import LinkNext from "next/link";

interface Props {
	href: string;
	blank?: boolean;
	disabled?: boolean;
	className?: string;
}

export const Link: React.FC<Props> = ({
	href,
	children,
	blank,
	disabled,
	className,
}) => (
	<LinkNext href={href}>
		<a
			target={blank ? "_blank" : "_self"}
			style={{ pointerEvents: disabled ? "none" : "auto" }}
			rel="noopener noreferrer"
			className={className}
		>
			{children}
		</a>
	</LinkNext>
);
