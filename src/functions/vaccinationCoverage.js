import isExists from "./isExists";

/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function vaccinationCoverage(get_public_stats) {

    var vaccinationCoverage = isExists(get_public_stats) && isExists(get_public_stats.getBeneficiariesGroupBy) ? get_public_stats.getBeneficiariesGroupBy : [];
    var label = [];
    var dose1 = [];
    var dose2 = [];

    vaccinationCoverage.sort(function (a, b) {
        return parseFloat(b.total) - parseFloat(a.total);
    });

    vaccinationCoverage.forEach(function (vacc_data) {
        if (typeof vacc_data.district_name !== 'undefined') {
            label.push(vacc_data.district_name);
        } else if (typeof vacc_data.state_name !== 'undefined') {
            label.push(vacc_data.state_name);
        }
        dose1.push(vacc_data.partial_vaccinated);
        dose2.push(vacc_data.totally_vaccinated);
    });

    const data3 = {
        labels: label,
        datasets: [
            {
                label: "Dose 1",
                data: dose1,
                backgroundColor: "#F209FB"
            },
            {
                label: "Dose 1",
                data: dose2,
                backgroundColor: "#14E8FB"
            }
        ]
    };
    return data3;
}