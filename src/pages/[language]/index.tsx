import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticPaths: GetStaticPaths = async () => {
	const languages = ["en-US", "pt-BR"];

	return {
		paths: languages.map(lang => ({
			params: {
				language: lang,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const language = (params?.lang as string) || "en-US";

	return {
		props: {
			...(await serverSideTranslations(language)),
		},
	};
};
