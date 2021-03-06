import React, { useState, useEffect } from "react";
import { Card } from "./card";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);
	if (counter1 === 10) {
		setCounter1(0);
	}
	if (counter2 === 10) {
		setCounter2(0);
	}
	if (counter3 === 10) {
		setCounter3(0);
	}
	if (counter4 === 10) {
		setCounter4(0);
	}
	if (counter5 === 10) {
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
		<div className="text-center mt-5 row m-3">
			<i
				className="far fa-clock col text-white p-4"
				style={{ width: "18rem", background: "black" }}></i>
			<Card number={counter5} />
			<Card number={counter4} />
			<Card number={counter3} />
			<Card number={counter2} />
			<Card number={counter1} />
			{/* {<button onClick={() => setCounter(counter + 1)}>Increment</button>} */}
		</div>
	);
}
