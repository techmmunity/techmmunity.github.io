import { useRouter } from "next/router";

import { Link } from "components/Link";

import { Container, RedirectButton } from "./styles";

export const RedirectButtons: React.FC = () => {
	const { query } = useRouter();

	return (
		<Container>
			<RedirectButton position="left" active={query.language === "en-US"}>
				<Link href="/en-US" disabled={query.language === "en-US"}>
					English
				</Link>
			</RedirectButton>
			<RedirectButton position="right" active={query.language === "pt-BR"}>
				<Link href="/pt-BR" disabled={query.language === "pt-BR"}>
					Português
				</Link>
			</RedirectButton>
		</Container>
	);
};
