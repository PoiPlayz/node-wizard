import React from "react";
import * as Elements from "../elements/buttons.js";
import { FaDiscord } from "react-icons/fa";

function ButtonsJSX() {
	return (
		<Elements.Container>
			<Elements.Button className="donate-button" href="https://discord.gg/9UgS5j8XdW" target="_blank">
				<Elements.ButtonText className="text">Discord</Elements.ButtonText>
				<Elements.ButtonIcon className="icon">
					<FaDiscord />
				</Elements.ButtonIcon>
			</Elements.Button>
		</Elements.Container>
	);
}

export default ButtonsJSX;
