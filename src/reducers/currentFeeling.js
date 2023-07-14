const currentFeeling = (state = [], action) => {
    if (action.type === 'SET_FEELING_LOCAL') {
        return [...state, ...action.payload]
    }
return state
}

export default currentFeeling