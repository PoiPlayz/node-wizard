import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: sticky;
	bottom: -20px;
	margin-top: 20px;
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;

const Button = styled.button`
	position: relative;
	padding: 15px 30px;
	font-size: 18px;
	border: 2px solid var(--orange);
	background-color: var(--orange);
	border-radius: 10rem;
	color: var(--white);
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	border: 2px solid var(--orange-dark);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: var(--orange-box-shadow);
	transition: all 0.2s ease;

	${(props) =>
		props.disabled &&
		`
        transform: scale(0.8);
        opacity: 0;
    `}

	& > .icon {
		font-size: 25px;
		color: var(--orange);
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		transform: scale(1.03);
	}

	&:active {
		transform: scale(0.97);
	}
`;

function PageButtons(props) {
	const { nextPage, previousPage, isFinal, hasScrolled, hasEnteredInput } = props;

	return (
		<Container>
			<Button onClick={() => previousPage()}>Previous Step</Button>
			{isFinal !== true && (
				<Button onClick={() => nextPage()} disabled={hasScrolled !== true || hasEnteredInput !== true}>
					Next Step
				</Button>
			)}
		</Container>
	);
}

export default PageButtons;
