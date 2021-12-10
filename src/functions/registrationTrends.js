import isExists from "./isExists";
import moment from 'moment-timezone';
/**
 * Check the value exist or not
 * @param {*} value 
 */

var registrationTrends = {

    registrationTrendToday: function (get_public_stats) {

        var registrationTrendToday = isExists(get_public_stats) && isExists(get_public_stats.timeWiseTodayRegReport) ? get_public_stats.timeWiseTodayRegReport : [];
        var label = [];
        var total = [];
        var age_18_44 = [];
        var age_45_60 = [];
        var above_60 = [];
        registrationTrendToday.forEach(function (vacc_data) {
            var time = moment(vacc_data.timestamps).utcOffset(0).format("HH:mm");
            label.push(time);
            total.push(vacc_data.total);
            age_18_44.push(vacc_data.age18);
            age_45_60.push(vacc_data.age45);
            above_60.push(vacc_data.age60);
        });

        const registration_trend_today = {
            labels: label,
            showTooltips: true,
            tooltips: {
                mode: 'index',
            },
            hover: {
                mode: 'nearest',
            },
            datasets: [
                {
                    label: "Total",
                    data: total,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(252,243,241,0.2)"],
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: age_18_44,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(231,253,255,0.2)"],
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: age_45_60,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(246,250,250, 0.4)"],
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: above_60,
                    fill: true,
                    lineTension: 0.5,
                    "backgroundColor": ["rgb(205,221,250, 0.9)"],
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return registration_trend_today;
    },

    registrationTrendLast30Days: function (get_stats) {

        var regReportData = isExists(get_stats) && isExists(get_stats.regReportData) ? get_stats.regReportData : [];
        var label = [];
        var total = [];
        var age_18_44 = [];
        var age_45_60 = [];
        var above_60 = [];
        regReportData.forEach(function (vacc_data) {
            label.push(moment(vacc_data.reg_date).format('DD MMM'));
            total.push(vacc_data.total);
            age_18_44.push(vacc_data.age18);
            age_45_60.push(vacc_data.age45);
            above_60.push(vacc_data.age60);
        });

        const registration_trend_30_days = {
            labels: label,
            showTooltips: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            datasets: [
                {
                    label: "Total",
                    data: total,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(252,243,241,0.2)"],
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: age_18_44,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(231,253,255,0.2)"],
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: age_45_60,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(246,250,250, 0.4)"],
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: above_60,
                    fill: true,
                    lineTension: 0.5,
                    "backgroundColor": ["rgb(205,221,250, 0.9)"],
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return registration_trend_30_days;
    },
    registrationTrendAll: function (get_stats) {

        var regWeekReportData = isExists(get_stats) && isExists(get_stats.regWeekReportData) ? get_stats.regWeekReportData : [];
        var label = [];
        var total = [];
        var age_18_44 = [];
        var age_45_60 = [];
        var above_60 = [];
        regWeekReportData.forEach(function (vacc_data) {
            label.push(vacc_data.label);
            total.push(vacc_data.total);
            age_18_44.push(vacc_data.age18);
            age_45_60.push(vacc_data.age45);
            above_60.push(vacc_data.age60);
        });

        const registration_trend_all = {
            labels: label,
            showTooltips: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            datasets: [
                {
                    label: "Total",
                    data: total,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(252,243,241,0.2)"],
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: age_18_44,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(231,253,255,0.2)"],
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: age_45_60,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: ["rgb(246,250,250, 0.4)"],
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: above_60,
                    fill: true,
                    lineTension: 0.5,
                    "backgroundColor": ["rgb(205,221,250, 0.9)"],
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return registration_trend_all;
    }
};
export default registrationTrends;