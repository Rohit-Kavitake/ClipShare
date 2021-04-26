import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import db from "../../firebase";

function BoardTile({ data ,getData }) {
	const docTitle = data.get("title");
	const docId = data.id;

	const DeleteClip = (Id) => {
		db.collection("Board").doc(Id).delete();
		getData()
	};

	return (
		<div className="board-tile">
			<h1>{docTitle}</h1>
			<Link to={`/${docId}`}>
				<Button type="primary">Go to this Clip</Button>
			</Link>
			<Button type="primary" onClick={() => DeleteClip(docId)} danger>
				Delete Clip
			</Button>
		</div>
	);
}

export default BoardTile;
