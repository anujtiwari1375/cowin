import { GETSTATS } from '../actions/DashboardAction';
import mapKeys from 'lodash/mapKeys';

export default function (state = {}, action) {
    switch (action.type) {
        case GETSTATS:
            var get_stats = action.payload;
            return {
                ...state, get_stats
            };
        default:
            return state;
    }
}