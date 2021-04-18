import { useState } from "react";

import { Cards } from "./components/Cards";
import { Description } from "./components/Description";
import { Inputs } from "./components/Inputs";

import { Container } from "./styles";

export const MadeForEveryoneSection: React.FC = () => {
	const [currentCard, setCurrentCard] = useState(1);

	return (
		<Container>
			<Description />
			<Inputs setCurrentCard={setCurrentCard} />
			<Cards currentCard={currentCard} />
		</Container>
	);
};
