import { useState } from "react";
import Card from "./components/Card";
import data from "./data";

function App() {
	const [state, setstate] = useState(data);

	function clearAllList(e) {
		setstate([]);
	}

	return <Card data={state} onClearbtn={clearAllList} />;
}

export default App;