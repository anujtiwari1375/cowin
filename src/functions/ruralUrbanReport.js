import isExists from "./isExists";
import moment from 'moment-timezone';
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function aefiReport(get_stats) {

    var ruralUrbanData = isExists(get_stats) && isExists(get_stats.last30DaysVaccination) ? get_stats.last30DaysVaccination : [];
    var label = [];
    var rural = [];
    var urban = [];
    var counter = 0;

    ruralUrbanData.forEach(function (vacc_data) {        
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
                backgroundColor: ["rgb(231,253,255,0.5)"],
                borderColor: "#14E8FB"
            },
            {
                label: "Urban",
                data: urban,
                fill: true,
                lineTension: 0.5,
                backgroundColor: ["rgb(216,243,254,1)"],                
                borderColor: "#5A8DEE"
            },
        ]
    };
    return rural_urban_report;
}