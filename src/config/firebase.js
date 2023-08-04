// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	getDoc,
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

export const getDocSnapshopById = async () => {
	if (!sessionStorage.getItem("sessionId")) return;
	const docRef = doc(db, "sessions", sessionStorage.getItem("sessionId"));
	const docSnap = await getDoc(docRef);

	return { isTrue: true, ...docSnap.data() };
};

export const useCreateSessionAndUpdateData = () => {
	const createSession = async () => {
		if (sessionStorage.getItem("sessionId")) return;
		await addDoc(collection(db, "sessions"), {
			name: "test",
			sectors: 10,
		}).then((DocumentReference) => {
			console.log("Document written with ID: ", DocumentReference.id);
			sessionStorage.setItem("sessionId", DocumentReference.id);
		});
	};

	const updateSession = async (
		data = {
			name: "Updated",
			sectors: 200,
		}
	) => {
		const docRef = doc(db, "sessions", sessionStorage.getItem("sessionId"));
		updateDoc(docRef, data)
			.then(() => {
				console.log("Document successfully updated!");
			})
			.catch((error) => {
				console.error("Error updating document: ", error);
			});
	};

	return {
		createSession,
		updateSession,
	};
};

export const useFirebase = () => {
	const { setData, data: appData } = useAppContext();

	useEffect(() => {}, []);

	async function fetchData(name = "sectors") {
		const constRef = collection(db, name);
		setData(false);

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
		} finally {
			setData(true);
		}
	}

	return {
		app, // Assuming app is defined somewhere else
		fetchData,

		getDocSnapshopById,
	};
};
