import * as constants from '../../constants';

const initialState = {
    temperature: '',
    skyState: '',
    windSpeed: '',
    currentTime: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.TEMPERATURE:
            return {
                ...state,
                temperature: action.payload,
            };
        case constants.SPEED_WIND:
            return {
                ...state,
                windSpeed: action.payload,
            };
        case constants.SKY_STATE:
            return {
                ...state,
                skyState: action.payload,
            };
        default:
            return state;
    }
}