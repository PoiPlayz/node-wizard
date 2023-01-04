import React from "react";
import styled from "styled-components";

const TextElement = styled.p`
	margin-top: 30px;
	color: var(--white);
`;

function TextComponent({ children }) {
	return <TextElement>{children}</TextElement>;
}

export default TextComponent;
