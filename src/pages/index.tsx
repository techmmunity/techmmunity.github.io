import { FeedbackSection } from "components/FeedbackSection";
import { Line } from "components/Line";
import { MadeForEveryoneSection } from "components/MadeForEveryoneSection";
import { MadeOfSection } from "components/MadeOfSection";
import { MainSection } from "components/MainSection";

import { FCWithLayout } from "types/interfaces/FCWithLayout";

import { Container } from "styles/pages/Home";

const Home: FCWithLayout = () => (
	<Container>
		<MainSection />
		<Line />
		<MadeOfSection />
		<Line />
		<MadeForEveryoneSection />
		<Line />
		<FeedbackSection />
		<Line />
	</Container>
);

export default Home;
