import { AppProps } from "next/app";

import { Footer } from "components/Footer";
import { Head } from "components/Head";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<Component {...pageProps} />
		<Footer />
		<GlobalStyle />
	</>
);

export default MyApp;
