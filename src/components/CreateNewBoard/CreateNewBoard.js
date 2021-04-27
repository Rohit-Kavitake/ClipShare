import { React, useState } from "react";
import { Button, Modal, Input, message } from "antd";
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
		let collection = "Board"; /// to be changed when Oauth Functionality added
		// eslint-disable-next-line
		const document = await db.collection(collection).add({
			title: Title,
			data: Data,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setTimeout(() => {
			setIsModalVisible(false);
			message.success(`Clip  ${Title} Created`)
		}, 500);
		setData("");
		setTitle("");
		getData();
	};
	return (
		<div className="">
			<Button onClick={showModal} className={className}>
				Create New Board
			</Button>
			<Modal
				title="Create New Board"
				visible={isModalVisible}
				onOk={createBoard}
				onCancel={handleCancel}
			>
				<Input
					placeholder="Enter Board Title"
					value={Title}
					addonBefore="Title :"
					size = "large"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextArea
					placeholder="Enter Board Data"
					value={Data}
					showCount={true}
					rows = {6}
					onChange={(e) => setData(e.target.value)}
				/>
			</Modal>
		</div>
	);
};

export default CreateNewBoard;
