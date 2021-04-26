import { Layout } from "antd";
import React from "react";
import TopHeader from "./components/TopHeader";
import FooterBottom from "./components/Footer";
import BoardGrid from "./components/BoardGrid/BoardGrid";
import JoinBoard from "./components/JoinBoard";
import Board from "./components/Board/Board"
// import db from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const { Content } = Layout;

function App() {
	return (
		<Router>
			<Layout className="app">
				<TopHeader />
				<Switch>
					<Route path="/" exact>
						<Content>
							<JoinBoard />
							<BoardGrid />
						</Content>
          </Route>
          <Route path="/:name/:id" >
            <Board />
          </Route>
				</Switch>
				<FooterBottom />
			</Layout>
		</Router>
	);
}

export default App;
