import React, { Component } from "react";

export default class Count extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	// increment() {
	// 	this.setState((preVal) => ({
	// 		count: preVal.count + 1,
	// 	}));
	// }
	// increment() {
	// 	this.setState(
	// 		{
	// 			count: this.state.count + 1,
	// 		},
	// 		() => {
	// 			console.log("callback value ", this.state.count);
	// 		}
	// 	);
	// 	console.log(this.state.count);
	// }
	render() {
		return (
			<div>
				<p>Count Number is {this.state.count} </p>
				<button
					onClick={() =>
						this.setState((previousState) => ({
							count: previousState.count + 1,
						}))
					}
				>
					+
				</button>
				<button
					onClick={() =>
						this.setState((previousState) => ({
							count: previousState.count - 1,
						}))
					}
				>
					-
				</button>
			</div>
		);
	}
}
