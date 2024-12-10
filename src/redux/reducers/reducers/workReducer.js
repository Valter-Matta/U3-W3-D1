import { GET_PARAMS, GET_WORK } from "../actions";

const nativeState = {
	params: "",
	works: [],
};

const workReducer = (state = nativeState, action) => {
	switch (action.type) {
		case GET_WORK:
			return {
				...state,
				works: action.payload,
			};
		case GET_PARAMS:
			return {
				...state,
				params: action.payload,
			};
		default:
			return state;
	}
};

export default workReducer;
