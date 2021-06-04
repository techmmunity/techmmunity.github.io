import { LayoutsEnum } from "types/enums/layout";

import { DefaultLayout } from "./default";
import { ErrorLayout } from "./error";

const getLayout = (layout?: LayoutsEnum): React.FC => {
	switch (layout) {
		case LayoutsEnum.ERROR:
			return ErrorLayout;
		case LayoutsEnum.NONE:
			return ({ children }) => <>{children}</>;
		case LayoutsEnum.DEFAULT:
		default:
			return DefaultLayout;
	}
};

export const LayoutWrapper: React.FC = ({ children }) => {
	const Layout = getLayout((children as any).type.layout);

	return (
		<Layout>
			<main>{children}</main>
		</Layout>
	);
};
