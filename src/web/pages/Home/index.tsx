import { useTranslation } from "react-i18next";

import { HeadTitle } from "web/components/HeadTitle";
import { Line } from "web/components/Line";

import { FeedbackSection } from "./components/FeedbackSection";
import { MadeOfSection } from "./components/MadeOfSection";
import { MainSection } from "./components/MainSection";
import { TechmmunityDivisionsSection } from "./components/TechmmunityDivisionsSection";
import { TechmmunityProductsSection } from "./components/TechmmunityProductsSection";

import { FcWithLayout } from "types/interfaces/layout";

export const HomePage: FcWithLayout = () => {
	const { t } = useTranslation("home");

	return (
		<>
			<HeadTitle title={t("head.title")} />
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
};
