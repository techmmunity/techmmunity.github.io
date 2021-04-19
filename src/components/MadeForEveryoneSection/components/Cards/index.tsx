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
			title="Our graphic design division"
			description="Design is a very creative area, but it requires knowledge of some very specific concepts that are complicated to learn on your own. We created our design division especially for this so that both professionals and aspirants in the field can share their experiences and refine their skills even more."
			url="#"
			image="pexels-graphic.webp"
			alt="graphic"
		/>
		<Card
			isCurrent={currentCard === CardEnum.SONG}
			invertOrder={CardEnum.SONG % 2 === 0}
			title="Our sound design division"
			description="When talking about sound design, the first thing that comes to mind is dubbing, however, this universe is much broader and more diverse. Sound design is necessary for almost all projects and we created this division to encourage the growth of the area."
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
			title="Our management division"
			description="Management encompasses several areas of any company, be it finance, human resources, entrepreneurship, and several others. We created the management division both for people who want to do a better job for the company they are employed in and for people who want to start their own."
			url="#"
			image="pexels-management.webp"
			alt="management"
		/>
	</Container>
);
