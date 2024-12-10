import { ADD_TO_FAVOURITE, REMOVE_TO_FAVOURITE } from "../actions";

const nativeState = {
	work: {
		favourite: [],
	},
};

const favouriteReducer = (state = nativeState, action) => {
	switch (action.type) {
		case ADD_TO_FAVOURITE:
			console.log(state.work);
			return {
				...state,
				work: {
					...state.work,
					favourite: state.work.favourite.some(
						fav => fav._id === action.payload._id,
					)
						? [...state.work.favourite]
						: [...state.work.favourite, action.payload],
				},
			};
		case REMOVE_TO_FAVOURITE:
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

export default favouriteReducer;
