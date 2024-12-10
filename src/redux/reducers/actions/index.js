export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_TO_FAVOURITE = "REMOVE_TO_FAVOURITE";
export const GET_WORK = "GET_WORK";
export const GET_PARAMS = "GET_PARAMS";

export const addToFavouriteAction = obj => {
	return {
		type: ADD_TO_FAVOURITE,
		payload: obj,
	};
};

export const removeFromFavouriteAction = i => {
	return {
		type: REMOVE_TO_FAVOURITE,
		payload: i,
	};
};

export const getParams = params => {
	return {
		type: GET_PARAMS,
		payload: params,
	};
};

export const getWorkAction = () => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(
				"https://strive-benchmark.herokuapp.com/api/jobs?company=amazon",
			);
			if (response.ok) {
				const actuallyState = getState();
				console.log(actuallyState);
				const { data } = await response.json();
				dispatch(getWorkAction(data));
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.log(error);
		}
	};
};
