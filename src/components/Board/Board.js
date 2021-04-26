import { React, useState, useEffect, useCallback } from "react";
import db from "../../firebase";
import { useParams } from "react-router-dom";

const Board = () => {
	const [Title, setTitle] = useState("");
	const [Data, setData] = useState("");
	const { id } = useParams();

	const getData = useCallback(async () => {
		const collection = await db
			.collection("Board")
			.doc(id)
			.get();
		// console.log("collection: ", collection.data());
		setTitle(collection.data().title)
		setData(collection.data().data)
	},[id]
	);

	// const DeleteCip = async (docId) => {
	// 	const deleteClip = await db.collection('Board').doc(docId).delete()
	// 	console.log("Document Deleted");
	// }

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div>
			<h1>{Title}</h1>
			<p>{Data}</p>
		</div>
	);
};

export default Board;
