import React from "react";
import Subject from "./Subject";

const WebList = () => {
	let allWebs = [
		{ name: "html", year: 1960, inventor: "Cora Steele" },
		{ name: "css", year: 1970, inventor: "Christine Henry" },
		{ name: "js", year: 1990, inventor: "Winifred Stevens" },
		{ name: "java", year: 1970, inventor: "Francis Holmes" },
		{ name: "python", year: 1980, inventor: "Vernon Abbott" },
	];
	let wedhistory = allWebs.map((res, id) => {
		return <Subject sub={res} key={id} />;
	});
	return <div>{wedhistory}</div>;
};

export default WebList;
