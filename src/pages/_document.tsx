import { i18n } from "../../next-i18next.config";
import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

const getHtmlLang = (locale: string) => {
	switch (locale) {
		case "pt-BR":
			return "pt";
		case "en-US":
		default:
			return "en";
	}
};

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
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

	render() {
		const { __NEXT_DATA__ } = this.props;
		const { query } = __NEXT_DATA__;
		const defaultLanguage = i18n.defaultLocale;
		const htmlLang = getHtmlLang((query.language || defaultLanguage) as string);

		return (
			<Html lang={htmlLang}>
				<Head>
					<meta
						name="description"
						content="Techmmunity is a Tech Community, with focus to teach people how to code, design, make sound design, do robotic engineering stuff, and do company management."
					/>
					<meta name="og:site_name" content="Techmmunity" />
					<meta name="og:url" content="https://techmmunity.github.io/" />
					<meta name="og:locale" content={htmlLang} />
					<link rel="cannonical" href="https://techmmunity.github.io/" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
