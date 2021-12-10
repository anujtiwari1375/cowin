import moment from 'moment-timezone';
import $ from 'jquery';
import district from './district.json';

export const GETSTATS = "GETSTATS";
export const GETPUBLICSTATS = "GETPUBLICSTATS";
export const GETDiSTRICT = "GETDiSTRICT";



export function getPublicStats(state_id = '', district_id = '') {
    var date = moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
    var result = $.getJSON(`https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${state_id}&district_id=${district_id}&date=${date}`, function (data) {
        return data
    });
    return { type: GETPUBLICSTATS, payload: result };
}

export function getStats(state_id = '', district_id = '') {
    var date = moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
    var result = $.getJSON(`https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=${state_id}&district_id=${district_id}&date=${date}`, function (data) {
        return data
    });
    return { type: GETSTATS, payload: result };
}

export function getDistrict(state_code, callback) {
    var state_district = [];
    district.forEach(function (arrayItem) {
        if (arrayItem.state_id === Number(state_code)) {
            state_district.push(arrayItem);
        }
    });
    var result = state_district;
    callback(result);
    return { type: GETDiSTRICT, payload: result };
}