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
			title="Our programming division"
			description="With an increasingly demanding market, professionals who are thinking of working in the area need to know more and more technologies from different areas. With that in mind, we created our programming division, which helps both the beginners and the more experienced to better understand the most used technologies on the market."
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
			title="Optimize and scale, easy to start"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
