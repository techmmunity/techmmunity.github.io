import { FeedbackSection } from "components/FeedbackSection";
import { Line } from "components/Line";
import { MainSection } from "components/MainSection";
import { TechnologiesSection } from "components/TechnologiesSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<MainSection />
		<Line />
		<TechnologiesSection />
		<Line />
		<FeedbackSection />
		<Line />
	</Container>
);

export default Home;
