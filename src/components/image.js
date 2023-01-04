import React from "react";
import styled from "styled-components";

const ImgElement = styled.img`
	width: 100%;
	border-radius: 30px;
	margin-top: 30px;
	box-shadow: var(--charcoal-box-shadow);
`;

function ImgComponent({ src }) {
	return <ImgElement src={src} />;
}

export default ImgComponent;
