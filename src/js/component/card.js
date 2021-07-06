import React from "react";
import PropTypes from "prop-types";

export const Card = ({ number }) => {
	return (
		<div
			className="card col"
			style={{ width: "18rem", background: "black" }}>
			<div className="card-body">
				<h5 className="card-title" style={{ color: "white" }}>
					{number ? number : 0}
				</h5>
			</div>
		</div>
	);
};

Card.propTypes = {
	number: PropTypes.number
};
