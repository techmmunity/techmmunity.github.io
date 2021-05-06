import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { LayoutsEnum } from "types/enums/LayoutsEnum";
import { FCWithLayout } from "types/interfaces/FCWithLayout";

const Home: FCWithLayout = () => {
	const { push } = useRouter();

	useEffect(() => {
		const { language } = window.navigator;

		switch (true) {
			case language.startsWith("pt-"):
				push("/pt-BR");
				return;
			case language.startsWith("en-"):
			default:
				const defaultLanguage = i18n.defaultLocale;

				push(`/${defaultLanguage}`);
				return;
		}
	}, [push]);

	return <></>;
};

Home.layout = LayoutsEnum.NONE;

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const defaultLanguage = i18n.defaultLocale;

	return {
		props: {
			...(await serverSideTranslations(defaultLanguage)),
		},
	};
};
