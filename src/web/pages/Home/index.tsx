import { FeedbackSection } from "./components/FeedbackSection";
import { MadeOfSection } from "./components/MadeOfSection";
import { MainSection } from "./components/MainSection";
import { TechmmunityDivisionsSection } from "./components/TechmmunityDivisionsSection";
import { TechmmunityProductsSection } from "./components/TechmmunityProductsSection";
import { Line } from "web/components/Line";

import { FCWithLayout } from "types/interfaces/layout";

import { Container } from "./styles";

export const HomePage: FCWithLayout = () => (
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
