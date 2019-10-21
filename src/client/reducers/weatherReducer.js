import * as constants from '../../constants';

const initialState = {
    skyState: '',
    windSpeed: '',
    currentTime: '',
    temperature: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_WEATHER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}