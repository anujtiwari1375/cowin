import isExists from "./isExists";
import moment from 'moment-timezone';
/**
 * Check the value exist or not
 * @param {*} value 
 */

var vcaccinationTrends = {

    vcaccinationDoseAll: function (get_stats) {
        var vcaccinationDoseAll = isExists(get_stats) ? get_stats.weeklyReport : [];
        var label = [];
        var total_dose = [];
        var dose_one = [];
        var dose_two = [];
        vcaccinationDoseAll.forEach(function (vacc_data) {
            label.push(vacc_data.label);
            total_dose.push(vacc_data.total);
            dose_one.push(vacc_data.dose1);
            dose_two.push(vacc_data.dose2);
        });

        const vcaccination_dose_all = {
            labels: label,
            datasets: [
                {
                    label: "Total",
                    data: total_dose,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#54EEFC"
                },
                {
                    label: "Dose Two",
                    data: dose_two,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#FBA714"
                },
                {
                    label: "Dose One",
                    data: dose_one,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };

        return vcaccination_dose_all
    },

    vcaccinationDoseLast30Days: function (get_stats) {
        var vcaccinationDoseLast30Days = isExists(get_stats) ? get_stats.last30DaysVaccination : [];
        var label = [];
        var total_dose = [];
        var dose_one = [];
        var dose_two = [];
        vcaccinationDoseLast30Days.forEach(function (vacc_data) {
            label.push(moment(vacc_data.vaccine_date).format('DD MMM'));
            total_dose.push(vacc_data.total);
            dose_one.push(vacc_data.dose_1);
            dose_two.push(vacc_data.dose_2);
        });

        const vcaccination_dose_today = {
            labels: label,
            datasets: [
                {
                    label: "Total",
                    data: total_dose,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#54EEFC"
                },
                {
                    label: "Dose Two",
                    data: dose_two,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#FBA714"
                },
                {
                    label: "Dose One",
                    data: dose_one,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };

        return vcaccination_dose_today
    },
    vcaccinationDoseToday: function (get_public_stats) {
        var vaccinationDoneByTime = isExists(get_public_stats) ? get_public_stats.vaccinationDoneByTime : [];
        var label = [];
        var total_dose = [];
        var dose_one = [];
        var dose_two = [];
        vaccinationDoneByTime.forEach(function (vacc_data) {
            var time = moment(vacc_data.timestamps).utcOffset(0).format("HH:mm");

            label.push(time);
            total_dose.push(vacc_data.count);
            dose_one.push(vacc_data.dose_one);
            dose_two.push(vacc_data.dose_two);
        });

        const vcaccination_dose_today = {
            labels: label,
            datasets: [
                {
                    label: "Total",
                    data: total_dose,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#54EEFC"
                },
                {
                    label: "Dose Two",
                    data: dose_two,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#FBA714"
                },
                {
                    label: "Dose One",
                    data: dose_one,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };

        return vcaccination_dose_today
    },

    vcaccinationAgeToday: function (get_public_stats) {
        var vaccinationDoneByTimeAgeWise = isExists(get_public_stats) ? get_public_stats.vaccinationDoneByTimeAgeWise : [];


        var label = [];
        var total = [];
        var vac_18_45 = [];
        var vac_45_60 = [];
        var vac_60_above = [];
        vaccinationDoneByTimeAgeWise.forEach(function (vacc_data) {
            var time = moment(vacc_data.timestamps).utcOffset(0).format("HH:mm");
            label.push(time);
            total.push(vacc_data.total);
            vac_18_45.push(vacc_data.vac_18_45);
            vac_45_60.push(vacc_data.vac_45_60);
            vac_60_above.push(vacc_data.vac_60_above);
        });

        const vcaccination_age_today = {
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
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: vac_18_45,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: vac_45_60,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: vac_60_above,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return vcaccination_age_today;
    },

    vcaccinationAgeLast30Days: function (get_stats) {
        var last30DaysAgeWiseVaccination = isExists(get_stats) ? get_stats.last30DaysAgeWiseVaccination : [];

        var label = [];
        var total = [];
        var vac_18_45 = [];
        var vac_45_60 = [];
        var vac_60_above = [];
        last30DaysAgeWiseVaccination.forEach(function (vacc_data) {
            label.push(moment(vacc_data.vaccine_date).format('DD MMM'));
            total.push(vacc_data.total);
            vac_18_45.push(vacc_data.vac_18_45);
            vac_45_60.push(vacc_data.vac_45_60);
            vac_60_above.push(vacc_data.vac_60_above);
        });

        const vcaccination_age_last_30_day = {
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
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: vac_18_45,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: vac_45_60,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: vac_60_above,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return vcaccination_age_last_30_day;
    },

    vcaccinationAgeAll: function (get_stats) {
        var weeklyVacAgeWiseReport = isExists(get_stats) ? get_stats.weeklyVacAgeWiseReport : [];

        var label = [];
        var total = [];
        var vac_18_45 = [];
        var vac_45_60 = [];
        var vac_60_above = [];
        weeklyVacAgeWiseReport.forEach(function (vacc_data) {
            label.push(vacc_data.label);
            total.push(vacc_data.total);
            vac_18_45.push(vacc_data.vac_18_45);
            vac_45_60.push(vacc_data.vac_45_60);
            vac_60_above.push(vacc_data.vac_60_above);
        });

        const vcaccination_age_last_30_day = {
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
                    // backgroundColor: "#E7FDFF",
                    borderColor: "#DE8971"
                },
                {
                    label: "18-44",
                    data: vac_18_45,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#14E8FB"
                },
                {
                    label: "45-60",
                    data: vac_45_60,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#A7D0CD"
                },
                {
                    label: "Above 60",
                    data: vac_60_above,
                    fill: true,
                    lineTension: 0.5,
                    // backgroundColor: "#FFF6E7",
                    borderColor: "#5A8DEE"
                }
            ]
        };
        return vcaccination_age_last_30_day;
    }
};
export default vcaccinationTrends;