// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	onSnapshot,
} from "firebase/firestore";
import { useAppContext } from "./context";
import { useEffect } from "react";
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
const db = getFirestore();

export const useFirebase = () => {
	const { setData, data: appData } = useAppContext();

	useEffect(() => {}, []);

	async function fetchData(name = "sectors") {
		const constRef = collection(db, name);

		try {
			const data = await getDocs(constRef);
			const res = data.docs.map((doc) => {
				return doc.data();
			});

			console.log("AppData", appData);
			return res;
		} catch (error) {
			console.error("Error fetching data:", error);

			return [];
		}
	}

	return {
		app, // Assuming app is defined somewhere else
		fetchData,
	};
};

// export const useFirebase = () => {
// 	// Initialize Firebase
// 	const { setData, data } = useAppContext();
// 	useEffect(() => {
// 		setData(false);
// 	}, [data, setData]);

// 	async function fetchData(name = "sectors") {
// 		console.log();
// 		const constRef = collection(db, name);

// 		const data = await getDocs(constRef);
// 		const res = data.docs.map((doc) => {
// 			console.log(setData(true));
// 			console.log(doc.data());
// 			return doc.data();
// 		});
// 		return res;
// 	}

// 	return {
// 		app,
// 		fetchData,
// 	};
// };
