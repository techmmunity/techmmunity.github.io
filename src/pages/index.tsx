import { useEffect } from "react";

import { LayoutsEnum } from "types/enums/LayoutsEnum";
import { FCWithLayout } from "types/interfaces/FCWithLayout";

const Home: FCWithLayout = () => {
	useEffect(() => {
		const language = window.navigator.language;

		switch (true) {
			case language.startsWith("pt-"):
				window.location.href = "/pt-BR";
				return;
			case language.startsWith("en-"):
			default:
				window.location.href = "/en-US";
				return;
		}
	}, []);

	return <></>;
};

Home.layout = LayoutsEnum.NONE;

export default Home;
