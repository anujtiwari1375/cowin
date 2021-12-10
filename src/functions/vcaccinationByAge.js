import isExists from "./isExists";
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function vcaccinationByAge(get_public_stats) {
    var vac_18_45 = isExists(get_public_stats) && isExists(get_public_stats.vaccinationByAge) ? get_public_stats.vaccinationByAge.vac_18_45 : '';
    var vac_45_60 = isExists(get_public_stats) && isExists(get_public_stats.vaccinationByAge) ? get_public_stats.vaccinationByAge.vac_45_60 : '';
    var above_60 = isExists(get_public_stats) && isExists(get_public_stats.vaccinationByAge) ? get_public_stats.vaccinationByAge.above_60 : '';

    var vcaccinationbyage = {
        labels: [
            "18-44",
            "45-60",
            "Above 60"
        ],
        datasets: [
            {
                data: [vac_18_45, vac_45_60, above_60],
                backgroundColor: [
                    "#AADEA7",
                    "#64C2A6",
                    "#2D87BB"
                ],
                hoverBackgroundColor: [
                    "#AADEA7",
                    "#64C2A6",
                    "#2D87BB"
                ],
                borderRadius: 0,
                borderWidth: 2,
                // circumference: 180,
                // rotation: 270,
                // cutoutPercentage: 35,
            },
        ]
    };

    return vcaccinationbyage;
}