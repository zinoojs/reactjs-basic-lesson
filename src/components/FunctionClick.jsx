import React from "react";

const FunctionClick = () => {
	function clickHandler() {
		console.log("click is going on baby");
	}
	return (
		<div>
			<button onClick={clickHandler}>click</button>
		</div>
	);
};

export default FunctionClick;
