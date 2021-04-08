import { MainSection } from "components/MainSection";
import { MoreAboutSection } from "components/MoreAboutSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<MainSection />
		<MoreAboutSection />
	</Container>
);

export default Home;
