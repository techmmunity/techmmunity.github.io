import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NotFoundPage } from "web/pages/NotFound";

import { i18n } from "config/i18n";

import { LayoutsEnum } from "types/enums/layout";

NotFoundPage.layout = LayoutsEnum.ERROR;

export default NotFoundPage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			...(await serverSideTranslations(i18n.defaultLocale)),
		},
	};
};
