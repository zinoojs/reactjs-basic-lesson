import React, { Component } from "react";

export default class ClickCounter extends Component {
	render() {
		// console.log(this.props);
		const { count, increseCount } = this.props;
		return (
			<div>
				<button onClick={increseCount}>{count}</button>
			</div>
		);
	}
}
