import React from "react";
import { Line } from 'react-chartjs-2';
import vcaccinationTrends from '../functions/vcaccinationTrends';

class VaccinationTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vaccination_type: 'dose',
            vaccination_time: 'today',
        }
    }

    vaccinationTypeChange(type) {
        this.setState({ vaccination_type: type })
    }

    vaccinationTimeChange(type) {
        this.setState({ vaccination_time: type })
    }

    render() {
        var get_public_stats = this.props.get_public_stats;
        var get_stats = this.props.get_stats;
        var vcaccination_dose = {};
        if (this.state.vaccination_type === 'dose') {
            if (this.state.vaccination_time === 'today') {
                vcaccination_dose = vcaccinationTrends.vcaccinationDoseToday(get_public_stats);
            } else if (this.state.vaccination_time === 'last_30_days') {
                vcaccination_dose = vcaccinationTrends.vcaccinationDoseLast30Days(get_stats);
            } else if (this.state.vaccination_time === 'all') {
                vcaccination_dose = vcaccinationTrends.vcaccinationDoseAll(get_stats);
            }
        } else if (this.state.vaccination_type === 'age') {
            if (this.state.vaccination_time === 'today') {
                vcaccination_dose = vcaccinationTrends.vcaccinationAgeToday(get_public_stats);
            } else if (this.state.vaccination_time === 'last_30_days') {
                vcaccination_dose = vcaccinationTrends.vcaccinationAgeLast30Days(get_stats);
            } else if (this.state.vaccination_time === 'all') {
                vcaccination_dose = vcaccinationTrends.vcaccinationAgeAll(get_stats);
            }
        }
        return (
            <div className="row mb-4">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-title">
                            Vaccination Trends
                        </div>
                        <div className="card-header">
                            <div className="cm-bttn-wrap-new clearfix float-left">
                                <ul>
                                    <li className={this.state.vaccination_type === 'dose' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.vaccinationTypeChange('dose') }}>By Doses</li>
                                    <li className={this.state.vaccination_type === 'age' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.vaccinationTypeChange('age') }}>By Age</li>
                                </ul>
                            </div>
                            <div>
                                <div className="cm-bttn-wrap clearfix">
                                    <ul>
                                        <li className={this.state.vaccination_time === 'today' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.vaccinationTimeChange('today') }}>Today</li>
                                        <li className={this.state.vaccination_time === 'last_30_days' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.vaccinationTimeChange('last_30_days') }}>Last 30 Days</li>
                                        <li className={this.state.vaccination_time === 'all' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => { this.vaccinationTimeChange('all') }}>All</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Line
                                height={350}
                                data={vcaccination_dose}
                                options={
                                    {
                                        responsive: true,
                                        title: {
                                            display: true,
                                            text: 'Chart.js Line Chart'
                                        },
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        hover: {
                                            mode: 'nearest',
                                            intersect: true
                                        },
                                        scales: {
                                            xAxes: [{
                                                display: true,
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Month'
                                                }
                                            }],
                                            yAxes: [{
                                                display: true,
                                                scaleLabel: {
                                                    display: true,
                                                },
                                            }]
                                        },
                                        maintainAspectRatio: false,
                                        // title: {
                                        //     display: true,
                                        //     text: 'Average Rainfall per month',
                                        //     fontSize: 20
                                        // },
                                        // legend: {
                                        //     display: true,
                                        //     position: 'right'
                                        // }
                                    }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VaccinationTrend;