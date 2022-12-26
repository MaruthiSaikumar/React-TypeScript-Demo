import { createAsyncAction } from "typesafe-actions";
import { IResponse } from "../utils/apiDef";

export const submitActions = createAsyncAction(
	"SUBMIT_REQUEST",
	"SUBMIT_SUCCESS",
	"SUBMIT_FAILURE"
)<void, IResponse, Error>();
