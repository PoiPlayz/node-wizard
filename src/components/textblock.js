import React from "react";
import styled from "styled-components";

const TextBlockElement = styled.p`
	background: var(--charcoal);
	padding: 8px 18px;
	border-radius: 10px;
	color: var(--white);
	margin-top: 30px;
`;

function TextBlockComponent({ children }) {
	return <TextBlockElement>{children}</TextBlockElement>;
}

export default TextBlockComponent;
