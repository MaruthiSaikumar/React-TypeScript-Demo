// store: holds our state -- only one state
import { Action, applyMiddleware, createStore, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootAppReducer } from "./reducers/rootReducer";
import localForage from "localforage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage: localForage,
	// not sure why but typescript hate this assignment, even though its what is in the readme of redux-persist
	// so i had to generalize to 'any' to make it not complain.
	stateReconciler: autoMergeLevel2 as any,
	blacklist: ["globalComponents"] // so that when refreshed this does not get stuck
};

const persistedReducer = persistReducer(persistConfig, rootAppReducer);

export const createStoreWithEverything = <S, A extends Action>(
	reducer: Reducer<S, A>
): Store => {
	return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
};

/* eslint-disable no-underscore-dangle */
const store = createStoreWithEverything(persistedReducer);
/* eslint-enable */
export const persistor = persistStore(store);

export default store;
