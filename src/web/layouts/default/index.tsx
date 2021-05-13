import { Footer } from "web/components/Footer";
import { PageContainer } from "web/components/PageContainer";

export const DefaultLayout: React.FC = ({ children }) => (
	<PageContainer>
		{children}
		<Footer />
	</PageContainer>
);
