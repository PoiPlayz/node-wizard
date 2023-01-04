import React from "react";
import CardComponent from "../../components/card";
import TitleComponent from "../../components/title";
import TextComponent from "../../components/text";
import ButtonsComponent from "../../components/buttons";
import { SiMicrosoftazure, SiAmazon } from "react-icons/si";

function ServiceQuery(props) {
	const { setService, pageIndex, index, nextPage } = props;

	const options = [
		{
			text: "Amazon Web Services",
			icon: <SiAmazon />,
			isDisabled: false,
			action: () => {
				setService("AWS");
				nextPage();
			},
		},
		{
			text: "Azure",
			icon: <SiMicrosoftazure />,
			isDisabled: true,
			action: () => {
				setService("Azure");
				nextPage();
			},
		},
	];
	return (
		<CardComponent centered={true} pageIndex={pageIndex} index={index}>
			<TitleComponent>Which Service Provider Are You Using?</TitleComponent>
			<TextComponent>We personally recommend AWS but also have support for Azure users. Choose which is more comfortable for you.</TextComponent>
			<ButtonsComponent options={options} themeColor={"white"} />
		</CardComponent>
	);
}

export default ServiceQuery;
