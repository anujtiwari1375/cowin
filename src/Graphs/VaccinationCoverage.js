import React from "react";
import vaccinationCoverage from '../functions/vaccinationCoverage';
import { Bar } from "react-chartjs-2";

class VaccinationCoverage extends React.Component {

    render() {
        var get_public_stats = this.props.get_public_stats;
        const vaccination_coverage = vaccinationCoverage(get_public_stats);

        return (
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Vaccination Coverage</div>
                        <div className="card-body">
                            <Bar
                                height={400}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Chart.js Bar Chart"
                                        }
                                    }
                                }} data={vaccination_coverage} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VaccinationCoverage;