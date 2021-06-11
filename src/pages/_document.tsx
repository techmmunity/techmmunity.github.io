import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import { GoogleTagManager } from "web/components/GoogleTagManager";
import { GoogleTagManagerNoScript } from "web/components/GoogleTagManagerNoScript";

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
					<meta name="description" content={head.metas.description} />
					<meta name="og:site_name" content="Techmmunity" />
					<meta name="og:url" content="https://techmmunity.github.io/" />
					<meta name="og:locale" content={head.metas.ogLocale} />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<GoogleTagManager />
				</Head>
				<body>
					<Main />
					<NextScript />
					<GoogleTagManagerNoScript />
				</body>
			</Html>
		);
	}
}
