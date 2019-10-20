import { all } from 'redux-saga/effects';
import weather from './WeatherSaga';

export default function* rootSaga() {
    yield all([
        weather(),
    ]);
}