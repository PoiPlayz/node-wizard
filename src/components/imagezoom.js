import React from "react";
import styled from "styled-components";

const ImageZoomElement = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 1);
	z-index: 999;
`;

const ImageZoomImg = styled.img`
	width: 100%;
	height: 600px;
	max-width: 600px;
	z-index: 200;
`;

function ImageZoomComponent({ src }) {
	return (
		<ImageZoomElement>
			<ImageZoomImg src={src} />
		</ImageZoomElement>
	);
}

export default ImageZoomComponent;
