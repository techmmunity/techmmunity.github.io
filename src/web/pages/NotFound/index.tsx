import { HeadTitle } from "web/components/HeadTitle";

import { ErrorSection } from "./components/ErrorSection";

import { FCWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const NotFoundPage: FCWithLayout = () => (
	<>
		<HeadTitle title="Not found" />
		<Container>
			<ErrorSection />
		</Container>
	</>
);
