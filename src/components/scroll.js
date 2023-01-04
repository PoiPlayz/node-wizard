import React from "react";
import styled from "styled-components";
import { BiDownArrowAlt } from "react-icons/bi";

const ScrollElement = styled.div`
	position: sticky;
	bottom: -10px;
	left: 50%;
	margin-top: 30px;
	transform: ${(props) => (props.show ? "translateX(-50%) scale(0.7)" : "translateX(-50%) scale(1)")};
	opacity: ${(props) => (props.show ? "1" : "0")};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 10px;
	background: var(--white);
	box-shadow: var(--white-box-shadow);
	border: 2px solid var(--charcoal);
	border-radius: 10px;
	transition: all 0.2s ease;
	animation: animation 1s ease-in 0s infinite;

	@keyframes animation {
		0% {
			transform: translateX(-50%) translateY(0px);
		}

		50% {
			transform: translateX(-50%) translateY(5px);
		}

		100% {
			transform: translateX(-50%) translateY(0px);
		}
	}
`;

const ScrollIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: var(--charcoal);
`;

const ScrollText = styled.p`
	font-size: 18px;
	color: var(--charcoal);
	margin-left: 10px;
`;

function ScrollComponent({ hasScrolled, hasEnteredInput }) {
	return (
		<ScrollElement show={hasEnteredInput !== true ? true : hasScrolled !== true}>
			<ScrollIcon>
				<BiDownArrowAlt />
			</ScrollIcon>
			{hasEnteredInput !== true && <ScrollText>Enter Details</ScrollText>}
		</ScrollElement>
	);
}

export default ScrollComponent;
