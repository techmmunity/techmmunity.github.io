import { GetStaticProps } from "next";

const Home = () => {
	return;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "/en-US",
			permanent: false,
		},
	};
};
