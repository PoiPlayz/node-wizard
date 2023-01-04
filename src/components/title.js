import React from "react";
import styled from "styled-components";

const TitleElement = styled.h1`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 25px;
	font-weight: bolder;
	color: var(--white);
	z-index: 10;

	& > span {
		font-size: 15px;
		font-weight: bolder;
		z-index: 10;
		color: var(--charcoal);
		background: var(--white);
		padding: 8px 20px;
		border-radius: 20px;
		margin-right: 15px;
		box-shadow: var(--charcoal-box-shadow);
	}
`;

function TitleComponent({ children }) {
	return <TitleElement>{children}</TitleElement>;
}

export default TitleComponent;
