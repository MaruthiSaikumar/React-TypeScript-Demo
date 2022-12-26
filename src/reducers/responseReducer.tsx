import { createReducer } from "typesafe-actions";
import { submitActions } from "../actions/myactions";

export const initialState = {
	newDate: "no date yet"
};
export default createReducer(initialState).handleAction(
	submitActions.success,
	(state, action) => ({
		newDate: action.payload.newDate
	})
);
