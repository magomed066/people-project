import React from "react";

function ListItem({ info }) {
	return info.map((item) => {
		const { id, name, age, photo } = item;

		return (
			<li className="card-item card-list__item" key={`${name}_${id}`}>
				<div className="card-list__logo">
					<img src={photo} alt="user" className="card-item__logo" />
				</div>
				<div className="card-list__info">
					<div className="card-list__name">{name}</div>
					<span className="card-item__age">age {age}</span>
				</div>
			</li>
		);
	});
}

export default ListItem;
