const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case 'FETCH_POST':
            return {
                ...state,
                fetchedPosts: action.payload
            }
        case 'DEL_POST':
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.payload)
            }
        case 'DEL_FETCH':
            return {
                ...state,
                fetchedPosts: []
            }
        default: return state
    }

}