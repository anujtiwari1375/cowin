import isExists from "./isExists";
import moment from 'moment-timezone';
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function aefiReport(get_public_stats) {

    var aefiData = isExists(get_public_stats) && isExists(get_public_stats.last30DaysAefi) ? get_public_stats.last30DaysAefi : [];
    var label = [];
    var aefi = [];
    aefiData.forEach(function (vacc_data) {
        label.push(moment(vacc_data.vaccine_date).format('DD MMM'));
        aefi.push(vacc_data.aefi);
    });

    const vcaccination_dose_today = {
        labels: label,
        datasets: [
            {
                label: "Total",
                data: aefi,
                fill: true,
                lineTension: 0.5,
                backgroundColor: "#FEECF4",
                borderColor: "#F54394"
            }
        ]
    };
    return vcaccination_dose_today;
}