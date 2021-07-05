export function createPost(post) {
    return {
        type: 'CREATE_POST',
        payload: post
    }
}

export function setLoader() {
    return {
        type: 'SET_LOADER',
    }
}

export function delLoader() {
    return {
        type: 'DEL_LOADER',
    }
}

export function showError(text) {

    return dispatch => {
        dispatch({
            type: 'SHOW_ERROR',
            payload: text
        })
        setTimeout(() => {
            dispatch(hideError())
        }, 2000)
    }
}

export function hideError() {
    return {
        type: 'HIDE_ERROR',
    }
}

export function delPost(id) {
    return {
        type: 'DEL_POST',
        payload: id
    }
}

export function delFetch() {
    return {
        type: 'DEL_FETCH',
    }
}

export function fetchPost() {

    return {
        type: 'REQUEST_POST'
    }
}