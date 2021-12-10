import React from "react";
import vcaccinationCategoryGender from '../functions/vcaccinationCategoryGender';
import vcaccinationCategoryVaccine from '../functions/vcaccinationCategoryVaccine';
import vcaccinationByAge from '../functions/vcaccinationByAge';
import isExists from '../functions/isExists';
import map from 'lodash/map';
import { Doughnut, Pie } from 'react-chartjs-2';
const _ = {
    map: map
};

class VaccinationStats extends React.Component {

    renderStateData(vaccinationbystate) {

        vaccinationbystate.sort(function (a, b) {
            return parseFloat(b.total) - parseFloat(a.total);
        });


        return _.map(vaccinationbystate, state_data => {
            return (
                <tr>
                    <td className="title" style={{
                        'width': '50%',
                        'fontSize': '13px',
                        'color': '#007bff',
                        'fontWeight': '500'
                    }}>{state_data.state_name}</td>
                    <td className="text-right" style={{
                        'width': '25%',
                        'fontSize': '15px',
                        'color': '#12226f',
                        'fontWeight': '600'
                    }}>
                        {state_data.today}
                    </td>
                    <td className="text-right" style={{
                        'width': '25%',
                        'fontSize': '15px',
                        'color': '#12226f',
                        'fontWeight': '600'
                    }}>
                        {state_data.total}
                    </td>
                </tr>
            );
        });
    }

    render() {
        var get_public_stats = this.props.get_public_stats;
        var vcaccination_category_gender = vcaccinationCategoryGender(get_public_stats);
        var vcaccination_category_vaccine = vcaccinationCategoryVaccine(get_public_stats);
        var vcaccinationbyage = vcaccinationByAge(get_public_stats);
        var vaccinationbystate = isExists(get_public_stats) ? get_public_stats.getBeneficiariesGroupBy : [];

        return (
            <div className="row mb-4">
                <div className="col-lg-3 connectedSortable">
                    <div className="card">
                        <div className="card-header card-title">Vaccination - Category</div>
                        <div className="card-body m-auto">
                            <Doughnut
                                width="250"
                                height="175"
                                data={vcaccination_category_gender}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false,
                                }}
                            />
                            <div className="mb-3"></div>
                            <Doughnut
                                width="250"
                                height="175"
                                data={vcaccination_category_vaccine}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 connectedSortable">

                    <div className="card">
                        <div className="card-header">Vaccination by Age</div>
                        <div className="card-body m-auto">
                            <Pie
                                width="375"
                                height="375"
                                data={vcaccinationbyage}
                                options={{
                                    responsive: false,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </div>

                </div>
                <div className="col-lg-5 connectedSortable">
                    <div className="card" style={{
                        'minHeight': '100%',
                        'height': '0',
                        'overflowY': 'auto'
                    }}>
                        <div className="card-header">
                            Vaccination By State/UT
                        </div>
                        <div className="card-body">
                            <div className="slim">
                                <table className="table tblstates">
                                    <thead>
                                        <th>State/UT</th>
                                        <th>Today</th>
                                        <th>Total</th>
                                    </thead>
                                    <tbody>
                                        {this.renderStateData(vaccinationbystate)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VaccinationStats;