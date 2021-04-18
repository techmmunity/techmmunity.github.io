import { FeedbackSection } from "components/FeedbackSection";
import { Line } from "components/Line";
import { MadeOfSection } from "components/MadeOfSection";
import { MainSection } from "components/MainSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<MainSection />
		<Line />
		<MadeOfSection />
		<Line />
		<FeedbackSection />
		<Line />
	</Container>
);

export default Home;
