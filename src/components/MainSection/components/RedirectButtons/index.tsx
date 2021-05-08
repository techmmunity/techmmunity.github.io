import { useRouter } from "next/router";

import { Link } from "components/Link";

import { Container, ChangeButton } from "./styles";

export const RedirectButtons: React.FC = () => {
	const { query } = useRouter();

	return (
		<Container>
			<ChangeButton value="1" active={query.language === "en-US"}>
				<Link href="/en-US" disabled={query.language === "en-US"}>
					English
				</Link>
			</ChangeButton>
			<ChangeButton value="2" active={query.language === "pt-BR"}>
				<Link href="/pt-BR" disabled={query.language === "pt-BR"}>
					Português
				</Link>
			</ChangeButton>
		</Container>
	);
};
