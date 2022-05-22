const initialState = {
    notes: []
}

const homeReducer = (state = initialState, action) => {
    if (action.type === 'SET_NOTES'){
        return {
            ...state,
            notes: action.value
        }
    }
    return state;
}

export default homeReducer;