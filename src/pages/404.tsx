import { i18n } from "../../next-i18next.config";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ErrorSection } from "../web/components/ErrorSection";

import { LayoutsEnum } from "types/enums/layout";
import { FCWithLayout } from "types/interfaces/layout";

import { Container } from "styles/pages/Error";

const NotFoundPage: FCWithLayout = () => (
	<Container>
		<ErrorSection />
	</Container>
);

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
