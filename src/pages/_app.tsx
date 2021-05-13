import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Router } from "next/router";

import React, { useEffect } from "react";

import { Head } from "../web/components/Head";

import { GTMPageView } from "utils/gtm";

import { LayoutWrapper } from "../web/layouts/wrapper";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const handleRouteChange = (url: string) => GTMPageView(url);

		Router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, []);

	return (
		<>
			<Head />
			<LayoutWrapper {...pageProps}>
				<Component {...pageProps} />
			</LayoutWrapper>
			<GlobalStyle />
		</>
	);
};

export default appWithTranslation(MyApp);
