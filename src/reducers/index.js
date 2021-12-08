import { combineReducers } from 'redux';
import DashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;