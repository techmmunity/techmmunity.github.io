import { useState, useEffect, useCallback } from "react";

import { EN } from "assets/languages/en-US";

import { Container, Description, ConfirmationButton } from "./styles";

export const CookiesAlertModal: React.FC = () => {
	const [isCookiesAccepted, setIsCookiesAccepted] = useState(true);

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
			<Description>{EN.cookiesMessage.alert}</Description>
			<ConfirmationButton onClick={handleConfirmationCookies}>
				{EN.cookiesMessage.confirmation}
			</ConfirmationButton>
		</Container>
	);
};
