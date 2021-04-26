import { React, useState } from "react";
import { Button, Modal, Input } from "antd";
import db from "../../firebase";
import firebase from "firebase";

const CreateNewBoard = ({ className, getData }) => {
	const [Title, setTitle] = useState("");
	const [Data, setData] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);

	const { TextArea } = Input;

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const createBoard = async () => {
		// eslint-disable-next-line
		const document = await db.collection("Board").add({
			title: Title,
			data: Data,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setTimeout(() => {
			setIsModalVisible(false);
		}, 500);
		setData("")
		setTitle("")
		getData();
	};
	return (
		<div className="">
			<Button onClick={showModal} className={className}>
				Create New Board
			</Button>
			<Modal
				title="Create New Clip"
				visible={isModalVisible}
				onOk={createBoard}
				onCancel={handleCancel}
			>
				<Input
					placeholder="Enter Clip Title"
					value={Title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextArea
					placeholder="Enter Clip Data"
					value={Data}
					onChange={(e) => setData(e.target.value)}
				/>
			</Modal>
		</div>
	);
};

export default CreateNewBoard;
