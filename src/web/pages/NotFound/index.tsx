import { ErrorSection } from "./components/ErrorSection";

import { FCWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const NotFoundPage: FCWithLayout = () => (
	<Container>
		<ErrorSection />
	</Container>
);
