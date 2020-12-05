import React from "react";
import List from "./List";

function Card({ data, onClearbtn }) {
	return (
		<div className="card">
			<List users={data} onClear={onClearbtn} />
		</div>
	);
}

export default Card;
