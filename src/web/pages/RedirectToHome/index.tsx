import { i18n } from "../../../../next-i18next.config";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { FcWithLayout } from "types/interfaces/layout";

export const RedirectToHomePage: FcWithLayout = () => {
	const { push } = useRouter();

	useEffect(() => {
		const { language } = window.navigator;

		switch (true) {
			case language.startsWith("pt-"):
				push("/pt-BR");

				return;
			case language.startsWith("en-"):
				push("/en-US");

				return;
			default:
				push(`/${i18n.defaultLocale}`);

				return;
		}
	}, [push]);

	return <></>;
};
