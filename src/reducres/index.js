import changeNumber from "./increAndDrec";
import mulDivNumber from "./mulDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeNumber,
    mulDivNumber
})

export default rootReducer