const signIn = () => {
	// User Google SignIn
	let provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
	// User Google Signout
	firebase.auth.signOut();
};

//Resize user Profile to default google profile size
function addSizeToGoogleProfilePic(url) {
	if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
		return url + "?sz=150";
	}
	return url;
}

//get User Profile Image
const userProfile = () => {
	profilePicUrl =
		firebase.auth().currentUser.photoURL ||
		"https://img.icons8.com/office/16/000000/test-account.png";
	return addSizeToGoogleProfilePic(profilePicUrl);
};

// check if user is signed IN
const isUserSigned = () => {
	return !!firebase.auth().currentUser;
};

// observe user login activites
const authStateObserver = (user) => {
	if (user) {
		// User is signed in!
		console.log("User Logged in");
	} else {
		console.log("user Logged Out");
	}
};
