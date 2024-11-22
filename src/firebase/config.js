import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyC691zUVjfp28t4bG0wdwZ6bZm4nbpSTbk",
	authDomain: "miniblog-e2c11.firebaseapp.com",
	projectId: "miniblog-e2c11",
	storageBucket: "miniblog-e2c11.firebasestorage.app",
	messagingSenderId: "238693319438",
	appId: "1:238693319438:web:907d61ed65ff1844e2cd5f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
