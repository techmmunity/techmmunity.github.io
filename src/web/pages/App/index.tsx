import { AppProps } from "next/app";
import { Router } from "next/router";

import React, { useEffect } from "react";

import { Head } from "./components/Head";

import { GTMPageView } from "utils/gtm";

import { LayoutWrapper } from "web/layouts/wrapper";

import GlobalStyle, { Main } from "./styles";

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
				<Main>
					<Component {...pageProps} />
				</Main>
			</LayoutWrapper>
			<GlobalStyle />
		</>
	);
};
