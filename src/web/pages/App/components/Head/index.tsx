import { useTranslation } from "next-i18next";
import HeadNext from "next/head";

export const Head = () => {
	const { t } = useTranslation();

	return (
		<>
			<HeadNext>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{t("head.title")}</title>
			</HeadNext>
		</>
	);
};
