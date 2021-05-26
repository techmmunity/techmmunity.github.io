import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type LinkAttributes = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

type LinkOmitted = Omit<LinkAttributes, "target" | "rel">;

export interface LinkProps extends LinkOmitted {
	href: string;
	blank?: boolean;
	disabled?: boolean;
}
