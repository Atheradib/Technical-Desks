import { combineReducers } from "redux";
import reducer from "./bankReducer";
import bankReducer from "./bankReducer"


export const reducers=combineReducers({
    bank : bankReducer
})


export type State=ReturnType<typeof reducer>