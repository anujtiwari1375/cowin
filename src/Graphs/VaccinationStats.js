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


    renderLabel(state_data) {
        if (typeof state_data.session_site_name !== 'undefined') {
            return state_data.session_site_name
        } else if (typeof state_data.district_name !== 'undefined') {
            return state_data.district_name
        } else {
            return state_data.state_name
        }
    }

    renderTableHeader(vaccinationbystate) {
        if (vaccinationbystate.length > 0) {
            var state_data = vaccinationbystate[0];
            if (typeof state_data.session_site_name !== 'undefined') {
                return 'Vaccination By Centers';
            } else if (typeof state_data.district_name !== 'undefined') {
                return 'Vaccination By Districts';
            } else {
                return 'Vaccination By State/UT';
            }
        } else {
            return 'Vaccination By State/UT';
        }
    }

    renderStateData(vaccinationbystate) {

        vaccinationbystate.sort(function (a, b) {
            return parseFloat(b.total) - parseFloat(a.total);
        });


        return _.map(vaccinationbystate, (state_data, index) => {
            return (
                <tr key={`statedata${index}`}>
                    <td className="title" style={{
                        'width': '50%',
                        'fontSize': '13px',
                        'color': '#007bff',
                        'fontWeight': '500'
                    }}>
                        {this.renderLabel(state_data)}
                    </td>
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
                        <div className="card-header card-title">Vaccination by Age</div>
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
                        <div className="card-header card-title">
                            {this.renderTableHeader(vaccinationbystate)}
                        </div>
                        <div className="card-body">
                            <div className="slim">
                                <table className="table tblstates">
                                    <thead>
                                        <tr>
                                            <th>State/UT</th>
                                            <th className="text-right">Today</th>
                                            <th className="text-right">Total</th>
                                        </tr>
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