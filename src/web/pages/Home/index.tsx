import { Line } from "web/components/Line";

import { FeedbackSection } from "./components/FeedbackSection";
import { MadeOfSection } from "./components/MadeOfSection";
import { MainSection } from "./components/MainSection";
import { TechmmunityDivisionsSection } from "./components/TechmmunityDivisionsSection";
import { TechmmunityProductsSection } from "./components/TechmmunityProductsSection";

import { FCWithLayout } from "types/interfaces/layout";

export const HomePage: FCWithLayout = () => (
	<>
		<MainSection />
		<Line />
		<MadeOfSection />
		<Line />
		<TechmmunityDivisionsSection />
		<Line />
		<TechmmunityProductsSection />
		<Line />
		<FeedbackSection />
	</>
);
