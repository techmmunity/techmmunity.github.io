import { FeedbackSection } from "components/FeedbackSection";
import { MainSection } from "components/MainSection";
import { MoreAboutSection } from "components/MoreAboutSection";
import { TechnologiesSection } from "components/TechnologiesSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<MainSection />
		<TechnologiesSection />
		<MoreAboutSection />
		<FeedbackSection />
	</Container>
);

export default Home;
