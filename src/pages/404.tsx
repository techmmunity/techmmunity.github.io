import { ErrorSection } from "components/ErrorSection";

import { LayoutsEnum } from "types/enums/LayoutsEnum";
import { FCWithLayout } from "types/interfaces/FCWithLayout";

import { Container } from "styles/pages/Error";

const NotFoundPage: FCWithLayout = () => (
	<Container>
		<ErrorSection />
	</Container>
);

NotFoundPage.layout = LayoutsEnum.ERROR;

export default NotFoundPage;
