import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
`;

export const ContainerInner = styled.section`
	width: 100%;
	height: 100%;
	max-width: 1500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Copyright = styled.p`
	font-size: 14px;
	color: rgba(255, 255, 255, 0.5);
	position: fixed;
	bottom: 30px;
	left: 50%;
	transform: translate(-50%);
`;
