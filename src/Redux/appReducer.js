const initialState = {
    loaded: false,
    error: false,
    text: ''
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LOADER':
            return {
                ...state,
                loaded: true
            }
        case 'DEL_LOADER':
            return {
                ...state,
                loaded: false
            }
        case 'SHOW_ERROR':
            return {
                ...state,
                error: true,
                text: action.payload

            }

        case 'HIDE_ERROR':
            return {
                ...state,
                error: false,
                text: ''
            }
        default: return state
    }

}