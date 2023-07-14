import { combineReducers } from "redux"
import currentFeeling from "./currentFeeling"
import currentFeedback from "./currentFeedback"
import thisFeedback from "./thisFeedback"


const combinedReducers = combineReducers ({
    currentFeeling,
    currentFeedback,
    thisFeedback
})

export default combinedReducers




