import { HomeImageSection } from "components/HomeImageSection";
import { HomeMainSection } from "components/HomeMainSection";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<HomeMainSection />
		<HomeImageSection />
	</Container>
);

export default Home;
