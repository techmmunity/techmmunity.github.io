import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { RedirectToHomePage } from "web/pages/RedirectToHome";

import { LayoutsEnum } from "types/enums/layout";

RedirectToHomePage.layout = LayoutsEnum.NONE;

export default RedirectToHomePage;

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			...(await serverSideTranslations(i18n.defaultLocale)),
		},
	};
};
