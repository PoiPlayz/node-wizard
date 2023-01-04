import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";

const CommandElement = styled.div`
	position: relative;
	width: auto;
	background: var(--charcoal);
	border-radius: 10px;
	color: var(--white);
	margin-top: 30px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CommandText = styled.p`
	padding: 10px 0 10px 22px;
	max-width: 400px;
	word-wrap: break-word;
`;

const CommandIcon = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 20px;
	width: 50px;
	height: 100%;
	min-height: 50px;
	background: var(--orange);
	box-shadow: var(--orange-box-shadow);
	border-radius: 10px;
	transition: all 0.2s ease;

	&::after {
		content: "Copied!";
		display: block;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -130px;
		padding: 8px 22px;
		border-radius: 10rem;
		color: var(--white);
		background: var(--charcoal);
		transition: all 0.2s ease;
		opacity: ${(props) => (props["hascopied"] === "true" ? "1" : "0")};
	}

	&:hover {
		transform: scale(1.03);
	}

	&:active {
		transform: scale(0.97);
	}
`;

function CommandComponent({ children }) {
	const copyCode = (e) => {
		const parent = e.currentTarget.parentNode;
		const text = parent.getElementsByClassName("text")[0].innerText;
		navigator.clipboard.writeText(text);
	};

	return (
		<CommandElement>
			<CommandText className="text">{children}</CommandText>
			<CommandIcon onClick={(e) => copyCode(e)}>
				<BiCopy />
			</CommandIcon>
		</CommandElement>
	);
}

export default CommandComponent;
