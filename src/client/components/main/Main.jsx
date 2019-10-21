import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Buttons, Info } from './styledComponent.js';
import constants from '../../../constants';

class Main extends Component {
    static propTypes = {
        skyState: PropTypes.string.isRequired,
        windSpeed: PropTypes.string.isRequired,
        getWeather: PropTypes.func.isRequired,
        temperature: PropTypes.string.isRequired,
    };

    render() {
        const {
            skyState,
            windSpeed,
            getWeather,
            temperature,
        } = this.props;

        return (
            <Wrapper>
                <Wrapper.Buttons>
                    <Buttons.button onClick={() => getWeather(constants.KIEV)} children={'Kiev'} />
                    <Buttons.button onClick={() => getWeather(constants.DNIPRO)} children={'Dnipro'} />
                    <Buttons.button onClick={() => getWeather(constants.LVIV)} children={'Lviv'} />
                    <Buttons.button onClick={() => getWeather(constants.KHARKIV)} children={'Kharkiv'} />
                </Wrapper.Buttons>
                <Wrapper.Info>
                    {temperature ? <Info.paragraph children={`${temperature} °C`}/> : null}
                    {skyState ? <Info.image src={`https://openweathermap.org/img/w/${skyState}.png`} alt={'weather'} /> : null}
                    {windSpeed ? <Info.paragraph children={`${windSpeed} p.h.`} /> : null}
                </Wrapper.Info>
            </Wrapper>
        );
    }
}

export default Main;