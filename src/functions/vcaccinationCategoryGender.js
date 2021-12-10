import isExists from "./isExists";
/**
 * Check the value exist or not
 * @param {*} value 
 */
export default function vcaccinationCategoryGender(get_public_stats) {
    var male_vacination = isExists(get_public_stats) && isExists(get_public_stats.topBlock.vaccination) ? get_public_stats.topBlock.vaccination.male : '';
    var female_vacination = isExists(get_public_stats) && isExists(get_public_stats.topBlock.vaccination) ? get_public_stats.topBlock.vaccination.female : '';
    var others_vacination = isExists(get_public_stats) && isExists(get_public_stats.topBlock.vaccination) ? get_public_stats.topBlock.vaccination.others : '';

    var vcaccination_category_gender = {
        labels: [
            "Male",
            "Female",
            "Others"
        ],
        datasets: [
            {
                data: [male_vacination, female_vacination, others_vacination],
                backgroundColor: [
                    "#5A8DEE",
                    "#F54394",
                    "#FF9800"
                ],
                hoverBackgroundColor: [
                    "#5A8DEE",
                    "#F54394",
                    "#FF9800"
                ],
                borderRadius: 0,
                borderWidth: 2,
                circumference: 180,
                rotation: 270,
                cutoutPercentage: 35,
            },
        ]
    };
    return vcaccination_category_gender;
}