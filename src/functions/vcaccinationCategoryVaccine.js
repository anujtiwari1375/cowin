import isExists from "./isExists";
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function vcaccinationCategoryVaccine(get_public_stats) {
    var covishield_vacination = isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.covishield : '';
    var covaxin_vacination = isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.covaxin : '';
    var sputnik_vacination = isExists(get_public_stats) ? get_public_stats.topBlock.vaccination.sputnik : '';

    var vcaccination_category_vaccine = {
        labels: [
            "Covishield",
            "Covaxin",
            "Sputnik"
        ],
        datasets: [
            {
                data: [covishield_vacination, covaxin_vacination, sputnik_vacination],
                backgroundColor: [
                    "#007CC3",
                    "#7AC142",
                    "#FFF44C"
                ],
                hoverBackgroundColor: [
                    "#007CC3",
                    "#36A2EB",
                    "#FFF44C"
                ],
                borderRadius: 0,
                borderWidth: 2,
                circumference: 180,
                rotation: 270,
                cutoutPercentage: 35,
            },
        ]
    };
    return vcaccination_category_vaccine;
}