import { Container } from "./styles";

import { Card } from "../Card";

interface Props {
	currentCard: number;
}

enum CardEnum {
	DEV = 1,
	GRAPHIC = 2,
	SONG = 3,
	ROBOTIC = 4,
	MANAGER = 5,
}

export const Cards: React.FC<Props> = ({ currentCard }) => (
	<Container>
		<Card
			isCurrent={currentCard === CardEnum.DEV}
			invertOrder={CardEnum.DEV % 2 === 0}
			title="Optimize and scale, easy to start"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			url="#"
			image="pexels-programming.webp"
			alt="programming"
		/>
		<Card
			isCurrent={currentCard === CardEnum.GRAPHIC}
			invertOrder={CardEnum.GRAPHIC % 2 === 0}
			title="Optimize and scale, easy to start"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			url="#"
			image="pexels-graphic.webp"
			alt="graphic"
		/>
		<Card
			isCurrent={currentCard === CardEnum.SONG}
			invertOrder={CardEnum.SONG % 2 === 0}
			title="Optimize and scale, easy to start"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			url="#"
			image="pexels-sound.webp"
			alt="sound"
		/>
		<Card
			isCurrent={currentCard === CardEnum.ROBOTIC}
			invertOrder={CardEnum.ROBOTIC % 2 === 0}
			title="Our robotic engineering division"
			description="Robotic engineering is a constantly expanding sector, both for industries and the entertainment of the general population. With our technological advancement, the demand for professionals capable of working in this area should grow more and more, so we created our technology sector to prepare professionals for this future demand."
			url="#"
			image="pexels-robotic.webp"
			alt="robotic"
		/>
		<Card
			isCurrent={currentCard === CardEnum.MANAGER}
			invertOrder={CardEnum.MANAGER % 2 === 0}
			title="Optimize and scale, easy to start"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			url="#"
			image="pexels-management.webp"
			alt="management"
		/>
	</Container>
);