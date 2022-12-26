// reducer: receives the action and modifies the state to give us a new state
import { RootState } from "../types/rootTypes";
import { combineReducers } from "redux";
import responseReducer from "./responseReducer";

export const rootReducer = {
	apiResponse: responseReducer
};

export const rootAppReducer = (state: RootState | undefined, action: any) => {
	return combineReducers({ ...rootReducer })(state, action);
};
