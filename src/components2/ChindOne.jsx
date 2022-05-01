import React, { Component } from "react";
import Hoc from "./Hoc";

class ChindOne extends Component {
	render() {
		const { value, name, btn } = this.props;
		return (
			<div>
				<h1>{value}</h1>
				<h2>{this.props.hero}</h2>
				<p>my name is {name} </p>
				<button onClick={btn}>add</button>
			</div>
		);
	}
}
export default Hoc(ChindOne, 10);
