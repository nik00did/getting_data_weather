import {takeEvery, put, call} from 'redux-saga/effects';
import * as constants from '../../constants';
import * as actions from '../actions';

export default function* watchSaga() {
    yield takeEvery(constants.KIEV, getWeather);
}

function* getWeather(action) {
    const weather = yield call(sendRequest, action.payload);

    const temperature = parseInt(weather.main.temp - 273);
    const speedWind = weather.wind.speed;
    const skyState = weather.weather[0].icon;

    yield put(actions.temperatureAction(temperature));
    yield put(actions.speedWindAction(speedWind));
    yield put(actions.skyStateAction(skyState));
}

async function sendRequest(town) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=6b474aa0006c665bf1049403ef8c8ac6`);
    const data = await response.json();
    return data;
}