import React from "react";
import Person from "./Person";

const NameList = () => {
	const users = [
		{ name: "bobo", gender: "male", age: 20 },
		{ name: "nono", gender: "female", age: 22 },
		{ name: "rose", gender: "female", age: 25 },
		{ name: "smith", gender: "male", age: 23 },
		{ name: "khakha", gender: "female", age: 21 },
	];
	let userinfo = users.map((res, id) => {
		return <Person person={res} key={id}></Person>;
	});
	return (
		<div>
			{userinfo}
			{/* {users.map((user, index) => {
				return <h2 key={index}>{user}</h2>;
			})} */}
		</div>
	);
};

export default NameList;
