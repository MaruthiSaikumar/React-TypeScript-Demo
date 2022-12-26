import { ActionType, StateType } from "typesafe-actions";
import { rootActions } from "../actions/rootActions";
import { rootReducer } from "../reducers/rootReducer";

export type RootAction = ActionType<typeof rootActions>;
export type RootState = StateType<typeof rootReducer>;

declare module "typesafe-actions" {
	// eslint-disable-next-line @typescript-eslint/interface-name-prefix
	interface Types {
		RootAction: RootAction;
	}
}
