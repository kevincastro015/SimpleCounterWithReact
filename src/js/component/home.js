import React, { useState, useEffect } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	if (counter === 10) {
		setCounter(0);
	}
	if (counter2 === 10) {
		setCounter2(0);
    }
	useEffect(() => {
		setInterval(() => {
			setCounter(counter => counter + 1);
		}, 100);
    useEffect(() => {
		setInterval(() => {
			setCounter(counter2 => counter2 + 1);
		}, 10);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>And counting!</h1>
			<p>{counter}</p>
			<p>{counter2}</p>
			{/* {<button onClick={() => setCounter(counter + 1)}>Increment</button>} */}
		</div>
	);
}
)}
