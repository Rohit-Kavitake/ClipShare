import React from "react";
import { Input } from "antd";
import "./JoinBoard.scss";
// import {Redirect} from 'react-router-dom'

import { useHistory } from "react-router-dom";

const { Search } = Input;

function JoinBoard() {
    const history = useHistory();
	const onSearch = (value) => {
		history.push(`/${value}`)
	};

	return (
		<div className="join-board">
			<Search
				className="join-input"
				placeholder="Enter BoardShare Link"
				allowClear
				enterButton="Join"
				size="large"
				onSearch={onSearch}
			/>
		</div>
	);
}

export default JoinBoard;
