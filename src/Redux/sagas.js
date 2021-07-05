import { call, put, takeEvery } from "@redux-saga/core/effects"
import { setLoader, delLoader, showError } from "./actions"


export function* sagaWatcher() {
    yield takeEvery('REQUEST_POST', sagaWorker)
}

function* sagaWorker() {

    try {
        yield put(setLoader())
        const payload = yield call(fetchPosts)
        yield put({
            type: 'FETCH_POST',
            payload
        })
    } catch (error) {
        yield put(showError('Не удалось загрузить данные..'))
    }
    finally {
        yield put(delLoader())
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
    return await response.json()
}




