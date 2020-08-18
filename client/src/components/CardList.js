import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ data }) => {
	return (
		<div className="card-list1">
			{data.map((info) => (
				<Card info={info} />
			))}
		</div>
	);
};

export default CardList;
