import React from "react";
import CardComponent from "../../components/card";
import TitleComponent from "../../components/title";
import TextComponent from "../../components/text";
import ButtonsComponent from "../../components/buttons";

function NodeTypeQuery(props) {
	const { setNodeType, pageIndex, index, nextPage } = props;

	const options = [
		{
			text: "Full Node",
			icon: undefined,
			isDisabled: false,
			action: () => {
				setNodeType("Full");
				nextPage();
			},
		},
		{
			text: "Lite Node",
			isDisabled: true,
			icon: undefined,
			action: () => {
				setNodeType("Lite");
				nextPage();
			},
		},
	];
	return (
		<CardComponent centered={true} pageIndex={pageIndex} index={index}>
			<TitleComponent>Welcome to the Node Setup Wizard.</TitleComponent>
			<TextComponent>Please select which Node you want to set up.</TextComponent>
			<ButtonsComponent options={options} themeColor={"orange"} />
		</CardComponent>
	);
}

export default NodeTypeQuery;
