import { AppProps } from "next/app";

import { Footer } from "components/Footer";
import { Head } from "components/Head";
import { PageContainer } from "components/PageContainer";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<PageContainer>
			<Component {...pageProps} />
			<Footer />
		</PageContainer>
		<GlobalStyle />
	</>
);

export default MyApp;
