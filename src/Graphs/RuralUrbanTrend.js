import React from "react";
import ruralUrbanReport from '../functions/ruralUrbanReport';
import { Line } from 'react-chartjs-2';

class RuralUrbanTrend extends React.Component {
    render() {
        var get_stats = this.props.get_stats;
        const rural_urban_report = ruralUrbanReport(get_stats);

        return (
            <div className="card">
                <div className="card-header">Rural Vs Urban Trend </div>
                <div className="card-body">
                    <Line
                        height={300}
                        data={rural_urban_report}
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

export default RuralUrbanTrend;