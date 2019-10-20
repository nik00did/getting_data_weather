import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Main from './Main.jsx';
import * as constants from '../../../constants';

export const mapStateToProps = state => ({
    temperature: selectors.getTemperature(state),
    windSpeed: selectors.getWindSpeed(state),
    skyState: selectors.getStateSky(state),
});

export const mapDispatchToProps = dispatch => ({
    getWeather: payload => dispatch({ type: constants.KIEV, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);