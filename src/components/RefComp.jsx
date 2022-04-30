import React, { Component } from "react";

export default class RefComp extends Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
	}
	componentDidMount = () => {
		this.fun();
		// this.inputRef.current.focus();
		console.log(this.inputRef);
	};
	fun = () => {
		return this.inputRef.current.focus();
	};
	clickHandler = () => {
		alert(this.inputRef.current.value);
		this.inputRef.current.value = "";
		this.fun();
	};
	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} />
				<button onClick={this.clickHandler}>click</button>
			</div>
		);
	}
}
