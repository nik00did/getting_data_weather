import { takeEvery, put, call, apply } from 'redux-saga/effects';
import * as constants from '../../constants';
import * as actions from '../actions';

export default function* watchSaga() {
    yield takeEvery(constants.GET_WEATHER, getWeather);
}

function* getWeather(action) {
    const weather = yield call(sendRequest, action.payload) || { main: { temp: 273 } };

    const temperature = `${parseInt(weather.main.temp - 273)}`;
    const windSpeed = `${weather.wind.speed}`;
    const skyState = `${weather.weather[0].icon}`;

    yield put(actions.setWeather({
        skyState,
        windSpeed,
        temperature,
    }));
}

function* sendRequest(town) {
    const response = yield call(fetch, `http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=6b474aa0006c665bf1049403ef8c8ac6`);
    return yield apply(response, response.json);
}