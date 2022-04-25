import React from "react";

const Person = ({ person }) => {
	console.log(person);
	return (
		<div>
			<h3>
				my name is {person.name} age is {person.age} and gender is
				{person.gender}
			</h3>
		</div>
	);
};

export default Person;
