import { i18n } from "../../../next-i18next.config";
import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { FeedbackSection } from "../../web/components/FeedbackSection";
import { Line } from "../../web/components/Line";
import { MadeOfSection } from "../../web/components/MadeOfSection";
import { MainSection } from "../../web/components/MainSection";
import { TechmmunityDivisionsSection } from "../../web/components/TechmmunityDivisionsSection";
import { TechmmunityProductsSection } from "../../web/components/TechmmunityProductsSection";

import { FCWithLayout } from "types/interfaces/layout";

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

export const getStaticPaths: GetStaticPaths = async () => {
	const languages = i18n.locales;

	return {
		paths: languages.map((lang: string) => ({
			params: {
				language: lang,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const defaultLanguage = i18n.defaultLocale;
	const language = (params?.language || defaultLanguage) as string;

	return {
		props: {
			...(await serverSideTranslations(language)),
		},
	};
};
