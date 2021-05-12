import { combineReducers, createStore } from "redux";
import AnimalReducer from "./reducer/AnimalReducer";

const RootReducer = combineReducers({
    AnimalReducer,

})

export const store = createStore(RootReducer)