import React from "react";
import Columns from "./Columns";

const Table = () => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<Columns />
					</tr>
				</thead>
				<tbody>
					<tr>
						<Columns />
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
