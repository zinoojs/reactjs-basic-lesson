import Name from "./components/Name";
import { useState } from "react";
import Message from "./components/Message";
import Count from "./components/Count";
import FunctionClick from "./components/FunctionClick";
import FunctionClass from "./components/FunctionClass";
import Bindthis from "./components/Bindthis";
import Bind2 from "./components/Bind2";
import ParentComponents from "./components/ParentComponents";
import UserLogin from "./components/UserLogin";
import NameList from "./components/NameList";
import WebList from "./components/WebList";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComponent from "./components/ParentComponent";
import RefComp from "./components/RefComp";

function App() {
	const [data, setData] = useState({ name: "bobo", age: 20 });

	return (
		<div className='App'>
			<RefComp />
			{/* <ParentComponent /> */}
			{/* <Table /> */}
			{/* <FragmentDemo /> */}
			{/* conditional rendering */}
			{/* <WebList />
			<UserLogin />
			<NameList /> */}
			{/* <Name name={data.name} age={data.age} />
			<Message />
			<Count />
			<FunctionClick />
			<FunctionClass />
			<Bind2 />
			<ParentComponents />
			<Bindthis /> */}
		</div>
	);
}

export default App;
