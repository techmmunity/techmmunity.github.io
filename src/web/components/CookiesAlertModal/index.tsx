import { useTranslation } from "next-i18next";

import { useState, useEffect, useCallback } from "react";

import { Container, Description, ConfirmationButton } from "./styles";

export const CookiesAlertModal: React.FC = () => {
	const [isCookiesAccepted, setIsCookiesAccepted] = useState(true);
	const { t } = useTranslation("components");

	useEffect(() => {
		const cookiesAccepted = localStorage.getItem("cookies-accepted");

		setIsCookiesAccepted(Boolean(cookiesAccepted));
	}, []);

	const handleConfirmationCookies = useCallback(() => {
		localStorage.setItem("cookies-accepted", "true");
		setIsCookiesAccepted(true);
	}, []);

	return (
		<Container isCookiesAccepted={isCookiesAccepted}>
			<Description>{t("cookiesAlertModal.alert")}</Description>
			<ConfirmationButton onClick={handleConfirmationCookies}>
				{t("cookiesAlertModal.confirmation")}
			</ConfirmationButton>
		</Container>
	);
};
