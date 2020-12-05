import React from "react";
import ListItem from "./ListItem";

function List({ users, onClear }) {
	return (
		<ul className="card-list">
			<h3 className="count">There are {users.length} people</h3>
			<ListItem info={users} />
			<button className="clear-btn" onClick={() => onClear()}>
				Clear the list
			</button>
		</ul>
	);
}

export default List;
