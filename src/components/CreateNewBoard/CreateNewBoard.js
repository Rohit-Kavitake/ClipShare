import React from "react";
import { Button } from "antd";
import db from "../../firebase";
import firebase from "firebase";

const CreateNewBoard = ({ className, getData }) => {
	const createBoard = async () => {
		const temp = prompt("Enter a Value");
		// eslint-disable-next-line
		const document = await db.collection("Board").add({
			title: temp,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		getData();
	};
	return (
		<Button onClick={createBoard} className={className}>
			Create New Board
		</Button>
	);
};

export default CreateNewBoard;
