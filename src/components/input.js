import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
	margin-top: 30px;
	border: 2px solid var(--white);
	color: var(--white);
	padding: 9px 18px;
	border-radius: 10px;
	width: 50%;
	background-color: transparent;

	&::placeholder {
		color: var(--light-white);
	}
`;

const Disclaimer = styled.p`
	color: rgba(255, 255, 255, 0.5);
	font-size: 15px;
	margin-top: 30px;
`;

function InputComponent({ action, placeholder, setHasEnteredInput }) {
	const handleChange = (e) => {
		action(e.currentTarget.value);
		if (e.currentTarget.value !== "") setHasEnteredInput(true);
		else setHasEnteredInput(false);
	};

	return (
		<div>
			<InputElement placeholder={placeholder} onChange={(e) => handleChange(e)} />
			<Disclaimer>NONE OF THIS INFORMATION IS STORED - It is so you don't need to input this value manually.</Disclaimer>
		</div>
	);
}

export default InputComponent;
