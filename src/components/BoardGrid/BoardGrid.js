import React, { useState, useEffect, useCallback } from "react";
import BoardTile from "../BoardTile";
import { Row, Col } from "antd";
import "./BoardGrid.scss";
import CreateNewBoard from "../CreateNewBoard/CreateNewBoard";
import db from "../../firebase";

const BoardGrid = () => {
	const [boards, setBoards] = useState([]);

	const getData = useCallback(async () => {
		const collection = await db
			.collection("Board")
			.orderBy("createdAt", "desc")
			.get();
		// console.log("collection: ", collection.docs);
		setBoards(collection.docs);
	}, []);

	

	useEffect(() => {
		getData();
	}, [getData]);

	const renderTiles = () => {
		return boards.map((data, index) => {
			return (
				<Col key={index} xs={24} sm={12} lg={6} xl={4}>
					<BoardTile data={data} getData ={getData} />
				</Col>
			);
		});
	};

	return (
		<div className="board-grid">
			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} lg={6} xl={4}>
					<CreateNewBoard className="create board-tile" getData={getData} />
				</Col>
				{renderTiles()}
			</Row>
		</div>
	);
};

export default BoardGrid;
