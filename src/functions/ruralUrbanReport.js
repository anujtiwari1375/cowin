import isExists from "./isExists";
import moment from 'moment-timezone';
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function aefiReport(get_stats) {

    var ruralUrbanData = isExists(get_stats) ? get_stats.last30DaysVaccination : [];
    var label = [];
    var rural = [];
    var urban = [];
    var counter = 0;
    // ruralUrbanData.reverse();
    console.log("ruralUrbanData ruralUrbanData", ruralUrbanData);
    ruralUrbanData.forEach(function (vacc_data) {
        console.log()
        if (counter > 14) {
            label.push(moment(vacc_data.vaccine_date).format('DD MMM'));
            rural.push(vacc_data.rural);
            urban.push(vacc_data.urban);
        }
        counter = counter + 1
    });



    const rural_urban_report = {
        labels: label,
        datasets: [
            {
                label: "Rural",
                data: rural,
                fill: true,
                lineTension: 0.5,
                // backgroundColor: "#FEECF4",
                borderColor: "#14E8FB"
            },
            {
                label: "Urban",
                data: urban,
                fill: true,
                lineTension: 0.5,
                // backgroundColor: "#FFF6E7",
                borderColor: "#5A8DEE"
            },
        ]
    };
    return rural_urban_report;
}