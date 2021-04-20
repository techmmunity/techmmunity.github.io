import { Footer } from "components/Footer";
import { PageContainer } from "components/PageContainer";

export const DefaultLayout: React.FC = ({ children }) => (
	<PageContainer>
		{children}
		<Footer />
	</PageContainer>
);
