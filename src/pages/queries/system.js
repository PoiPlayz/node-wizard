import React from "react";
import CardComponent from "../../components/card";
import TitleComponent from "../../components/title";
import TextComponent from "../../components/text";
import ButtonsComponent from "../../components/buttons";
import { SiApple, SiWindows } from "react-icons/si";

function SystemQuery(props) {
	const { setOperatingSystem, pageIndex, index, nextPage } = props;

	const options = [
		{
			text: "MacOS",
			icon: <SiApple />,
			isDisabled: false,
			action: () => {
				setOperatingSystem("Mac");
				nextPage();
			},
		},
		{
			text: "Windows",
			icon: <SiWindows />,
			isDisabled: true,
			action: () => {
				setOperatingSystem("Windows");
				nextPage();
			},
		},
	];
	return (
		<CardComponent centered={true} pageIndex={pageIndex} index={index}>
			<TitleComponent>What Operating System Are You Running?</TitleComponent>
			<TextComponent>We are currently working on Windows support, however, we have availability for Mac users.</TextComponent>
			<ButtonsComponent options={options} themeColor={"white"} />
		</CardComponent>
	);
}

export default SystemQuery;
