// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDVP0BxqvvQBNtd36byfayICIex1vXR0vM",
	authDomain: "sector-b61db.firebaseapp.com",
	projectId: "sector-b61db",
	storageBucket: "sector-b61db.appspot.com",
	messagingSenderId: "564311339697",
	appId: "1:564311339697:web:ec0ce56e33dddc8de4a890",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const useFirebase = () => {
	return {
		app,
	};
};
