import React, { useState } from "react";
import Navbar from "./components/navbar";
import ServiceQuery from "./pages/queries/service";
import NodeTypeQuery from "./pages/queries/nodetype";
import SystemQuery from "./pages/queries/system";
import "./app.css";

function App() {
	const [pageIndex, setPageIndex] = useState(0);
	const [service, setService] = useState("");
	const [nodeType, setNodeType] = useState("");
	const [operatingSystem, setOperatingSystem] = useState("");
	const [ipAddress, setIpAddress] = useState("");
	const [publicAddress, setPublicAddress] = useState("");
	const [hasScrolled, setHasScrolled] = useState(false);
	const [hasEnteredInput, setHasEnteredInput] = useState(false);

	const nextPage = () => {
		setHasScrolled(false);
		setHasEnteredInput(false);
		setPageIndex(pageIndex + 1);
	};

	const previousPage = () => {
		setHasScrolled(true);
		setHasEnteredInput(true);
		setPageIndex(pageIndex - 1);
	};

	const tryRequire = (path) => {
		try {
			return require(`${path}`).default;
		} catch (err) {
			return undefined;
		}
	};

	const compilePath = `./pages/${service.toLowerCase()}/${nodeType.toLowerCase()}node/${operatingSystem.toLowerCase()}/compile.js`;
	const CompileComponent = tryRequire(compilePath);

	return (
		<>
			<Navbar />
			<NodeTypeQuery pageIndex={pageIndex} index={0} setNodeType={setNodeType} nextPage={nextPage} previousPage={previousPage} />
			<ServiceQuery pageIndex={pageIndex} index={1} setService={setService} nextPage={nextPage} previousPage={previousPage} />
			<SystemQuery pageIndex={pageIndex} index={2} setOperatingSystem={setOperatingSystem} nextPage={nextPage} previousPage={previousPage} />
			{CompileComponent !== undefined && (
				<CompileComponent
					pageIndex={pageIndex}
					nextPage={nextPage}
					previousPage={previousPage}
					setIpAddress={setIpAddress}
					ipAddress={ipAddress}
					setPublicAddress={setPublicAddress}
					publicAddress={publicAddress}
					setHasScrolled={setHasScrolled}
					hasScrolled={hasScrolled}
					setHasEnteredInput={setHasEnteredInput}
					hasEnteredInput={hasEnteredInput}
				/>
			)}
		</>
	);
}

export default App;
