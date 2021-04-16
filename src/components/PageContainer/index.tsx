import { Container, Content } from "./styles";

export const PageContainer: React.FC = ({ children }) => (
	<Container>
		<Content>{children}</Content>
	</Container>
);