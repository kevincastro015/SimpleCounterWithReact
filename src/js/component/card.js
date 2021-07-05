import React from "react";
import PropTypes from "prop-types";

const Card = ({number}) => {
    return (
        <div className="card" style={{width: "18rem", background:"black" }}>
            <div className="card-body">
                <h5 className="card-title" style={{color:"white"}}>
                    {number ? number : 0 }
                </h5>
            </div>
        </div>
    );
};

Card.PropTypes = {
    number: PropTypes.number
};

export default Card;


