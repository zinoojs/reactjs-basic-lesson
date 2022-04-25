import React, { Component } from "react";

export default class Bind2 extends Component {
	constructor(params) {
		super();
		this.state = {
			name: "rose",
		};
		// this.changeName = this.changeName.bind(this);
	}
	changeName() {
		console.log(this);
		this.setState({
			name: "bobo",
		});
	}
	// changeName = () => {
	// 	console.log(this);
	// 	this.setState({
	// 		name: "bobo",
	// 	});
	// };
	render() {
		return (
			<div>
				<p> {this.state.name} </p>
				<button onClick={() => this.changeName()}>Change Name</button>
				{/* <button onClick={this.changeName.bind(this)}>
					Change Name
				</button> */}
			</div>
		);
	}
}
