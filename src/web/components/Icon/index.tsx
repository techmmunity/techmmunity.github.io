import { ICONS, IconsType } from "./assets/icons";

interface Props {
	icon: IconsType;
}

export const Icon: React.FC<Props> = ({ icon }) => {
	const IconComponent = ICONS[icon];

	return <IconComponent />;
};
