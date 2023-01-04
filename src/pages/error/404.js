import React from "react";
import CardComponent from "../../components/card";
import TitleComponent from "../../components/title";
import TextComponent from "../../components/text";
import ButtonsComponent from "../../components/buttons";
import { BiLeftArrowAlt } from "react-icons/bi";

function Error404(props) {
	const { previousPage, pageIndex, index } = props;

	const options = [
		{
			text: "Take Me Back",
			icon: <BiLeftArrowAlt />,
			action: () => previousPage(),
		},
	];
	return (
		<CardComponent centered={true} pageIndex={pageIndex} index={index}>
			<TitleComponent>Sorry, we haven't completed this page yet!</TitleComponent>
			<TextComponent>Don't worry, we are currently working on this page and will be done soon! Sit Tight!</TextComponent>
			<ButtonsComponent options={options} themeColor={"white"} />
		</CardComponent>
	);
}

export default Error404;
