import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import myReduxStore, { myPersistStore } from "./redux/reducers/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={myReduxStore}>
		<PersistGate loading={null} persistor={myPersistStore}>
			<App />
		</PersistGate>
	</Provider>,
);
