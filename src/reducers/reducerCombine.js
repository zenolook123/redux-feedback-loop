import { combineReducers } from "redux"
import currentFeeling from "./currentFeeling"
import savedFeelings from "./savedFeelings"

const combinedReducers = combineReducers ({
currentFeeling,
savedFeelings
})

export default combinedReducers




