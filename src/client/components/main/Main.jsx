import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Buttons, Info } from './styledComponent.js';

class Main extends Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        temperature: PropTypes.number.isRequired,
        windSpeed: PropTypes.number.isRequired,
    };

    getTown = event => this.props.getWeather(event.target.id);

    render() {
        const { temperature, windSpeed, skyState} = this.props;

        return (
            <Wrapper>
                <Wrapper.Buttons>
                    <Buttons.button id='Kiev' onClick={this.getTown} children={'Kiev'} />
                    <Buttons.button id='Dnipro' onClick={this.getTown} children={'Dnipro'} />
                    <Buttons.button id='Lvov' onClick={this.getTown} children={'Lvov'} />
                    <Buttons.button id='Kharkiv' onClick={this.getTown} children={'Kharkiv'} />
                </Wrapper.Buttons>
                <Wrapper.Info>
                    <Info.paragraph children={temperature} />
                    <Info.image src={`https://openweathermap.org/img/w/${skyState}.png`} alt={'weather'} />
                    <Info.paragraph children={'time'} />
                    <Info.paragraph children={`${windSpeed} p.h.`} />
                </Wrapper.Info>
            </Wrapper>
        );
    }
}

export default Main;