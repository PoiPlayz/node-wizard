import React from "react";
import LogoSrc from "../images/logo.svg";
import * as Elements from "../elements/logo";

function LogoJSX() {
	return (
		<Elements.Container>
			<Elements.Logo src={LogoSrc} />
		</Elements.Container>
	);
}

export default LogoJSX;
