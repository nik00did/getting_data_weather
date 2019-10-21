import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Main from './Main.jsx';
import * as constants from '../../../constants';

export const mapStateToProps = state => ({
    skyState: selectors.getStateSky(state),
    windSpeed: selectors.getWindSpeed(state),
    temperature: selectors.getTemperature(state),
});

export const mapDispatchToProps = dispatch => ({
    getWeather: payload => dispatch({ type: constants.GET_WEATHER, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);