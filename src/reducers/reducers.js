import { combineReducers } from "redux"

combineReducers ({
    const currentFeedback = (state = [], action) => {
        if (action.type === 'SET_FEEDBACK') {
            return [...state, ...action.payload]
        }
    return state
    }
    const thisFeedback = (state = [], action) => {
        if (action.type === 'SET_FEEDBACK_LOCAL') {
            return [...state, ...action.payload]
        }
    return state
    }
    const currentFeeling = (state = [], action) => {
        if (action.type === 'SET_FEEDBACK_LOCAL') {
            return [...state, ...action.payload]
        }
    return state
    }
    
})




