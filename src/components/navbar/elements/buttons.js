import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	right: 80px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	cursor: pointer;
	width: 200px;

	&:hover {
		& > .donate-button {
			width: 80px;
			padding-right: 0;
			padding-left: 0;
			padding-bottom: 9px;

			& > .text {
				opacity: 0;
			}

			& > .icon {
				top: 15px;
				right: 0px;
			}
		}
	}
`;

export const Button = styled.a`
	padding: 13px 90px 13px 30px;
	border: 2px solid transparent;
	border-radius: 10rem;
	background: var(--orange);
	position: relative;
	box-shadow: 0px 5px 20px 2px var(--orange-light);
	border: 2px solid var(--orange-dark);
	cursor: pointer;
	width: 190px;
	text-decoration: none;
	transition: all 0.5s ease;
`;

export const ButtonText = styled.p`
	font-size: 18px;
	color: var(--white);
	transition: opacity 0.1s ease;
`;

export const ButtonIcon = styled.div`
	position: relative;
	color: var(--white);
	font-size: 20px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 5px;
	height: calc(100% - 4px);
	width: 65px;
	border-radius: 10rem;
	background: var(--orange-dark);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
`;
