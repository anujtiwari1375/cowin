import { GETPUBLICSTATS, GETSTATS, GETDiSTRICT } from '../actions/DashboardAction';

export default function (state = {}, action) {
    switch (action.type) {
        case GETPUBLICSTATS:
            var get_public_stats = action.payload;
            return {
                ...state, get_public_stats
            };
        case GETSTATS:
            var get_stats = action.payload;
            return {
                ...state, get_stats
            };
        case GETDiSTRICT:
            var get_state = action.payload;
            return {
                ...state, get_state
            };
        default:
            return state;
    }
}