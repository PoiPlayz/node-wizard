import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 40px;
	width: 100%;
	height: auto;
	gap: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	position: relative;
	flex: 1 1 0px;
	padding: 30px;
	font-size: 18px;
	border: 2px solid var(--${(props) => props.themeColor});
	background-color: transparent;
	border-radius: 20px;
	color: var(--${(props) => props.themeColor});
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: all 0.2s ease;

	${(props) =>
		props.isDisabled &&
		`
        &::after {
		content: "Under Maintenance";
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: calc(50% - 10px);
		transform: translateY(-50%) rotate(20deg);
		text-align: center;
		right: -50px;
		width: 300px;
		height: 30px;
		background: var(--${props.themeColor});
		color: var(--${props.themeColor === "white" ? "charcoal" : "white"});
	}
    `}

	& > .icon {
		font-size: 25px;
		color: var(--${(props) => props.themeColor});
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	${(props) =>
		props.isDisabled === false &&
		`
        &:hover {
		    transform: scale(1.03);
		    background: var(--${props.themeColor});
		    color: var(--${props.themeColor === "white" ? "charcoal" : "white"});
		    box-shadow: var(--${props.themeColor}-box-shadow);

		    & > .icon {
			    color: var(--${props.themeColor === "white" ? "charcoal" : "white"});
		    }
	}
    `}

	&:active {
		transform: scale(0.97);
	}
`;

function ButtonsComponent({ options, themeColor }) {
	return (
		<Container>
			{options.map((option, index) => {
				return (
					<Button
						key={index}
						isDisabled={option.isDisabled}
						themeColor={themeColor}
						disabled={option.isDisabled}
						onClick={(e) => {
							e.currentTarget.disabled = true;
							option.action(e);
						}}>
						{option.icon !== undefined && <span className="icon">{option.icon}</span>}
						{option.text}
					</Button>
				);
			})}
		</Container>
	);
}

export default ButtonsComponent;
