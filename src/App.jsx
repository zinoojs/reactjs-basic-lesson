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
import Stylesheet from "./components/Stylesheet";
import Inlinecss from "./components/Inlinecss";
import style from "./style.module.css";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComponent from "./components/ParentComponent";
import RefComp from "./components/RefComp";
import FwInput from "./components/FwInput";
import PortalDemo from "./components2/PortalDemo";
import HeroName from "./components2/HeroName";
import ClickCount from "./components2/ClickCount";
import Hoc from "./components2/Hoc";
import ChindOne from "./components2/ChindOne";
import PropsLesson from "./components2/PropsLesson";

function App() {
	// const [data, setData] = useState({ name: "bobo", age: 20 });

	return (
		<div className='App'>
			<PropsLesson
				name={(isLogin) => (isLogin ? "kyawzinoo" : "Guest")}
			/>
			{/* <ChindOne hero='superman' /> */}
			{/* <Hoc /> */}
			{/* <h1 className={style.center}> This is Home</h1>
			<Form /> */}
			{/* <Stylesheet primary={true} />
			<Inlinecss /> */}
			{/* <ClickCount /> */}
			{/* <HeroName hero='batman' />
			<HeroName hero='superman' />
			<HeroName hero='joker' /> */}
			{/* <PortalDemo /> */}
			{/* <FwInput /> */}
			{/* <RefComp /> */}
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
