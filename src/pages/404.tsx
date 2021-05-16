import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NotFoundPage } from "web/pages/NotFound";

import { LayoutsEnum } from "types/enums/layout";

NotFoundPage.layout = LayoutsEnum.ERROR;

export default NotFoundPage;

export const getStaticProps: GetStaticProps = async () => {
	const defaultLanguage = i18n.defaultLocale;

	return {
		props: {
			...(await serverSideTranslations(defaultLanguage)),
		},
	};
};
