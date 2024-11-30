import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
	loading: null,
	error: null,
};

const updateReducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return { loading: true, error: null };
		case "UPDATED_DOC":
			return { loading: false, error: null };
		case "ERROR":
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const useUpdateDocument = (DocCollection) => {
	const [response, dispatch] = useReducer(updateReducer, initialState);

	//deal with memory leak
	const [cancelled, setCancelled] = useState(false);

	const checkCancelledBeforeDispath = (action) => {
		if (!cancelled) {
			dispatch(action);
		}
	};

	const updateDocument = async (id, data) => {
		checkCancelledBeforeDispath({
			type: "LOADING",
			payload: updateDocument,
		});

		try {
			const docRef = await doc(db, DocCollection, id);

			const updateDocument = await updateDoc(docRef, data);

			checkCancelledBeforeDispath({
				type: "UPDATED_DOC",
				payload: updateDocument,
			});
		} catch (error) {
			checkCancelledBeforeDispath({
				type: "ERROR",
				payload: error.message,
			});
		}
	};

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return {
		updateDocument,
		response,
	};
};
