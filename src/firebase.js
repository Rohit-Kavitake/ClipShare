import  firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDRJ5qPztYL1yaoqi_GSYI4f5IadURdoUU",
	authDomain: "clipshare-1.firebaseapp.com",
	projectId: "clipshare-1",
	storageBucket: "clipshare-1.appspot.com",
	messagingSenderId: "642381223805",
	appId: "1:642381223805:web:5937d1a6c0a9dac04ede14",
	measurementId: "G-9QBLSZKLLZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
