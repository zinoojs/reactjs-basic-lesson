import React from "react";

const ChildCompo = ({ myHandler }) => {
	return (
		<div>
			<button onClick={() => myHandler("Rose")}>Child</button>
		</div>
	);
};

export default ChildCompo;
