import { FeedbackSection } from "components/FeedbackSection";
import { Line } from "components/Line";
import { MadeForEveryoneSection } from "components/MadeForEveryoneSection";
import { MadeOfSection } from "components/MadeOfSection";
import { MainSection } from "components/MainSection";
import { TechnologiesSection } from "components/TechnologiesSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<MainSection />
		<Line />
		<MadeOfSection />
		<Line />
		<TechnologiesSection />
		<Line />
		<MadeForEveryoneSection />
		<Line />
		<FeedbackSection />
		<Line />
	</Container>
);

export default Home;
