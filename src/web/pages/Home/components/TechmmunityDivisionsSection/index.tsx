import { useState } from "react";

import { Buttons } from "./components/Buttons";
import { Cards } from "./components/Cards";
import { Description } from "./components/Description";

import { Container } from "./styles";

const DEFAULT_CARD = 1;

export const TechmmunityDivisionsSection: React.FC = () => {
	const [currentCard, setCurrentCard] = useState(DEFAULT_CARD);

	return (
		<Container id="divisions">
			<Description />
			<Buttons currentCard={currentCard} setCurrentCard={setCurrentCard} />
			<Cards currentCard={currentCard} />
		</Container>
	);
};
