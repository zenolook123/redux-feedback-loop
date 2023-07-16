const currentFeeling = (state = {}, action) => {
    if (action.type === 'SET_FEELING_LOCAL') {
        return {...state, 
            feeling:action.payload}
    }
    if (action.type === 'SET_UNDERSTANDING_LOCAL') {
        return {...state, 
            understanding:action.payload}
    }
    if (action.type === 'SET_SUPPORT_LOCAL') {
        return {...state, 
            support:action.payload}
    }
    if (action.type === 'SET_COMMENTS_LOCAL') {
        return {...state, 
            comments:action.payload}
    }
    if (action.type === 'SUBMIT_LOCAL') {
        return [{state}]
    }
return state
}

export default currentFeeling