import { useState } from "react";

import { Cards } from "./components/Cards";
import { Description } from "./components/Description";
import { Inputs } from "./components/Inputs";

import { Container } from "./styles";

const DEFAULT_CHECKED_CARD_ID = 1;

export const TechmmunityDivisionsSection: React.FC = () => {
	const [currentCard, setCurrentCard] = useState(DEFAULT_CHECKED_CARD_ID);

	return (
		<Container>
			<Description />
			<Inputs
				defaultCheckedCardId={DEFAULT_CHECKED_CARD_ID}
				setCurrentCard={setCurrentCard}
			/>
			<Cards currentCard={currentCard} />
		</Container>
	);
};
