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
					favourite: state.work.favourite.some(fav => fav === action.payload)
						? [...state.work.favourite]
						: [...state.work.favourite, action.payload],
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
