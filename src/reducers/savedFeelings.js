const savedFeelings = (state = [], action) => {
    if (action.type === 'SET_SAVED') {
        return [...state, ...action.payload]
    }
    return state
}

export default savedFeelings