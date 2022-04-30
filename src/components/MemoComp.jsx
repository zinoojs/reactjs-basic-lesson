import React from "react";

const MemoComp = ({ name }) => {
	console.log("memo is not effect rending effect");
	return <div>MemoComp {name} </div>;
};

export default React.memo(MemoComp);
