import React from "react";
import LogoJSX from "./jsx/logo";
import ButtonJSX from "./jsx/buttons";
import * as Elements from "./elements/index";

function Navbar() {
	return (
		<Elements.Container>
			<Elements.ContainerInner>
				<LogoJSX />
				<ButtonJSX />
			</Elements.ContainerInner>
			<Elements.Copyright>Copyright &copy; Zaahir Khan 2023</Elements.Copyright>
		</Elements.Container>
	);
}

export default Navbar;
