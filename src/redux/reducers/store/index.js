import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const myReduxStore = configureStore({
	reducer: mainReducer,
});

export default myReduxStore;
