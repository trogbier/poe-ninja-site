import {takeLeading, put, select, call} from 'redux-saga/effects'
import axios from "axios";


const getData = async (name: string) => {
    try {
        return await axios.get(`/data/${name}.json`)
    } catch (e) {
        throw e
    }
}

function* workerSaga() {
    // @ts-ignore
    const selector = yield select(s => s.link)
    const newSelect = selector.count2.replace(/\s/g, '')
    // @ts-ignore
    const {data} = yield call(getData, newSelect)
    yield put({type: 'SET_ITEMS', payload: data.lines})
}

function* watcherSaga() {
    yield takeLeading('CLICK', workerSaga)
}

export default function* rootSaga() {
    yield watcherSaga()
}