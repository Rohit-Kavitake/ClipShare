import React from "react";
import { Link } from "react-router-dom";
import { Button, Popconfirm, message } from "antd";
import db from "../../firebase";

function BoardTile({ data, getData }) {
	const collection = "Board"; /// to be changed when Oauth Functionality added
	const docTitle = data.get("title");
	const docId = data.id;

	const DeleteBoard = async (Id) => {
		// eslint-disable-next-line
		const deleteData = await db.collection(collection).doc(Id).delete();
		getData();
		message.success("Clip Deleted");
	};

	const cancel = () => {
		message.error("Operation Canceled");
	};

	return (
		<div className="board-tile">
			<h1>{docTitle}</h1>
			<Link to={`/${collection}/${docId}`}>
				<Button type="primary">Go to this Board</Button>
			</Link>
			<Popconfirm
				title="Are you sure to delete this Clip?"
				onConfirm={() => DeleteBoard(docId)}
				onCancel={cancel}
				okText="Yes"
				cancelText="No"
			>
				<Button type="primary" danger>
					Delete Board
				</Button>
			</Popconfirm>
		</div>
	);
}

export default BoardTile;
