import React from "react";
import aefiReport from '../functions/aefiReport';
import { Line } from 'react-chartjs-2';

class Aefi extends React.Component {
    render() {
        var get_public_stats = this.props.get_public_stats;
        const aefi_report = aefiReport(get_public_stats);

        return (
            <div className="card">
                <div className="card-header card-title">AEFI Reported </div>
                <div className="card-body">
                    <Line
                        height={300}
                        data={aefi_report}
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }} />
                </div>
            </div>
        );
    }
}

export default Aefi;