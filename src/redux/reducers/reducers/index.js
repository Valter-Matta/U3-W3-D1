const nativeState = {
	work: {
		favourite: [],
	},
};

const mainReducer = (state = nativeState, action) => {
	switch (action.type) {
		case "ADD_TO_FAVOURITE":
			return {
				...state,
				work: {
					...state.work,
					favourite: state.work.favourite.concat(action.payload),
				},
			};
		case "REMOVE_FROM_FAVOURITE":
			return {
				...state,
				work: {
					...state.work,
					favourite: state.work.favourite.filter(
						(_, i) => i !== action.payload,
					),
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
