import { HeadTitle } from "web/components/HeadTitle";

import { ErrorSection } from "./components/ErrorSection";

import { FcWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const NotFoundPage: FcWithLayout = () => (
	<>
		<HeadTitle title="Not found" />
		<Container>
			<ErrorSection />
		</Container>
	</>
);
