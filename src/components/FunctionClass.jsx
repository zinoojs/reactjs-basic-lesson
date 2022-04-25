import React, { Component } from "react";

export default class FunctionClass extends Component {
	show() {
		console.log("hello this is show");
	}
	render() {
		return (
			<div>
				<button onClick={() => this.show()}>show</button>
			</div>
		);
	}
}
