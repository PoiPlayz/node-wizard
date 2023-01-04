import React from "react";
import CardComponent from "./card";
import TitleComponent from "./title";
import PageButtons from "./pagebuttons";
import ScrollComponent from "./scroll";

function Step(props) {
	const { title, index, pageIndex, nextPage, previousPage, items, isFinal, hasScrolled, setHasScrolled, hasEnteredInput, setHasEnteredInput } = props;

	const tryRequire = (path, isDefault) => {
		try {
			return isDefault ? require(`${path}`).default : require(`${path}`);
		} catch (err) {
			return undefined;
		}
	};

	return (
		<CardComponent pageIndex={pageIndex} index={index} setHasScrolled={setHasScrolled}>
			<TitleComponent>
				<span>STEP {index - 2}</span>
				{title}
			</TitleComponent>
			{items !== undefined &&
				items.map((item, index) => {
					const Component = tryRequire("./" + item.type.toLowerCase() + ".js", true);
					return (
						Component !== undefined && (
							<Component
								key={index}
								src={item.src}
								placeholder={item.placeholder}
								action={(value) => item.action(value)}
								hasEnteredInput={hasEnteredInput}
								setHasEnteredInput={setHasEnteredInput}>
								{item.content}
							</Component>
						)
					);
				})}
			<ScrollComponent hasScrolled={hasScrolled} hasEnteredInput={hasEnteredInput} />
			<PageButtons nextPage={nextPage} previousPage={previousPage} isFinal={isFinal} hasScrolled={hasScrolled} hasEnteredInput={hasEnteredInput} />
		</CardComponent>
	);
}

export default Step;
