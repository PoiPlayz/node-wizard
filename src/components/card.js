import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.section`
	position: fixed;
	top: 100px;
	left: calc(50%);
	transform: ${(props) => (props.pageIndex === props.index ? "translateX(-50%)" : props.pageIndex > props.index ? "translateX(-150%)" : "translateX(150%)")};
	width: 100vw;
	height: calc(100vh - 120px);
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 40px;
	transition: all 0.8s ease;
`;

const ContainerInner = styled.section`
	position: relative;
	width: 100%;
	max-height: 100%;
	max-height: calc(100vh - 300px);
	overflow-y: scroll;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.centered ? "center" : "flex-start")};
	justify-content: flex-start;
	${(props) => props.centered && "text-align: center;"}
	border-radius: 30px;
	padding: 50px;
	background: var(--dark-charcoal);
	box-shadow: var(--charcoal-box-shadow);
`;

function CardComponent({ children, centered, pageIndex, index, setHasScrolled }) {
	const [pageIndexCopy, setPageIndexCopy] = useState(index - 1);
	const containerRef = useRef();

	useEffect(() => {
		setPageIndexCopy(pageIndex);

		const eventListener = containerRef.current.addEventListener("scroll", () => {
			const container = containerRef.current;
			if (container.scrollHeight - container.scrollTop - container.clientHeight < 70) setHasScrolled(true);
			else setHasScrolled(false);
		});

		return () => window.removeEventListener("scroll", eventListener);
	}, [pageIndex, setHasScrolled]);

	return (
		<Container pageIndex={pageIndexCopy} index={index}>
			<ContainerInner ref={containerRef} centered={centered}>
				{children}
			</ContainerInner>
		</Container>
	);
}

export default CardComponent;
