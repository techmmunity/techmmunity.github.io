import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import { i18n } from "config/i18n";

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
		const { language } = this.props.__NEXT_DATA__.query;
		const htmlLang = getHtmlLang((language || i18n.defaultLocale) as string);

		return (
			<Html lang={htmlLang}>
				<Head>
					{/* Google Tag Manager */}
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
											new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
											j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
											'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
											})(window,document,'script','dataLayer','GTM-5NG5KTT');`,
						}}
					/>
					{/* End Google Tag Manager */}
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
					{/* Google Tag Manager (noscript) */}
					<noscript
						dangerouslySetInnerHTML={{
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
