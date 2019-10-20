import constants from './../../constants';

export const temperatureAction = payload => ({ type: constants.TEMPERATURE, payload });
export const speedWindAction = payload => ({ type: constants.SPEED_WIND, payload});
export const skyStateAction = payload => ({ type: constants.SKY_STATE, payload});