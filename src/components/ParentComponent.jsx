import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureCom from "./PureComp";
import RegComponent from "./RegComponent";

export default class ParentComponent extends Component {
	constructor(params) {
		super();
		this.state = {
			name: "zinoo",
		};
	}
	componentDidMount = () => {
		setInterval(() => {
			this.setState({
				name: "kyawzinoo",
			});
		}, 5000);
	};

	render() {
		console.log("************parent component**************");
		return (
			<div>
				<MemoComp name={this.state.name} />
				{/* <RegComponent name={this.state.name} />
				<PureCom name={this.state.name} /> */}
			</div>
		);
	}
}
