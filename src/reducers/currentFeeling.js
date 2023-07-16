const currentFeeling = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''

}, action) => {
    if (action.type === 'SET_FEELING_LOCAL') {
        return {
            ...state,
            ...action.payload
        }
    }
    if (action.type === 'SET_UNDERSTANDING_LOCAL') {
        return {
            ...state,
            ...action.payload
        }
    }
    if (action.type === 'SET_SUPPORT_LOCAL') {
        return {
            ...state,
            ...action.payload
        }
    }
    if (action.type === 'SET_COMMENTS_LOCAL') {
        return { ...state, ...action.payload }
    }
    if (action.type === 'SUBMIT_LOCAL') {
        return { state }
    }
    return state
}

export default currentFeeling