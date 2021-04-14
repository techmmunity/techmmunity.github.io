import Link from "next/link";

import {
	Docker,
	NestJs,
	NextJs,
	NodeJs,
	ReactJs,
	TypeScript,
} from "assets/images/svg";

import {
	NEXT_LINK,
	NEST_LINK,
	NODEJS_LINK,
	REACT_LINK,
	TYPESCRIPT_LINK,
	DOCKER_LINK,
} from "config";

import { Container, Icons } from "./styles";

export const TechnologiesSection: React.FC = () => (
	<Container>
		<Icons>
			<Link href={NEXT_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="NextJS">
					<NextJs />
				</a>
			</Link>
			<Link href={NEST_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="NestJS">
					<NestJs />
				</a>
			</Link>
			<Link href={NODEJS_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="NodeJS">
					<NodeJs />
				</a>
			</Link>
			<Link href={REACT_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="ReactJS">
					<ReactJs />
				</a>
			</Link>
			<Link href={TYPESCRIPT_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="TypeScript">
					<TypeScript />
				</a>
			</Link>
			<Link href={DOCKER_LINK}>
				<a target="_blank" rel="noopener noreferrer" title="Docker">
					<Docker />
				</a>
			</Link>
		</Icons>
	</Container>
);
