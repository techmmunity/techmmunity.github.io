import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import enUSSystem from "assets/translations/en-US/system.json";
import ptBRSystem from "assets/translations/pt-BR/system.json";

import { i18n } from "config/i18n";

import { GetSystemInformationResult } from "types/interfaces/system";

const getSystemInformation = (locale: string): GetSystemInformationResult => {
	switch (locale) {
		case "pt-BR":
			return ptBRSystem as GetSystemInformationResult;
		case "en-US":
		default:
			return enUSSystem as GetSystemInformationResult;
	}
};

export default class MyDocument extends Document {
	public static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	public render() {
		const { language } = this.props.__NEXT_DATA__.query;
		const { html, head } = getSystemInformation(
			(language || i18n.defaultLocale) as string,
		);

		return (
			<Html lang={html.lang}>
				<Head>
					{/* Google Tag Manager */}
					<script
						dangerouslySetInnerHTML={{
							// eslint-disable-next-line @typescript-eslint/naming-convention
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
											new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
											j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
											'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
											})(window,document,'script','dataLayer','GTM-5NG5KTT');`,
						}}
					/>
					{/* End Google Tag Manager */}
					<meta name="description" content={head.metas.description} />
					<meta name="og:site_name" content="Techmmunity" />
					<meta name="og:url" content="https://techmmunity.github.io/" />
					<meta name="og:locale" content={head.metas.ogLocale} />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					{/* Google Tag Manager (noscript) */}
					<noscript
						dangerouslySetInnerHTML={{
							// eslint-disable-next-line @typescript-eslint/naming-convention
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NG5KTT"
											height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					/>
					{/* End Google Tag Manager (noscript) */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
