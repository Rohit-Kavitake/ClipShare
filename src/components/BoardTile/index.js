import React from "react";
import { Link } from 'react-router-dom'
function BoardTile({ data }) {
	const docTitle = data.get("title");
	const docId = data.id;

	return (
		<div className="board-tile">
			<h1>{docTitle}</h1>
			<Link to={`/${docId}`}>
				<button>Go to this Doc</button>
			</Link>
		</div>
	);
}

export default BoardTile;
