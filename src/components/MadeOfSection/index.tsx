import { AiFillLike } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { TiGroup } from "react-icons/ti";

import { Card } from "./components/Card";

import {
	Container,
	Description,
	Title,
	Subtitle,
	Strong,
	Cards,
} from "./styles";

export const MadeOfSection: React.FC = () => (
	<Container>
		<Description>
			<Title>With space for everyone hungry for knowledge</Title>
			<Subtitle>
				What is <Strong>techmmunity</Strong> made of?
			</Subtitle>
		</Description>
		<Cards>
			<Card
				Icon={FiCpu}
				title="Technology"
				description="We talk about every technology sector, like programming, graphic design, sound design, robotics, entrepreneurship, human resources, and and many other topics."
			/>
			<Card
				Icon={TiGroup}
				title="Community"
				description="We are friendly and without prejudice, we help everyone, regardless of the question! After all, we've all been beginners once, right?"
			/>
			<Card
				Icon={AiFillLike}
				title="Diversity"
				description="Our community is made up of all types of people, who provide a different point of view on a problem, always leading us to different discussions and new learnings."
			/>
		</Cards>
	</Container>
);
