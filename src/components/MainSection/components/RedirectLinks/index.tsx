import { useRouter } from "next/router";

import { Link } from "components/Link";

import { Container, RedirectLink } from "./styles";

export const RedirectLinks: React.FC = () => {
	const { query } = useRouter();

	return (
		<Container>
			<RedirectLink position="left" active={query.language === "en-US"}>
				<Link href="/en-US" disabled={query.language === "en-US"}>
					English
				</Link>
			</RedirectLink>
			<RedirectLink position="right" active={query.language === "pt-BR"}>
				<Link href="/pt-BR" disabled={query.language === "pt-BR"}>
					Português
				</Link>
			</RedirectLink>
		</Container>
	);
};
