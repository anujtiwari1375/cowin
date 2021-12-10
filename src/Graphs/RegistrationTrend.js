import React from "react";
import { Line } from 'react-chartjs-2';
import registrationTrends from '../functions/registrationTrends';

class RegistrationTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vaccination_time: 'today',
        }
    }

    registrationTimeChange(type) {
        this.setState({ vaccination_time: type })
    }

    render() {
        var get_public_stats = this.props.get_public_stats;
        var get_stats = this.props.get_stats;
        var registration_trend_today = {};
        if (this.state.vaccination_time === 'today') {
            registration_trend_today = registrationTrends.registrationTrendToday(get_public_stats);
        } else if (this.state.vaccination_time === 'last_30_days') {
            registration_trend_today = registrationTrends.registrationTrendLast30Days(get_stats);
        } else if (this.state.vaccination_time === 'all') {
            registration_trend_today = registrationTrends.registrationTrendAll(get_stats);
        }
        
        if (typeof registration_trend_today.labels !== 'undefined' && (registration_trend_today.labels).length < 1) {
            return <div></div>
        }
        return (
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-title">Registration Trends</div>
                        <div className="card-header">
                            <div>
                                <div className="cm-bttn-wrap clearfix">
                                    <ul>
                                        <li className={this.state.vaccination_time === 'today' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.registrationTimeChange('today') }}>Today</li>
                                        <li className={this.state.vaccination_time === 'last_30_days' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.registrationTimeChange('last_30_days') }}>Last 30 Days</li>
                                        <li className={this.state.vaccination_time === 'all' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.registrationTimeChange('all') }}>All</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Line
                                height={350}
                                data={registration_trend_today}
                                options={
                                    {
                                        showTooltips: true,
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        hover: {
                                            mode: 'nearest',
                                            intersect: true
                                        },
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
                </div>
            </div>
        );
    }
}
export default RegistrationTrend;