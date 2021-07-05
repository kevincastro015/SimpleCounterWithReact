import React, { useState, useEffect } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);
	if (counter1 === 9) {
		setCounter1(0);
	}
	if (counter2 === 9) {
		setCounter2(0);
	}
	if (counter3 === 9) {
		setCounter3(0);
	}
	if (counter4 === 9) {
		setCounter4(0);
	}
	if (counter5 === 9) {
		setCounter5(0);
	}

	useEffect(() => {
		setInterval(() => {
			setCounter1(counter1 => counter1 + 1);
		}, 1000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter2(counter2 => counter2 + 1);
		}, 10000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter3(counter3 => counter3 + 1);
		}, 100000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter4(counter4 => counter4 + 1);
		}, 1000000);
	}, []);
	useEffect(() => {
		setInterval(() => {
			setCounter5(counter5 => counter5 + 1);
		}, 10000000);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>And counting!</h1>
			<p>{counter1}</p>
			<p>{counter2}</p>
			<p>{counter3}</p>
			<p>{counter4}</p>
			<p>{counter5}</p>
			{/* {<button onClick={() => setCounter(counter + 1)}>Increment</button>} */}
		</div>
	);
}
