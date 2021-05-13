import { i18n } from "../../../next-i18next.config";
import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Home } from "web/pages/Home";

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
