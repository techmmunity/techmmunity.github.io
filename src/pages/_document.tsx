import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

import { EN } from "assets/languages/en-US";

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
		return (
			<Html lang="en-us">
				<Head>
					<meta
						name="description"
						content="Techmmunity is a Tech Community, with a focus to teach people how to code, design, make sound design, do robotic engineering stuff, and do company management."
					/>
					<meta name="og:site_name" content="Techmmunity" />
					<meta name="og:url" content="https://techmmunity.github.io/" />
					<meta name="og:locale" content={EN.system.metas.ogLocale} />
					<link rel="cannonical" href="https://techmmunity.github.io/" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
