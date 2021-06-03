import { CookiesAlertModal } from "web/components/CookiesAlertModal";

import { Container, Content } from "./styles";

export const PageContainer: React.FC = ({ children }) => (
	<>
		<CookiesAlertModal />
		<Container>
			<Content>{children}</Content>
		</Container>
	</>
);
