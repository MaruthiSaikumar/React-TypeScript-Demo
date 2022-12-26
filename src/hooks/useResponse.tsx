import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/rootTypes";
import * as actions from "../actions/myactions";
import { IResponse } from "../utils/apiDef";
import { httpCall } from "../utils/myaxios";

export const useResponse = () => {
	const dispatch = useDispatch();

	const response: IResponse = useSelector(
		(state: RootState) => state.apiResponse
	);

	const getNewDate = (
		callback?: (csnData: IResponse) => any,
		errorCallback?: (err: Error) => any
	) => {
		dispatch(() => {
			dispatch(actions.submitActions.request);
			dispatch(
				httpCall(
					"GET",
					"https://late-breeze-1103.getsandbox.com/hello",
          null,
          null,
					actions.submitActions,
					(data: IResponse) => {
						callback && callback(data);
					},
					(err: Error) => {
						errorCallback && errorCallback(err);
					}
				)
			);
		});
	};

	return {
		response,
		getNewDate
	};
};
