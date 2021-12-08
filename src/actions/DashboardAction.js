import callApi from '../functions/callApi';
import $ from 'jquery';
export const GETSTATS = "GETSTATS";

export function getStats() {
    var result = $.getJSON('https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=2021-12-07', function (data) {
        // JSON result in `data` variable
        return data
    });
    return { type: GETSTATS, payload: result };
}