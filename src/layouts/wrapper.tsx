import { LayoutsEnum } from "types/enums/LayoutsEnum";

import { DefaultLayout } from "./default";
import { ErrorLayout } from "./error";

const getLayout = (layout?: LayoutsEnum) => {
	switch (layout) {
		case "ERROR":
			return ErrorLayout;
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: React.FC = props => {
	const Layout = getLayout((props.children as any).type.layout);

	return <Layout {...props}>{props.children}</Layout>;
};
