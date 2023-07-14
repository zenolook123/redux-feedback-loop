const thisFeedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_LOCAL') {
        return [...state, ...action.payload]
    }
return state
}

export default thisFeedback