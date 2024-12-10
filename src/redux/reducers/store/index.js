import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import workReducer from "../reducers/workReducer";

const mainReducer = combineReducers({
	favourite: favouriteReducer,
	work: workReducer,
});

const persistConfig = {
	key: "root",
	storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const myReduxStore = configureStore({
	reducer: persistedReducer,
});

export const myPersistStore = persistStore(myReduxStore);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);
// persistor.purge();

export default myReduxStore;
