const currentFeedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return [...state, ...action.payload]
    }
return state
}

export default currentFeedback