import axios from "axios";
import { Dispatch } from "redux";

export const httpCall = (
	methodType: "POST" | "GET" | "DELETE",
	apiPath: string,
	body: any,
	urlParam: any,
	asyncAction?: any,
	callback?: (responseData: any) => any,
	errorCallback?: (reason: any) => any
) => (dispatch: Dispatch) => {
	return axios({
		method: methodType,
		url: `${apiPath}`,
		headers: {
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8"
		},
		params: urlParam,
		data: body,
		timeout: 10000
	})
		.then(res => {
			asyncAction && dispatch(asyncAction.success(res.data));
			callback && callback(res.data);
		})
		.catch(err => {
			asyncAction && dispatch(asyncAction.failure(err));
			errorCallback && errorCallback(err);
		});
};
