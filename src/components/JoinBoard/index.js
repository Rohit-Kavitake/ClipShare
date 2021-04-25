import React from "react";
import { Input } from "antd";
import "./JoinBoard.scss";
// import {Redirect} from 'react-router-dom'

// import { Link, useHistory } from "react-router-dom";

const { Search } = Input;

function JoinBoard() {
	const onSearch = (value) => {
		// <Link to={`/${value}`} />;
		// const history = useHistory();
		// history.push(`/${value}`)
		window.location.pathname = `/${value}`
		// <Redirect to={`${value}`} />
	};

	return (
		<div className="join-board">
			<Search
				className="join-input"
				placeholder="Enter ClipShare Link"
				allowClear
				enterButton="Join"
				size="large"
				onSearch={onSearch}
			/>
		</div>
	);
}

export default JoinBoard;
