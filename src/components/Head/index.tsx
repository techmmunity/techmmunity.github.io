import { GoogleFonts } from "next-google-fonts";
import { useTranslation } from "next-i18next";
import HeadNext from "next/head";

export const Head = () => {
	const { t } = useTranslation();

	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
			<HeadNext>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{t("head.title")}</title>
			</HeadNext>
		</>
	);
};
