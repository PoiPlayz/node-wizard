import React from "react";
import Step from "../../../../components/step";
import { DataJSON } from "./data.js";

function Compile(props) {
	const { pageIndex, nextPage, previousPage, setIpAddress, ipAddress, publicAddress, setPublicAddress, setHasScrolled, hasScrolled, hasEnteredInput, setHasEnteredInput } = props;
	const steps = DataJSON({ setIpAddress, ipAddress, setPublicAddress, publicAddress }).steps;
	return (
		<>
			{steps.map((step, index) => {
				const hasInput = step.items.some((item) => item.type.toString().toLowerCase() === "input");
				return (
					<Step
						key={index}
						setHasScrolled={setHasScrolled}
						hasScrolled={hasScrolled}
						hasEnteredInput={hasInput ? hasEnteredInput : true}
						setHasEnteredInput={setHasEnteredInput}
						isFinal={index === steps.length - 1}
						title={step.title}
						items={step.items}
						index={index + 3}
						pageIndex={pageIndex}
						nextPage={nextPage}
						previousPage={previousPage}
					/>
				);
			})}
		</>
	);
}

export default Compile;
