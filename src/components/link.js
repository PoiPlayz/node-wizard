import React from "react";
import styled from "styled-components";

const LinkElement = styled.a`
	position: relative;
	width: auto;
	background: var(--charcoal);
	border-radius: 10px;
	padding: 15px 22px;
	color: var(--light-white);
	margin-top: 30px;
	cursor: pointer;
	text-decoration: underline;

	&:hover::before {
		opacity: 1;
		transform: scale(1);
	}

	&::before {
		content: "This will open in a new tab.";
		position: absolute;
		top: -30px;
		left: 0;
		color: var(--charcoal);
		background: var(--white);
		padding: 8px 12px;
		border-radius: 10px;
		z-index: 20;
		opacity: 0;
		transform: scale(0.9);
		transition: all 0.2s ease;
	}
`;

function LinkComponent({ children }) {
	return (
		<LinkElement href={children} target="_blank">
			{children}
		</LinkElement>
	);
}

export default LinkComponent;
