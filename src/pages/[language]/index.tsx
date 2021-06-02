import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomePage } from "web/pages/Home";

import { i18n } from "config/i18n";

export default HomePage;

// eslint-disable-next-line require-await
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
	const language = (params?.language ?? i18n.defaultLocale) as string;

	return {
		props: {
			...(await serverSideTranslations(language, ["home", "components"])),
		},
	};
};
