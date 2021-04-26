import { FeedbackSection } from "components/FeedbackSection";
import { Line } from "components/Line";
import { MadeOfSection } from "components/MadeOfSection";
import { MainSection } from "components/MainSection";
import { TechmmunityDivisionsSection } from "components/TechmmunityDivisionsSection";
import { TechmmunityProductsSection } from "components/TechmmunityProductsSection";

import { FCWithLayout } from "types/interfaces/FCWithLayout";

import { Container } from "styles/pages/Home";

const Home: FCWithLayout = () => (
	<Container>
		<MainSection />
		<Line />
		<MadeOfSection />
		<Line />
		<TechmmunityDivisionsSection />
		<Line />
		<TechmmunityProductsSection />
		<Line />
		<FeedbackSection />
	</Container>
);

export default Home;
