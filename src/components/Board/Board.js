import { React, useState, useEffect, useCallback } from "react";
import db from "../../firebase";
import { Button, message } from "antd";
import { useParams, useHistory } from "react-router-dom";

const Board = () => {
	const collection = "Board"; /// to be changed when Oauth Functionality added
	const [Title, setTitle] = useState("");
	const [Data, setData] = useState("");
	const [Link, setLink] = useState("");
	const { name, id } = useParams();
	const history = useHistory();
	const getData = useCallback(async () => {
		console.log("collection : " + name);
		const ClipData = await db.collection(collection).doc(id).get();
		// console.log("collection: ", collection.data());
		if (ClipData.data() === undefined) alert("Invalid Document ID");
		else {
			setTitle(ClipData.data().title);
			setData(ClipData.data().data);
		}
	}, [id]);

	// const DeleteCip = async (docId) => {
	// 	const deleteClip = await db.collection('Board').doc(docId).delete()
	// 	console.log("Document Deleted");
	// }

	const shareBoard = () => {
		// console.log(Link);
		navigator.clipboard.writeText(Link);
		message.success("Link Copied to Clipboard");
	};

	useEffect(() => {
		getData();
		setLink(`${collection}/${id}`);
	}, [getData, id]);

	return (
		<div>
			<Button type="primary" onClick={() => history.push("/")}>
				Back to home
			</Button>
			<h1>{Title}</h1>
			<p>{Data}</p>
			<Button type="primary" size="middle" onClick={shareBoard}>
				Share Board
			</Button>
		</div>
	);
};

export default Board;
